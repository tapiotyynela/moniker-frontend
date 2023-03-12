import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Text } from "../common";
import { Game } from "../types/game";

const CardContainer = styled.div`
  width: 320px;
  height: 70px;
  background-color: #e2baba;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GameCardElements = styled.div`
  display: flex;
  flex-diraction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 10px;
  flex: 1;
`;

export const GameCard = (game: Game) => {
  const { gameIdentifier } = game;
  const navigate = useNavigate();

  return (
    <CardContainer>
      <GameCardElements>
        <Text color="#ffffff" size={50}>
          GAME: {gameIdentifier}
        </Text>
        <Button
          variant="small"
          onClick={() => navigate("/game", { state: { ...game } })}
        >
          JOIN!
        </Button>
      </GameCardElements>
    </CardContainer>
  );
};
