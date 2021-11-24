import React from "react";
import AboveGame from "./components/AboveGame";
import Game from "./components/Game";
import Header from "./components/Header";

export default function App() {
  return <div className="container">
    <Header />
    <AboveGame />
    <Game />
  </div>
}
