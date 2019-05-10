import React, {useState} from 'react';
import './App.css';
import Board from "./Board";
import {toPosition} from "./lib";

function getNextBoard(board, position, move){
    const nextBoard = [...board];
    nextBoard[position] = move;
    return nextBoard
}

function App() {
    const [board, setBoard] = useState(["","X", "O", "", "", "", "O", "", ""])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Play tris!
        </p>
          <Board className={"trisBoard"} data={board} move={(row, column) => setBoard(getNextBoard(board, toPosition(row, column), "X"))}/>
      </header>
    </div>
  );
}

export default App;
