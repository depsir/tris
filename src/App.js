import React, {useState} from 'react';
import './App.css';
import Board from "./Board";
import {getWinner} from "./lib";

function getNextBoard(board, row, column, move) {
    const nextBoard = [...board];
    nextBoard[row][column] = move;
    return nextBoard
}

function toggleMove(move) {
    return move === 'X' ? 'O' : 'X';
}

function cellIsOccuped(cell) {
    return cell !== "";
}

function App() {
    let initialState = [["", "", ""], ["", "", ""], ["", "", ""]];
    const [board, setBoard] = useState(initialState);
    const [move, setMove] = useState("X");
    const [winner, setWinner] = useState(undefined);

    const boardIsFull = board.reduce((ac, el) => ac.concat(el)).every(cellIsOccuped);

    const getMove = (row, column) => {
        if (cellIsOccuped(board[row][column])) return;
        if (winner) return;
        if (boardIsFull) return;

        const nextBoard = getNextBoard(board, row, column, move);
        setBoard(nextBoard);
        const currentWinner = getWinner(nextBoard);
        if (currentWinner) {
            setWinner(currentWinner)
        }
        setMove(toggleMove(move))
    };

    function resetGame() {
        setBoard(initialState);
        setMove("X");
        setWinner(undefined)
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Play tris!
                </p>
                <Board className={"trisBoard"} data={board}
                       move={getMove}/>
                {winner && <p>Congratulations player {winner}!</p>}
                {boardIsFull && !winner && <p>Nobody won, as always</p>}
                {boardIsFull || winner ? <p onClick={resetGame}>Play again</p> : null}
            </header>
        </div>
    );
}

export default App;
