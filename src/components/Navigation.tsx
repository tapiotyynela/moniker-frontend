import { useNavigate } from "react-router";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
const NavText = styled.p`
  font-size: 30px;
  color: #e2baba;
`;

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavText onClick={() => navigate("/newGame")}>New game</NavText>

      <NavText onClick={() => navigate("/stats")}>Stats</NavText>
      <NavText onClick={() => navigate("/gameHistory")}>Past games</NavText>
      <NavText onClick={() => navigate("/addWords")}>Add words</NavText>
    </NavContainer>
  );
};

export default Navigation;
