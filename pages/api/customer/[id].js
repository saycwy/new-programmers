import { config } from "../db_config";
import sql from "mssql";

export default async function handler(req, res) {
  const {
    query: { id },
    body,
    method,
  } = req;

  let pool = await sql.connect(config);

  switch (method) {
    case "GET":
      let c = await pool
        .request()
        .query(`SELECT * FROM customer WHERE id = ${id}`);

      res.status(200).json(c.recordset[0]);
      break;

    case "PUT":
      try {
        let q = `UPDATE customer 
                      SET cust_name = @cust_name, 
                      business_reg_no = @business_reg_no, 
                      business_reg_dd = @business_reg_dd,
                      phone_no = @body.phone_no,
                      pic_name = @pic_name 
                      WHERE id = ${id}`;

        let save = await pool
          .request()
          .input("cust_name", sql.NVarChar, body.cust_name)
          .input("business_reg_no", sql.NVarChar, body.business_reg_no)
          .input("business_reg_dd", sql.Date, body.business_reg_dd)
          .input("phone_no", sql.NVarChar, body.phone_no)
          .input("pic_name", sql.NVarChar, body.pic_name)
          .query(q);

        res.status(200).send("Updated.");
      } catch (error) {
        console.log(error);
        res.status(400).send("Failed.");
      }
      break;

    case "DELETE":
      let d = await pool
        .request()
        .query(`DELETE FROM customer WHERE id = ${id}`);

      res.status(200).send("Deleted.");
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
