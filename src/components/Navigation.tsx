import { useNavigate } from "react-router";
import styled from "styled-components";
const Navigation = () => {
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
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavText onClick={() => navigate("/stats")}>stats</NavText>
      <NavText onClick={() => navigate("/gameHistory")}>game history</NavText>
      <NavText onClick={() => navigate("/addWords")}>add words</NavText>
    </NavContainer>
  );
};

export default Navigation;
