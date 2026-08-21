import { useState } from 'react';
import styles from './GamesHub.module.css';
import Snake from '../Snake/Snake';
import TicTacToe from '../TicTacToe/TicTacToe';
import Memory from '../Memory/Memory';

const GAMES = [
  { id: 'snake', label: 'Snake', icon: 'fa-solid fa-worm', color: '#2f9e44', component: Snake },
  { id: 'ttt', label: 'Tic-Tac-Toe', icon: 'fa-solid fa-xmark', color: '#0078d7', component: TicTacToe },
  { id: 'memory', label: 'Memory Match', icon: 'fa-solid fa-clone', color: '#3a0ca3', component: Memory },
];

export default function GamesHub() {
  const [active, setActive] = useState(null);
  const ActiveGame = GAMES.find((g) => g.id === active)?.component;

  if (ActiveGame) {
    return (
      <div className={styles.playWrap}>
        <button className={styles.backBtn} onClick={() => setActive(null)}>
          <i className="fa-solid fa-arrow-left" /> All games
        </button>
        <div className={styles.gameStage}>
          <ActiveGame />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.hub}>
      <h3 className={styles.title}>Take a break — pick a game</h3>
      <div className={styles.grid}>
        {GAMES.map((g) => (
          <button key={g.id} className={styles.tile} onClick={() => setActive(g.id)}>
            <i className={g.icon} style={{ color: g.color }} />
            <span>{g.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
