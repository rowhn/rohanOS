import { useEffect, useState } from 'react';
import styles from './App.module.css';

import LockScreen from './components/LockScreen/LockScreen';
import Desktop from './components/Desktop/Desktop';

import { WindowManagerProvider } from './context/WindowManagerContext';
import { WallpaperProvider } from './context/WallpaperContext';

export default function App() {
  const [session, setSession] = useState('locked'); // 'locked' | 'desktop'
  const [powerState, setPowerState] = useState(null); // null | 'sleep' | 'restart' | 'shutdown'
  const [booting, setBooting] = useState(true);

  // Desktop experience notice
  const [showDesktopNotice, setShowDesktopNotice] = useState(false);

  // Boot screen
  useEffect(() => {
    const id = setTimeout(() => setBooting(false), 850);

    return () => clearTimeout(id);
  }, []);

  // Show desktop notice only on mobile/tablet-sized screens
  useEffect(() => {
    const checkScreenSize = () => {
      setShowDesktopNotice(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  function handleSignIn() {
    setSession('desktop');
  }

  function handlePower(kind) {
    setPowerState(kind);

    setTimeout(() => {
      if (kind === 'restart') {
        setPowerState(null);
        setSession('locked');
      } else {
        setPowerState(null);
        setSession('locked');
      }
    }, 1100);
  }

  return (
    <WallpaperProvider>
      <WindowManagerProvider>

        <div className={styles.app}>

          {/* Boot Screen */}
          {booting && (
            <div className={styles.boot}>
              <div className={styles.bootRing} />
              <div className={styles.bootText}>
                Welcome
              </div>
            </div>
          )}

          {/* Main OS */}
          {session === 'locked' ? (
            <LockScreen onSignIn={handleSignIn} />
          ) : (
            <Desktop onPower={handlePower} />
          )}

          {/* Power Screen */}
          {powerState && (
            <div className={styles.shutdown}>
              <div className={styles.bootRing} />

              <div>
                {powerState === 'restart' && 'Restarting…'}
                {powerState === 'shutdown' && 'Shutting down…'}
                {powerState === 'sleep' && 'Sleeping…'}
              </div>
            </div>
          )}

          {/* Desktop Experience Notice */}
          {showDesktopNotice && (
            <div className={styles.desktopNoticeOverlay}>
              <div className={styles.desktopNoticeWindow}>

                {/* Title Bar */}
                <div className={styles.desktopNoticeTitlebar}>
                  <div className={styles.desktopNoticeTitle}>
                    <span className={styles.desktopNoticeIcon}>
                      ⚠
                    </span>

                    Desktop Environment
                  </div>

                  <button
                    className={styles.desktopNoticeClose}
                    onClick={() => setShowDesktopNotice(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className={styles.desktopNoticeContent}>

                  <div className={styles.desktopNoticeLargeIcon}>
                    🖥️
                  </div>

                  <div>
                    <h2>
                      This experience is optimized for desktop
                    </h2>

                    <p>
                      This portfolio is designed as an interactive
                      desktop OS experience and is optimized for
                      laptop and desktop screens.
                    </p>

                    <p>
                      For the intended experience, please open this
                      portfolio on a larger screen.
                    </p>
                  </div>

                </div>

                {/* Footer */}
                <div className={styles.desktopNoticeFooter}>
                  <button
                    className={styles.desktopNoticeButton}
                    onClick={() => setShowDesktopNotice(false)}
                  >
                    Continue
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </WindowManagerProvider>
    </WallpaperProvider>
  );
}