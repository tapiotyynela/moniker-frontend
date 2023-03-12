import { useLocation, useNavigate } from "react-router-dom";
import { Container, Title } from "../../common";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import socket from "../../websocket/connectWS";

const Game: React.FC = () => {
  const { user } = useAuth();
  const sok = socket;
  sok.on("connect", () => {
    console.log("Connected -> ", sok.id);
  });
  sok.emit("USER CONNECTED", user?.nickName);

  const navigate = useNavigate();
  const { state }: any = useLocation();
  return (
    <Container>
      <Header
        leftText="Home"
        isHome={false}
        onClickLeftText={() => navigate("/home")}
      />
      <Title color="#E2BABA">{state.gameIdentifier}</Title>
    </Container>
  );
};

export default Game;
