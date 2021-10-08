import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CustomerList = () => {
  const router = useRouter();
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
      _getData(router.query.id);
    }
  }, [router.query.id]);

  // useEffect(() => {
  // }, [id]);

  const _getData = async (cid) => {
    let c = await axios.get(`/api/customer/${cid}`);
    // console.log("c: ", JSON.stringify(c.data, null, 2));
    if (c.statusText === "OK") {
      setData(c.data);
    }
  };

  const _deleteData = async () => {
    let c = confirm('Confirm Delete Customer?');
    if (c) {
      await axios.delete(`/api/customer/${id}`);
      router.push("/azlan/customerlist");
    }
  };

  return (
    <div style={{ padding: 10 }}>
      <h1>Customer Details</h1>
      <hr></hr>
      <div>
        <button
          onClick={() => {
            router.push("/azlan/customerlist");
          }}
        >
          Back
        </button>
        <p></p>
      </div>
      <div>Customer Name: {data.cust_name}</div>
      <div>Business Reg No.: {data.business_reg_no}</div>
      <div>Business Reg Date: {data.business_reg_dd}</div>
      <div>Phone Number: {data.phone_no}</div>
      <div>PIC Name: {data.pic_name}</div>
      <p></p>
      <button
        onClick={() => {
          _deleteData();    
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CustomerList;
