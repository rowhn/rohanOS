import { useState } from "react";

import styles from "./Desktop.module.css";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import Window from "../Window/Window";
import Taskbar from "../Taskbar/Taskbar";
import StartMenu from "../StartMenu/StartMenu";
import ContextMenu from "../ContextMenu/ContextMenu";
import QuickSettings from "../Flyouts/QuickSettings";
import Calendar from "../Flyouts/Calendar";

import {
  appRegistry,
  desktopIconOrder,
} from "../../data/appRegistry";

import { useWindowManager } from "../../context/WindowManagerContext";
import { useWallpaper } from "../../context/WallpaperContext";

export default function Desktop({ onPower }) {
  const {
    windows,
    openWindow,
    startMenuOpen,
    setStartMenuOpen,
    showDesktop,
  } = useWindowManager();

  const { wallpaper } = useWallpaper();

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [ctxMenu, setCtxMenu] = useState(null);
  const [activeFlyout, setActiveFlyout] = useState(null);
  const [largeIcons, setLargeIcons] = useState(false);
  const [iconOrder, setIconOrder] = useState(desktopIconOrder);

  function handleDesktopClick() {
    setSelectedIcon(null);
    setCtxMenu(null);
    setActiveFlyout(null);
    setStartMenuOpen(false);
  }

  function handleContextMenu(e) {
    // Don't show the desktop context menu over icons or windows.
    if (
      e.target.closest(`.${styles.icons}`) ||
      e.target.closest("[data-window]")
    ) {
      return;
    }

    e.preventDefault();

    const x = Math.min(
      e.clientX,
      window.innerWidth - 230
    );

    const y = Math.min(
      e.clientY,
      window.innerHeight - 260
    );

    setCtxMenu({ x, y });
  }

  function toggleFlyout(which) {
    setStartMenuOpen(false);

    setActiveFlyout((prev) =>
      prev === which ? null : which
    );
  }

  function handleOpenApp(id) {
    openWindow(id);
    setStartMenuOpen(false);
  }

  return (
    <div
      className={styles.desktop}
      style={{
        backgroundImage: `url(${wallpaper.src})`,
      }}
      onClick={handleDesktopClick}
      onContextMenu={handleContextMenu}
    >
      {/* Desktop Icons */}
      <div className={styles.icons}>
        {iconOrder.map((id) => (
          <DesktopIcon
            key={id}
            id={id}
            meta={appRegistry[id]}
            selected={selectedIcon === id}
            large={largeIcons}
            onSelect={(iconId) =>
              setSelectedIcon(iconId)
            }
            onOpen={(iconId) =>
              openWindow(iconId)
            }
          />
        ))}
      </div>

      {/* Open Windows */}
      {windows
        .slice()
        .sort(
          (a, b) =>
            a.zIndex - b.zIndex
        )
        .map((win) => (
          <div
            key={win.id}
            data-window
          >
            <Window win={win} />
          </div>
        ))}

      {/* Windows Taskbar */}
      <Taskbar
        onToggleFlyout={toggleFlyout}
        activeFlyout={activeFlyout}
        onShowDesktop={showDesktop}
      />

      {/* Start Menu */}
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <StartMenu
          open={startMenuOpen}
          onOpenApp={handleOpenApp}
          onPower={onPower}
        />
      </div>

      {/* Quick Settings */}
      {activeFlyout === "quick" && (
        <QuickSettings />
      )}


      {/* Calendar */}
      {activeFlyout === "calendar" && (
        <Calendar />
      )}

      {/* Desktop Context Menu */}
      {ctxMenu && (
        <ContextMenu
          x={ctxMenu.x}
          y={ctxMenu.y}
          onClose={() =>
            setCtxMenu(null)
          }
          onView={() => {
            setLargeIcons(
              (value) => !value
            );

            setCtxMenu(null);
          }}
          onSort={() => {
            setIconOrder((prev) =>
              [...prev].sort(
                (a, b) =>
                  appRegistry[a].shortLabel.localeCompare(
                    appRegistry[b].shortLabel
                  )
              )
            );

            setCtxMenu(null);
          }}
          onRefresh={() => {
            setCtxMenu(null);
          }}
          onPersonalize={() => {
            openWindow("personalize");
            setCtxMenu(null);
          }}
          onAbout={() => {
            openWindow("about");
            setCtxMenu(null);
          }}
        />
      )}
    </div>
  );
}