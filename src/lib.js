export function getRow(row, board){
    return board[row];
}

export function getColumn(column, board){
    return board.map(row => row[column])
}

export function getDiagonalOne(board){ // \
    return [board[0][2], board[1][1], board[2][0]]
}

export function getDiagonalTwo(board){ // \
    return [board[0][0], board[1][1], board[2][2]]
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