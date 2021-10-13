import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children, ...others }) => {
  const [all, setAll] = useState("im here");

  // console.log(`Auth Session: ${session}`);
  const getCustList = async () => {
    let arr = [];
    let c = await axios.get("/api/customers");
    
    if (c.statusText === "OK") {
      arr = c.data;
    }
    // console.log("c: ", JSON.stringify(arr, null, 2));
    return arr;
  };

  return (
    <AppContext.Provider
      value={{
        all,
        setAll,
        getCustList,
        ...others,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
