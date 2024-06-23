import React from 'react';

const DownloadGame = () => {
  return (
    <div>
      <h1>Pobierz Grę Snake</h1>
      <p>Kliknij poniższy link, aby pobrać grę:</p>
      <a href="/snake.exe" download>Pobierz Snake_game.zip</a>
    </div>
  );
};

export default DownloadGame;
