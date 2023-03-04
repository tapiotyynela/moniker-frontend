import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewGame = () => {
  const navigate = useNavigate();
  const [roundLength, setLengthOfRounds] = useState<number>(0);
  const [pointsToWin, setPointsToWin] = useState<number>(0);

  const createGame = async () => {};

  return <div></div>;
};

export default NewGame;
