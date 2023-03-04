import { useState } from "react";
import { addWord } from "../../api/word";
import { Word } from "../../types/word";

const AddWords = () => {
  const [word, setWord] = useState<string>("");

  const handleSubmit = async () => {
    const data: Word = {
      word: word,
      timesExplained: 0,
      UserUserId: 1,
    };
    const res = await addWord(data);
  };

  return (
    <div>
      <p>add words</p>
    </div>
  );
};

export default AddWords;
