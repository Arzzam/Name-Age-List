import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";

const StyledCard = styled(Card)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function userNameHandler(event) {
    setEnteredUserName(event.target.value);
  }

  function userAgeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function submitUserHandler(event) {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddData(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  }

  return (
    <StyledCard>
      <form onSubmit={submitUserHandler}>
        <label htmlFor="usename">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={userAgeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </StyledCard>
  );
}

export default AddUser;
