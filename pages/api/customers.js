import { config } from "./db_config";
import sql from "mssql";

export default async function handler(req, res) {
  const { query, body, method } = req;

  let pool = await sql.connect(config);

  switch (method) {
    case "GET":
      try {
        let c = await pool.request().query(`SELECT * FROM customer`);

        res.status(200).json(c.recordset);
      } catch (error) {
        res.status(200).json([]);
      }
      break;

    case "POST":
      try {
        let q = `INSERT INTO customer (cust_name, business_reg_no, business_reg_dd, phone_no, pic_name)
          VALUES (@cust_name, @business_reg_no, @business_reg_dd, @phone_no, @pic_name)`;

        let save = await pool
          .request()
          .input("cust_name", sql.NVarChar, body.cust_name)
          .input("business_reg_no", sql.NVarChar, body.business_reg_no)
          .input("business_reg_dd", sql.Date, body.business_reg_dd)
          .input("phone_no", sql.NVarChar, body.phone_no)
          .input("pic_name", sql.NVarChar, body.pic_name)
          .query(q);

        res.status(200).send("Saved.");
      } catch (error) {
        console.log(error);
        res.status(400).json("Failed.");
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
