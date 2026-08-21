import { useEffect, useRef } from 'react';
import styles from './Window.module.css';
import { useWindowManager } from '../../context/WindowManagerContext';
import { useDraggableWindow } from '../../hooks/useDraggableWindow';
import { appRegistry } from '../../data/appRegistry';
import AppRenderer from '../../apps/AppRenderer';

export default function Window({ win }) {
  const { closeWindow, minimizeWindow, toggleMaximize, setSnap, updatePosition, focusWindow } =
    useWindowManager();
  const meta = appRegistry[win.id];
  // Tracks the live position during a drag so fast mousemove events accumulate
  // correctly instead of racing the (slower) React re-render of `win`.
  const posRef = useRef({ top: win.top, left: win.left, dragging: false });

  useEffect(() => {
    if (!posRef.current.dragging) {
      posRef.current.top = win.top;
      posRef.current.left = win.left;
    }
  }, [win.top, win.left]);

  const handleDragStart = useDraggableWindow({
    disabled: win.maximized,
    onMove: (dx, dy) => {
      posRef.current.dragging = true;
      posRef.current.top += dy;
      posRef.current.left += dx;
      updatePosition(win.id, posRef.current.top, posRef.current.left);
    },
    onDragEnd: (side) => {
      posRef.current.dragging = false;
      if (side) setSnap(win.id, side);
    },
  });

  if (win.minimized) return null;

  const style = win.maximized
    ? { top: 0, left: 0, width: '100%', height: 'calc(100vh - 48px)', borderRadius: 0, zIndex: win.zIndex }
    : win.snapped
    ? {
        top: 0,
        left: win.snapped === 'left' ? 0 : '50vw',
        width: '50vw',
        height: 'calc(100vh - 48px)',
        borderRadius: 0,
        zIndex: win.zIndex,
      }
    : { top: win.top, left: win.left, width: win.width, height: win.height, zIndex: win.zIndex };

  return (
    <div
      className={styles.window}
      style={style}
      onMouseDown={() => focusWindow(win.id)}
    >
      <div className={styles.titleBar} onMouseDown={handleDragStart}>
        <div className={styles.titleText}>{meta.title}</div>
        <div className={styles.controls}>
          <button aria-label="Minimize" onClick={() => minimizeWindow(win.id)}>
            <span className={styles.minIcon} />
          </button>
          <button aria-label="Maximize" onClick={() => toggleMaximize(win.id)}>
            <span className={styles.maxIcon} />
          </button>
          <button aria-label="Close" className={styles.closeBtn} onClick={() => closeWindow(win.id)}>
            ✕
          </button>
        </div>
      </div>
      <div className={`${styles.body} ${meta.fit ? styles.bodyFlush : ''} scrollable`}>
        <AppRenderer id={win.id} />
      </div>
    </div>
  );
}
