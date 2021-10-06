import { useForm } from 'react-hook-form'
 
const CustomerForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <div>
      <div style={{ padding: 10 }}>
        <h1>Customer Form</h1>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register("cust_name")} placeholder="Customer Name" />
          </div>
          <div>
            <input {...register('phone_no')} placeholder="Phone No" />
          </div>
          <div>
            <input {...register('business_reg_no')} placeholder="Business Registration No" />
          </div>
          <div>
            <input {...register('business_reg_dd')} placeholder="Business Registration Date" />
          </div>
          <div>
            <input {...register('pic_name')} placeholder="Person In Charged" />
          </div>
          <div>
            <button type="submit">Save/Modify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
