import { useEffect, useState } from 'react';
import styles from './TicTacToe.module.css';

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function calculateWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return null;
}

function bestMove(board) {
  const empty = board.map((v, i) => (v ? null : i)).filter((v) => v !== null);

  // Win if possible
  for (const i of empty) {
    const copy = [...board];
    copy[i] = 'O';
    if (calculateWinner(copy)?.winner === 'O') return i;
  }
  // Block player
  for (const i of empty) {
    const copy = [...board];
    copy[i] = 'X';
    if (calculateWinner(copy)?.winner === 'X') return i;
  }
  // Take center
  if (!board[4]) return 4;
  // Take a corner
  const corners = [0, 2, 6, 8].filter((i) => !board[i]);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  // Anything else
  return empty[Math.floor(Math.random() * empty.length)];
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });
  const result = calculateWinner(board);
  const isDraw = !result && board.every(Boolean);

  useEffect(() => {
    if (result || isDraw) {
      setScores((s) => {
        if (result) return { ...s, [result.winner]: s[result.winner] + 1 };
        return { ...s, draw: s.draw + 1 };
      });
      return;
    }
    if (turn === 'O') {
      const id = setTimeout(() => {
        setBoard((prev) => {
          const move = bestMove(prev);
          if (move === undefined) return prev;
          const next = [...prev];
          next[move] = 'O';
          return next;
        });
        setTurn('X');
      }, 400);
      return () => clearTimeout(id);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn, board]);

  function handleClick(i) {
    if (board[i] || result || isDraw || turn !== 'X') return;
    const next = [...board];
    next[i] = 'X';
    setBoard(next);
    setTurn('O');
  }

  function newRound() {
    setBoard(Array(9).fill(null));
    setTurn('X');
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.scoreRow}>
        <span>You (X): {scores.X}</span>
        <span>Draws: {scores.draw}</span>
        <span>CPU (O): {scores.O}</span>
      </div>

      <div className={styles.board}>
        {board.map((v, i) => (
          <button
            key={i}
            className={`${styles.cell} ${result?.line.includes(i) ? styles.win : ''}`}
            onClick={() => handleClick(i)}
          >
            {v}
          </button>
        ))}
      </div>

      <div className={styles.status}>
        {result
          ? result.winner === 'X' ? 'You win! 🎉' : 'CPU wins this one.'
          : isDraw
          ? "It's a draw."
          : turn === 'X'
          ? 'Your move'
          : 'CPU thinking…'}
      </div>

      <button className={styles.resetBtn} onClick={newRound}>
        New round
      </button>
    </div>
  );
}
