import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import AddUser from "./Components/UserInput/AddUser";
import UserList from "./Components/UserInput/UserList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  background: #1f1f1f;
}

body {
  margin: 0;
}

`;

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
      <GlobalStyle />
      <AddUser onAddData={listHandler} />
      <UserList datas={usersList} />
      <Footer />
    </div>
  );
}

export default App;
