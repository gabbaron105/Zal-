import React from 'react';
import GameButton from './GameButton';
import './App.css';

function App() {
  return (
    <div  className="app" data-testid="app-container">
      <header className="app-header">
        <h1>Snake Game</h1>
      </header>
      <main className="game-info">
        <section className="game-description">
          <p>Welcome to the classic Snake Game!</p>
          <p>Eat apples to grow longer and try to beat your high score.</p>
          <ul>
            <li>Use arrow keys to control the snake</li>
            <li>Avoid hitting the walls or your own tail</li>
            <li>The game gets faster as you grow longer</li>
          </ul>
        </section>
        <section className="game-controls">
          <h2>Ready to play?</h2>
          <GameButton />
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Snake Game. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;