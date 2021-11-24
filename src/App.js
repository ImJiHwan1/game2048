import React, { useState, useEffect } from "react";
import AboveGame from "./components/AboveGame";
import Game from "./components/Game";
import Header from "./components/Header";
import useLocalStoreageNumber from "./hook/useLocalStorage";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStoreageNumber('bestScore', 0);

  useEffect(() => {
    if(score > bestScore) {
      setBestScore(score);
    }
  });

  return <div className="container">
    <Header score={score} bestScore={bestScore} />
    <AboveGame />
    <Game setScore={setScore} />
  </div>
}
