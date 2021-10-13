import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const CustomerForm = () => {
  const router = useRouter();
  const {register,handleSubmit,setError,formState: { errors },} = useForm();

  const onSubmit = async (data) => {
    // console.log(JSON.stringify(data, null, 2));

    if (!data.cust_name) {
      setError(
        "cust_name",
        {
          type: "focus",
          message: "Customer name is required.",
        },
        { shouldFocus: true }
      );
      // setError("cust_name", {
      //   type: "manual",
      //   message: "Customer name is required.",
      // });
    } else {
      // let body = data;
      let body = {
        cust_name: data.cust_name,
        phone_no: data.phone_no,
        business_reg_no: data.business_reg_no,
        business_reg_dd: data.business_reg_dd,
        pic_name: data.pic_name,
      };

      // insert data
      let res = await axios.post(`/api/customers`, body);

      if (res.status === 200) {
        alert(res.data);
      } else {
        alert("Failed.");
      }
    }
  };

  return (
    <div>
      <div style={{ padding: 10 }}>
        <h1>Customer Form</h1>
        <hr></hr>
        <div>
          <button
            onClick={() => {
              router.push("/lingchoo/customerlist");
            }}
          >
            Back
          </button>
          <p></p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register("cust_name")} placeholder="Customer Name" />
            {errors.cust_name && (
              <p style={{ color: "red" }}>{errors.cust_name.message}</p>
            )}
          </div>
          <div>
            <input {...register("phone_no")} placeholder="Phone No" />
          </div>
          <div>
            <input
              {...register("business_reg_no")}
              placeholder="Business Registration No"
            />
          </div>
          <div>
              <select {...register("business_reg_dd")} required>
                  <option value ="">Select</option>
                  <option value ="Ava">Ava</option>
                  <option value ="Alex">Alex</option>
                  </select> 
          </div>
          <div>
            <input {...register("pic_name")} placeholder="Person In Charged" />
          </div>
          <div>
            <p></p>
            <button type="submit">Save/Modify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
