import styled, { keyframes } from "styled-components";
import loading from "../assets/icons/loading.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 10px;
`;

export const Loading = () => {
  return (
    <Rotate>
      <img src={loading} />
    </Rotate>
  );
};
