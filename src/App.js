import React from 'react';
import GameButton from './GameButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="game-info">
        <h1>Snake Game</h1>
        <p>A classic snake game where you eat apples to grow longer. Try to beat your high score!</p>
        <GameButton />
      </div>
    </div>
  );
}

export default App;
