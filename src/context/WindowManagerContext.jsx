import { createContext, useCallback, useContext, useState } from 'react';
import { appRegistry } from '../data/appRegistry';

const WindowManagerContext = createContext(null);

let zCounter = 100;
let offsetCounter = 0;

export function WindowManagerProvider({ children }) {
  const [windows, setWindows] = useState([]); // { id, zIndex, minimized, snapped, top, left, width, height, maximized }
  const [focusedId, setFocusedId] = useState(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const focusWindow = useCallback((id) => {
    setWindows((prev) => {
      const next = prev.map((w) =>
        w.id === id ? { ...w, zIndex: ++zCounter, minimized: false } : w
      );
      return next;
    });
    setFocusedId(id);
  }, []);

  const openWindow = useCallback((id) => {
    const meta = appRegistry[id];
    if (!meta) return;

    if (meta.external) {
      window.open(meta.external, '_blank', 'noopener,noreferrer');
      return;
    }

    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        if (existing.minimized) {
          return prev.map((w) =>
            w.id === id ? { ...w, minimized: false, zIndex: ++zCounter } : w
          );
        }
        if (focusedId === id) {
          return prev.map((w) => (w.id === id ? { ...w, minimized: true } : w));
        }
        return prev.map((w) => (w.id === id ? { ...w, zIndex: ++zCounter } : w));
      }
      const offset = (offsetCounter++ % 6) * 24;
      const isFit = !!meta.fit;
      return [
        ...prev,
        {
          id,
          zIndex: ++zCounter,
          minimized: false,
          snapped: null,
          maximized: isFit,
          top: 90 + offset,
          left: 90 + offset,
          width: 640,
          height: 460,
        },
      ];
    });
    setFocusedId(id);
    setStartMenuOpen(false);
  }, [focusedId]);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setFocusedId((prev) => (prev === id ? null : prev));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
    setFocusedId((prev) => (prev === id ? null : prev));
  }, []);

  const toggleMaximize = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, maximized: !w.maximized, snapped: null } : w
      )
    );
  }, []);

  const setSnap = useCallback((id, side) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, snapped: side, maximized: false } : w))
    );
  }, []);

  const updatePosition = useCallback((id, top, left) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, top, left } : w)));
  }, []);

  const showDesktop = useCallback(() => {
    setWindows((prev) => prev.map((w) => ({ ...w, minimized: true })));
    setFocusedId(null);
  }, []);

  const value = {
    windows,
    focusedId,
    startMenuOpen,
    setStartMenuOpen,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    setSnap,
    updatePosition,
    focusWindow,
    showDesktop,
  };

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error('useWindowManager must be used inside WindowManagerProvider');
  return ctx;
}
