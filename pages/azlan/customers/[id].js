import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const CustomerList = () => {
  const router = useRouter();
  const [id, setId] = useState(0);
  // const [data, setData] = useState([]);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
      _getData(router.query.id);
    }
  }, [router.query.id]);

  const _getData = async (cid) => {
    let c = await axios.get(`/api/customer/${cid}`);
    // console.log("c: ", JSON.stringify(c.data, null, 2));
    if (c.statusText === "OK") {
      // setData(c.data);
      let cust = c.data;

      setValue("cust_name", cust.cust_name);
      setValue("phone_no", cust.phone_no);
      setValue("business_reg_no", cust.business_reg_no);
      setValue("business_reg_dd", cust.business_reg_dd.substring(0, 10));
      setValue("pic_name", cust.pic_name);
    }
  };

  const _deleteData = async () => {
    let c = confirm("Confirm Delete Customer?");
    if (c) {
      await axios.delete(`/api/customer/${id}`);
      router.push("/azlan/customerlist");
    }
  };

  const onSubmit = async (data) => {
    let body = {
      cust_name: data.cust_name,
      phone_no: data.phone_no,
      business_reg_no: data.business_reg_no,
      business_reg_dd: data.business_reg_dd,
      pic_name: data.pic_name,
    };
    //console.log(body);

    let res = await axios.put(`/api/customer/${id}`, body); //api/customers adui. haha
    console.log("res: ", res);
    if (res.status === 200) {
      alert(res.data);
    } else {
      alert("Failed.");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("cust_name")} placeholder="Customer Name" />
        </div>
        <div>
          <input {...register("phone_no")} placeholder="Phone Number" />
        </div>
        <div>
          <input
            {...register("business_reg_no")}
            placeholder="Business Reg No"
          />
        </div>
        <div>
          <input
            {...register("business_reg_dd")}
            placeholder="Business Reg Date"
          />
        </div>
        <div>
          {/* <input {...register("pic_name")} placeholder="PIC Name" /> */}
          <select {...register("pic_name")} required>
            <option value="">select...</option>
            <option value="Zack">Zack</option>
            <option value="Denis">Denis</option>
            <option value="Juju">Juju</option>
          </select>
        </div>
        <div>
          <p></p>
          <button type="submit">Modify</button>

          <button
            onClick={() => {
              _deleteData();
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerList;
