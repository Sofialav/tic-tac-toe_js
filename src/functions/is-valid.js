const symbols = [ 'x', 'o', null ]

function isValidBoard(board, isValidLength) {
  function isValidLength(board) {
    const lines = board.length;
    if (lines === 3) {
      const isThree = (currentValue) => currentValue.length === 3;
      return board.every(isThree);
    } else {
      return false;
    }
  }
  if (isValidLength(board) === true) {
    return board.every(line => {
      return line.every(element => {
        return symbols.includes(element);
      });
    });
  } else {
    return false;
  }
}

module.exports = {isValidBoard}
