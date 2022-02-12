export const selectPlayerHasAdvantage = (playerId) => {
  return (state) => state.advantage === playerId;
};

export const selectNbWins = (playerId) => {
  // 1 - Return a function returning current player nb wins
  return (state) => {
    // 2 - Get history
    const history = state.history;

    // 3 - Loop over history to get nb wins for current player
    let wins = 0;
    // 3a - Foreach version
    // history.forEach((h) => {
    //   h.winner === playerId && wins++;
    // });
    // 3b - Filter version
    wins = history.filter((item) => item.winner === playerId).length;
    console.log(`${wins} Wins for ${playerId}`);
    return wins;
  };
};
