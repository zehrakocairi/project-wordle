import React from "react";

function GameOverBanner({ gameStatus, numOfGueses, answer }) {
  if (gameStatus === "won")
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numOfGueses === 1 ? "1 guess" : `${numOfGueses} gueses`}</strong>.
        </p>
      </div>
    );
  else if (gameStatus === "lost")
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
}

export default GameOverBanner;
