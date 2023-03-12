import styled from "styled-components";

type ButtonProps = {
  variant: "small" | "normal";
};
export const Button = styled.button`
  border-radius: 8px;
  width: ${(props: ButtonProps) =>
    props.variant === "small" ? "100px" : "160px"};
  height: ${(props: ButtonProps) =>
    props.variant === "small" ? "30px" : "50px"};
  background-color: white;
  font-family: "Advent Pro", sans-serif;
  font-size: ${(props: ButtonProps) =>
    props.variant === "small" ? "12.5px" : "20px"};
  color: #c29191;
  border: 1px solid #c29191;
  margin: 5px;

  &:active {
    background-color: #fff0f0;
  }
`;
