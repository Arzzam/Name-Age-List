import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import AddUser from "./Components/UserInput/AddUser";
import UserList from "./Components/UserInput/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  function listHandler(uName, uAge) {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }

  return (
    <div>
      <AddUser onAddData={listHandler} />
      <UserList datas={usersList} />
      <Footer />
    </div>
  );
}

export default App;
