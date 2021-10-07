import axios from 'axios';
import { useEffect, useState } from "react";

const CustomerList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let c = await axios.get("/api/customers");
    // console.log("c: ", JSON.stringify(c.data, null, 2));
    if (c.statusText === "OK") {
      setList(c.data);
    }
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>Customer List</h1>
      <hr></hr>
      <div>
      <table border={1} width="100%" cellPadding="2px">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Business Reg No.</th>
            <th>Business Reg Date</th>
            <th>Phone Number</th>
            <th>PIC Name</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.cust_name}</td>
              <td>{item.business_reg_no}</td>
              <td>{item.business_reg_dd.substring(0,10)}</td>
              <td>{item.phone_no}</td>
              <td>{item.pic_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CustomerList;
