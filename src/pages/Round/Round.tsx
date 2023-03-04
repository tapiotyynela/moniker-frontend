import { Circle } from "rc-progress";
import { useEffect, useState } from "react";

const Round: React.FC = () => {
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    if (timer < 61 && timer > -1) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div style={{ padding: 70 }}>
      <div style={{ position: "relative", top: 80 }}>
        <p>{timer.toString()}</p>
      </div>
      <Circle
        strokeWidth={4}
        percent={(60 / 100) * (timer * 2.79)}
        strokeColor="#6740BA"
        style={{ position: "relative", bottom: 100 }}
      />
    </div>
  );
};

export default Round;
