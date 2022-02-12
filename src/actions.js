// actions creators

export const setPlaying = (playing) => ({
  type: "setPlaying",
  payload: playing,
});

export const restartGame = () => ({ type: "restart" });

export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player },
});

export function autoplay(store) {
  const isPlaying = store.getState().playing;
  const delay = 2; // Delay between actions in seconds

  function play() {
    window.setTimeout(() => {
      // le jeu est-il toujours en cours ?
      if (store.getState().playing === false) {
        // Si non, on ne fait rien
        return;
      }
      // si oui on marque un point aléatoire
      const pointWinner = Math.random() > 0.5 ? "player1" : "player2";
      store.dispatch(pointScored(pointWinner));

      // Si a la fin du temps imparti il n'y a pas de gagnant, on relance un jeu
      if (store.getState().winner === null) play();
      // Sinon on remet le jeu en pause
      else {
        // on remet le jeu en pause
        store.dispatch(setPlaying(false));
      }
    }, 500);
  }

  if (isPlaying) {
    // Déjà entrain de jouer, on ne fait rien
    return;
  }
  // on indique que la partie est en cours
  store.dispatch(setPlaying(true));
  // on lance le jeu automatique
  play();
}
