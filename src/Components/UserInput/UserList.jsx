import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const StyledCard = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

function UserList(props) {
  return (
    <StyledCard>
      <ul>
        {props.datas.map((data) => (
          <li key={data.id}>
            {data.name} ({data.age} Years Old)
          </li>
        ))}
      </ul>
    </StyledCard>
  );
}
export default UserList;
