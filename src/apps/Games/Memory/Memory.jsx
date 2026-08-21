import { useEffect, useState } from 'react';
import styles from './Memory.module.css';

const ICONS = [
  'fa-solid fa-code', 'fa-brands fa-react', 'fa-solid fa-database',
  'fa-brands fa-node-js', 'fa-solid fa-server', 'fa-solid fa-terminal',
  'fa-brands fa-git-alt', 'fa-solid fa-cube',
];

function buildDeck() {
  const pairs = [...ICONS, ...ICONS].map((icon, i) => ({
    id: i,
    icon,
    flipped: false,
    matched: false,
  }));
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs;
}

export default function Memory() {
  const [deck, setDeck] = useState(buildDeck);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const solved = deck.every((c) => c.matched);

  useEffect(() => {
    if (selected.length !== 2) return;
    setLocked(true);
    setMoves((m) => m + 1);
    const [a, b] = selected;
    const isMatch = deck[a].icon === deck[b].icon;

    const id = setTimeout(() => {
      setDeck((prev) =>
        prev.map((c, i) => {
          if (i !== a && i !== b) return c;
          return isMatch ? { ...c, matched: true } : { ...c, flipped: false };
        })
      );
      setSelected([]);
      setLocked(false);
    }, isMatch ? 350 : 700);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  function handleFlip(i) {
    if (locked || deck[i].flipped || deck[i].matched || selected.length === 2) return;
    setDeck((prev) => prev.map((c, idx) => (idx === i ? { ...c, flipped: true } : c)));
    setSelected((prev) => [...prev, i]);
  }

  function restart() {
    setDeck(buildDeck());
    setSelected([]);
    setMoves(0);
    setLocked(false);
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.hud}>
        <span>Moves: {moves}</span>
        {solved && <span className={styles.won}>Solved! 🎉</span>}
      </div>

      <div className={styles.grid}>
        {deck.map((card, i) => (
          <button
            key={card.id}
            className={`${styles.card} ${card.flipped || card.matched ? styles.flipped : ''} ${card.matched ? styles.matched : ''}`}
            onClick={() => handleFlip(i)}
          >
            {(card.flipped || card.matched) ? <i className={card.icon} /> : <i className="fa-solid fa-question" />}
          </button>
        ))}
      </div>

      <button className={styles.resetBtn} onClick={restart}>
        {solved ? 'Play again' : 'Restart'}
      </button>
    </div>
  );
}
