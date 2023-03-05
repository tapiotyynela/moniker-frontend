import styled from "styled-components";

export const Title = styled.p`
  font-family: "Advent Pro", sans-serif;
  font-size: 70px;
  font-weight: 600;
  letter-spacing: 15px;
  color: ${(props) => props.color};
  text-shadow: 1px 0px 0px #e2baba, /* Right shadow */ -1px 0px 0px #e2baba,
    /* Left shadow */ 0px 1px 0px #e2baba,
    /* Bottom shadow */ 0px -1px 0px #e2baba; /* Top shadow */
`;
