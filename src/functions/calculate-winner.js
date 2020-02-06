function calculateWinner(board) {
  const outcome = board.map(line => {
    return line.reduce((acc, currValue) => {
      if (acc === currValue) {
        return currValue;
      } else {
        return null;
      }
    })
  });
  if (outcome.includes('o')) {
    return 'o';
  } else if (outcome.includes('x')) {
    return 'x';
  } else {
    return null;
  }
}

module.exports = {calculateWinner}