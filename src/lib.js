export function toPosition(row, column){
    return row*3 + column;
}

export function getRow(row, board){
    return [board[row*3], board[row*3+1], board[row*3+2]];
}

export function getColumn(column, board){
    return [board[column], board[3+column], board[6+column]];
}

export function getDiagonalOne(board){ // \
    return [board[0], board[4], board[8]]
}

export function getDiagonalTwo(board){ // \
   return [board[2], board[4], board[6]]
}

function isWinning(threeCells) {
    return threeCells.every(cell => threeCells[0] === cell);
}

export function getWinner(board){
    const combinations = [
        getRow(0,board),
        getRow(1,board),
        getRow(2,board),
        getColumn(0,board),
        getColumn(1,board),
        getColumn(2,board),
        getDiagonalOne(board),
        getDiagonalTwo(board)
    ];

    const winningCombinations = combinations.filter(isWinning);
    if (winningCombinations.length === 0) {
        return undefined;
    }

    return winningCombinations[0][0]
}