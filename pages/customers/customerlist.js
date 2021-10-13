import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/appContext";

const CustomerList = () => {
  const router = useRouter();
  const [list, setList] = useState([]);
  const { getCustList } = useContext(AppContext);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let tmp = await getCustList();

    setList(tmp);
    // let c = await axios.get("/api/customers");
    // // console.log("c: ", JSON.stringify(c.data, null, 2));
    // if (c.statusText === "OK") {
    //   setList(c.data);
    // }
  };

  const _goToForm = () => {
    router.push("/customers/customerform");
  };

  const _goToDetails = (id) => {
    router.push(`/customers/details/${id}`);
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>Customer List</h1>
      <hr></hr>
      <div>
        <button onClick={_goToForm}>Create New</button>
        <p></p>
      </div>
      <div>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.cust_name}</td>
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
