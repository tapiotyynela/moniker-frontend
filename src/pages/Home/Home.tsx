import { useState } from "react";
import { getGameByIdentifier } from "../../api/game";
import { Button, Container, Input, Loading, Text, Title } from "../../common";
import { Header } from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [game, setGame] = useState(null);

  const pressButton = async () => {
    setIsLoading(true);
    const game = await getGameByIdentifier(inputValue);
    if (game) {
      setMessage("PELI LÖYTYI");
    } else {
      setMessage("EI PELIÄ");
    }
    setGame(game);
    setIsLoading(false);
    console.log(game);
  };

  return (
    <Container>
      <Header nickname={user?.nickName || ""} />
      <Title color="#E2BABA">Moniker</Title>
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search by game ID"
        width={200}
      />
      <Button color="#E2BABA" onClick={pressButton}>
        Search
      </Button>
      {isLoading && <Loading />}
      {game ? (
        <Text color="#E2BABA" size={30}>
          {message}
        </Text>
      ) : (
        <Text color="#E2BABA" size={30}>
          {message}
        </Text>
      )}
      <Navigation />
    </Container>
  );
};

export default Home;
