import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";

const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & header {
    background: #4f005f;
    padding: 1rem;
  }

  & header h2 {
    margin: 0;
    color: white;
  }

  & div {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

function ErrorModel(props) {
  return (
    <div>
      <StyledCard>
        <header>
          <h2>{props.heading}</h2>
        </header>
        <div>
          <p>{props.msg}</p>
        </div>
        <footer>
          <Button>OK</Button>
        </footer>
      </StyledCard>
    </div>
  );
}

export default ErrorModel;
