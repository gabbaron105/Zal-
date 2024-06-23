import React from 'react';

function GameButton() {
  return (
    <div className="game-button">
      <a href="./snake.exe" download>
        <button>Download</button>
      </a>
    </div>
  );
}

export default GameButton;
