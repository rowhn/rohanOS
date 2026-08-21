import { useEffect, useState } from 'react';
import styles from './LockScreen.module.css';
import { useClock } from '../../hooks/useClock';
import bliss from '../../assets/images/windows.jpg';
import avatar from '../../assets/images/avatar.png';
import snowflakes from '../../assets/images/snowflakes.jpg';
import download from '../../assets/images/download.jpg';

const USERS = [
  { name: 'Rohan', img: avatar },
  { name: 'Administrator', img: snowflakes },
  { name: 'Guest', img: download },
];

export default function LockScreen({ onSignIn }) {
  const { time, dowMonthDate } = useClock();
  const [locked, setLocked] = useState(true);
  const [unlocking, setUnlocking] = useState(false);
  const [user, setUser] = useState(USERS[0]);
  const [pin, setPin] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (!locked) return undefined;
    function unlock() {
      setUnlocking(true);
      setTimeout(() => setLocked(false), 480);
    }
    window.addEventListener('keydown', unlock);
    return () => window.removeEventListener('keydown', unlock);
  }, [locked]);

  function handleSignIn() {
    setSigningIn(true);
    setTimeout(() => onSignIn(), 550);
  }

  return (
    <div className={styles.stage} style={{ backgroundImage: `url(${bliss})` }}>
      <div className={`${styles.overlay} ${!locked ? styles.blurred : ''}`} />

      {locked && (
        <div
          className={`${styles.lockScreen} ${unlocking ? styles.hide : ''}`}
          tabIndex={0}
          onClick={() => {
            setUnlocking(true);
            setTimeout(() => setLocked(false), 480);
          }}
        >
          <div className={styles.lockCorner}>
            <i className="fa-solid fa-wifi" />
            <i className="fa-solid fa-battery-three-quarters" />
          </div>
          <div className={styles.lockClock}>{time}</div>
          <div className={styles.lockDate}>{dowMonthDate}</div>
          <div className={styles.lockHint}>Click anywhere or press any key to sign in</div>
          <div className={styles.lockBottomIcons}>
            <i className="fa-solid fa-wifi" title="Network" />
            <i className="fa-brands fa-accessible-icon" title="Ease of access" />
            <i className="fa-solid fa-power-off" title="Power" />
          </div>
        </div>
      )}

      {!locked && (
        <div className={styles.signIn}>
          {showWelcome && (
            <div className={styles.notifications}>
              <div className={styles.notifCard}>
                <div className={styles.notifHeader}>
                  <div className={styles.notifTitle}>Welcome</div>
                  <button className={styles.notifClose} onClick={() => setShowWelcome(false)}>
                    ×
                  </button>
                </div>
                <div className={styles.notifBody}>
                  <div>Welcome, {user.name}</div>
                  <div className={styles.notifSub}>Have a great session — feel free to look around</div>
                </div>
              </div>
              <div className={styles.notifFooter}>Portfolio OS Notifications</div>
            </div>
          )}

          <div className={styles.container}>
            <div className={styles.profile}>
              <img src={user.img} alt={user.name} className={styles.avatar} />
              <h2 className={styles.name}>{user.name}</h2>
              <div className={styles.status}>
                {signingIn ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin" /> Signing in…
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-lock" /> Locked
                  </>
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="PIN"
                className={styles.pinInput}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
              />
              <button className={styles.submitBtn} onClick={handleSignIn}>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            <div className={styles.pinHint}>Any PIN works here — Or just click on ➡️ </div>

            <div className={styles.signinOptions}>
              <p>Sign-in options</p>
              <div className={styles.optionButtons}>
                <button className={`${styles.optionBtn} ${styles.selected}`} title="PIN">
                  <i className="fa-solid fa-key" />
                </button>
                <button className={styles.optionBtn} title="Fingerprint (for show)">
                  <i className="fa-solid fa-fingerprint" />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.userList}>
            {USERS.map((u) => (
              <div
                key={u.name}
                className={`${styles.userItem} ${user.name === u.name ? styles.active : ''}`}
                onClick={() => {
                  setUser(u);
                  setShowWelcome(true);
                }}
              >
                <img src={u.img} alt={u.name} />
                <span>{u.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.footerActions}>
            <div className={styles.actionBtn} title="Internet">
              <i className="fa-solid fa-wifi" />
            </div>
            <div className={styles.actionBtn} title="Accessibility">
              <i className="fa-brands fa-accessible-icon" />
            </div>
            <div
              className={styles.actionBtn}
              title="Power"
              onClick={() => {
                setLocked(true);
                setUnlocking(false);
              }}
            >
              <i className="fa-solid fa-power-off" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
