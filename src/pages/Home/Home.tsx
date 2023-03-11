import { useState } from "react";
import { Button, Container, Input, Loading, Title } from "../../common";
import { Header } from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pressButton = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Container>
      <Header nickname={user?.nickName || ""} />
      <Title color="#E2BABA">Moniker</Title>
      <Input placeholder="Search by game ID" width={200} />
      <Button color="#E2BABA" onClick={pressButton}>
        Search
      </Button>
      {isLoading && <Loading />}
      <Navigation />
    </Container>
  );
};

export default Home;
