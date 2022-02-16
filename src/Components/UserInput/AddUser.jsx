import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";

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
  const [error, setError] = useState(false);

  function userNameHandler(event) {
    setEnteredUserName(event.target.value);
  }

  function userAgeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHanndler() {
    setError(null);
  }

  function submitUserHandler(event) {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        heading: "Invalid Input",
        msg: "Please Enter Valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        heading: "Invalid Age",
        msg: "Please Enter Valid Age (> 0).",
      });
      return;
    }
    props.onAddData(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  }

  return (
    <div>
      {error && (
        <ErrorModel
          heading={error.heading}
          msg={error.msg}
          onBackDrop={errorHanndler}
        />
      )}
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
    </div>
  );
}

export default AddUser;
