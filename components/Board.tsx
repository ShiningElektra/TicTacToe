import { useState } from "react";
import styles from "../styles/Board.module.css";
import Square from "./Square";

// 9squares filled with null
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    // Wenn eine Auswahl getroffen wurde, kann der Inhalt nicht mehr verändert werden

    // when click the squares can be filled with x or with o
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    //erstetze die renderSquareValue({renderSquare(0)}) durch den Wert aus useState ->
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  // const status = "Nextplayer: " + (xIsNext ? "X" : "O");
  const winner = calculateWinner(squares);
  let status;
  // wenn es einen gewinner gibt sind keine Züge mehr möglich
  if (winner) {
    status = "winner: " + winner;
  } else {
    // sonst führt er das aus
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    // alle möglichen Lösungen
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // wenn die linien drei gleiche squares beinhalten gibt es einen gewinner
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
