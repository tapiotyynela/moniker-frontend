import { Container } from "../../common/FormContainer";
import { Title } from "../../common/Title";
import { Header } from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header nickname={user?.nickName || ""} />
      <Title color="#E2BABA">Moniker</Title>
      <Navigation />
    </Container>
  );
};

export default Home;
