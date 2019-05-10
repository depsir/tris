import React, {useState} from 'react';
import './App.css';
import Board from "./Board";
import {toPosition} from "./lib";

function getNextBoard(board, position, move) {
    const nextBoard = [...board];
    nextBoard[position] = move;
    return nextBoard
}

function toggleMove(move) {
    return move === 'X' ? 'O' : 'X';
}

function App() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [move, setMove] = useState("X");

    const getMove = (row, column) => {
        setBoard(getNextBoard(board, toPosition(row, column), move));
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
            </header>
        </div>
    );
}

export default App;
