import axios from "axios";
import { useEffect, useState } from "react";

const FamilyMembers = () => {
  //set state
  const [count, setCount] = useState(0);
  const [data, masukData] = useState([]);

  //get data
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/familymembers");
    // console.log(res);
    masukData(res.data);
  };

  //button function
  const handleCount = () => {
    setCount(count + 1);
  };

  //run all the time
  // useEffect(() => {
  //   console.log('Run everytime a state is changed.');
  // })

  //run on load
  useEffect(() => {
    console.log("Run on load.");
    getData();
  }, []);

  //run when count is changed
  // useEffect(() => {
  //   console.log("Current count: ", count);

  //   // getData();
  // }, [count]);

  // useEffect(() => {
  //   console.log("Data dah tukar: ", data);
  // }, [data]);

  return (
    <div style={{ padding: 10 }}>
      <h1>Family Members Page</h1>
      <hr></hr>
      <button onClick={handleCount}>Set Count</button>{" "}
      <button onClick={getData}>Get Data</button>
      <p>
        <b>Current Count: {count}</b>
      </p>
      <p>
        <b>Family Member Size: {data.length}</b>
      </p>
      <p></p>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FamilyMembers;
