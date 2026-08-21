import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Snake.module.css';

const GRID = 20;
const CELL = 18;
const SPEED_MS = 110;

function randomCell(exclude) {
  let cell;
  do {
    cell = {
      x: Math.floor(Math.random() * GRID),
      y: Math.floor(Math.random() * GRID),
    };
  } while (exclude.some((s) => s.x === cell.x && s.y === cell.y));
  return cell;
}

export default function Snake() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }]);
  const [food, setFood] = useState(() => randomCell([{ x: 9, y: 10 }]));
  const dirRef = useRef({ x: 1, y: 0 });
  const nextDirRef = useRef({ x: 1, y: 0 });
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const reset = useCallback(() => {
    const initial = [{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }];
    setSnake(initial);
    setFood(randomCell(initial));
    dirRef.current = { x: 1, y: 0 };
    nextDirRef.current = { x: 1, y: 0 };
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      const key = e.key;
      const d = dirRef.current;
      if ((key === 'ArrowUp' || key === 'w') && d.y === 0) nextDirRef.current = { x: 0, y: -1 };
      else if ((key === 'ArrowDown' || key === 's') && d.y === 0) nextDirRef.current = { x: 0, y: 1 };
      else if ((key === 'ArrowLeft' || key === 'a') && d.x === 0) nextDirRef.current = { x: -1, y: 0 };
      else if ((key === 'ArrowRight' || key === 'd') && d.x === 0) nextDirRef.current = { x: 1, y: 0 };
      else if (key === ' ') { e.preventDefault(); if (!running) reset(); }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [running, reset]);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      dirRef.current = nextDirRef.current;
      setSnake((prev) => {
        const head = { x: prev[0].x + dirRef.current.x, y: prev[0].y + dirRef.current.y };

        const hitWall = head.x < 0 || head.y < 0 || head.x >= GRID || head.y >= GRID;
        const hitSelf = prev.some((s) => s.x === head.x && s.y === head.y);
        if (hitWall || hitSelf) {
          setRunning(false);
          setGameOver(true);
          setBest((b) => Math.max(b, prev.length - 3));
          return prev;
        }

        const ateFood = head.x === food.x && head.y === food.y;
        const nextSnake = [head, ...prev];
        if (ateFood) {
          setScore((s) => s + 10);
          setFood(randomCell(nextSnake));
        } else {
          nextSnake.pop();
        }
        return nextSnake;
      });
    }, SPEED_MS);
    return () => clearInterval(id);
  }, [running, food]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, GRID * CELL, GRID * CELL);
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, GRID * CELL, GRID * CELL);

    ctx.fillStyle = '#ff5da2';
    ctx.fillRect(food.x * CELL + 2, food.y * CELL + 2, CELL - 4, CELL - 4);

    snake.forEach((seg, i) => {
      ctx.fillStyle = i === 0 ? '#4cc2ff' : '#2f9e44';
      ctx.fillRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2);
    });
  }, [snake, food]);

  return (
    <div className={styles.wrap}>
      <div className={styles.hud}>
        <span>Score: {score}</span>
        <span>Best: {best}</span>
      </div>
      <div className={styles.canvasWrap}>
        <canvas ref={canvasRef} width={GRID * CELL} height={GRID * CELL} className={styles.canvas} />
        {!running && (
          <div className={styles.overlay}>
            <div className={styles.overlayTitle}>{gameOver ? 'Game Over' : 'Snake'}</div>
            <button className={styles.playBtn} onClick={reset}>
              {gameOver ? 'Play again' : 'Start'}
            </button>
            <div className={styles.hint}>Arrow keys or WASD to move</div>
          </div>
        )}
      </div>
    </div>
  );
}
