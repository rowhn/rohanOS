# Rohan Dohe — Portfolio OS (React)

A Windows-style desktop portfolio, rebuilt in React with a proper component
architecture, external CSS Modules, mini-games, and working GitHub/LinkedIn
shortcuts.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  apps/          One folder per "app" that can open in a window
                 (Resume, About, Experience, Projects, Skills,
                 Certifications, Contact, Explorer, Browser, Code,
                 Paint, Recycle, Personalize, Games/*)
  components/    The OS shell: LockScreen, Desktop, Taskbar, StartMenu,
                 Window, ContextMenu, Flyouts, DesktopIcon
  context/       WindowManagerContext (open/close/minimize/maximize/
                 snap/focus) and WallpaperContext
  hooks/         useClock, useDraggableWindow
  data/          profile.js (resume content), appRegistry.js (icon/app
                 metadata, what's pinned where)
  styles/        global.css, shared doc-content.module.css
```

## Notes

- GitHub and LinkedIn are registered as `external` apps in
  `src/data/appRegistry.js` — clicking their icon opens the real profile
  in a new tab instead of opening a window.
- Games (Snake, Tic-Tac-Toe, Memory Match) live under
  `src/apps/Games/` and are launched from a single `GamesHub` window.
- Wallpaper picker (right-click desktop → Personalize) swaps the
  background via `WallpaperContext`.
