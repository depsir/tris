import React, {useState} from 'react';
import './App.css';
import Board from "./Board";
import {getWinner, toPosition} from "./lib";

function getNextBoard(board, position, move) {
    const nextBoard = [...board];
    nextBoard[position] = move;
    return nextBoard
}

function toggleMove(move) {
    return move === 'X' ? 'O' : 'X';
}

/* TODO
- play again
- already occupied cell
- game ended
 */

function App() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [move, setMove] = useState("X");
    const [winner, setWinner] = useState(undefined);

    const getMove = (row, column) => {
        const nextBoard = getNextBoard(board, toPosition(row, column), move);
        setBoard(nextBoard);
        const currentWinner = getWinner(nextBoard);
        if (currentWinner) {
            setWinner(currentWinner)
        }
        setMove(toggleMove(move))
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Play tris!
                </p>
                <Board className={"trisBoard"} data={board}
                       move={getMove}/>
                {winner && <p>Congratulations player {winner}!</p>}
            </header>
        </div>
    );
}

export default App;
