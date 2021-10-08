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
    }
  }, [router.query.id]);

  useEffect(() => {
    _getData();
  }, [id]);

  const _getData = async () => {
    let c = await axios.get(`/api/customer/${id}`);
    // console.log("c: ", JSON.stringify(c.data, null, 2));
    if (c.statusText === "OK") {
      setData(c.data);
    }
  };

  const _deleteData = async () => {
    await axios.delete(`/api/customer/${id}`);
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
      <p></p>
      <button
        onClick={() => {
          _deleteData(); //add confirmation alert?
          router.push("/azlan/customerlist");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CustomerList;
