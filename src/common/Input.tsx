import styled from "styled-components";

export const Input = styled.input`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  font-size: 15px;
  width: ${(props) => props.width || "270px"};
  height: 25px;
  outline: none;
  border: 1px solid #a0a0a0;
  margin: 5px;
`;
