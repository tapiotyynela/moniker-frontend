import styled from "styled-components";

type TextProps = {
  size: 20 | 30 | 50;
};

export const Text = styled.p`
  font-family: "Advent Pro", sans-serif;
  font-size: ${(props: TextProps) => props.size};
  color: ${(props) => props.color};
  font-weight: 600;
`;
