import axios from "axios";
import { useEffect, useState, useContext } from "react";
import router, { useRouter } from "next/router";
import { AppContext } from "../../context/appContext";

const CustomerList = () => {
  const [list, setList] = useState([]);
  const { getCustList } = useContext(AppContext);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let res = await getCustList();
    setList(res);
    // let c = await axios.get("/api/customers");
    // // console.log("c: ", JSON.stringify(c.data, null, 2));
    // if (c.statusText === "OK") {
    //   setList(c.data);
    // }
  };

  const _goToForm = () => {
    router.push("/azlan/customerform");
  };

  const _goToDetails = (id) => {
    router.push(`/azlan/customers/${id}`);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1>Customer List</h1>
      <hr></hr>
      <button
        onClick={() => {
          _goToForm();
        }}
      >
        Create New
      </button>
      <p></p>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.cust_name}</td>
                <td>{item.business_reg_no}</td>
                <td>{item.business_reg_dd}</td>
                <td>{item.phone_no}</td>
                <td>{item.pic_name}</td>
                <td>
                  <button
                    onClick={() => {
                      _goToDetails(item.id);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
