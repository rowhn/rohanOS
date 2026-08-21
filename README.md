A Windows-style desktop portfolio built with React and Vite. The portfolio recreates a modern desktop operating system experience with draggable windows, taskbar interactions, a Start menu, desktop applications, games, personalization, and external profile shortcuts.

Live Demo

https://rohanos.vercel.app/

Tech Stack
React
Vite
JavaScript
CSS Modules
Context API
Font Awesome
HTML5
CSS3
Features
Windows-style desktop interface
Lock screen and boot animation
Draggable, resizable, minimizable, maximizable, and focusable windows
Window snapping and window management
Start menu
Taskbar with running applications
Desktop shortcuts
Search functionality
Quick settings and calendar flyouts
Fullscreen mode
Desktop experience notice for mobile users
Customizable wallpapers
Right-click desktop context menu
Resume and portfolio information
GitHub and LinkedIn shortcuts
Project showcase
Skills and certifications
Contact section
Built-in applications
Mini-games:
Snake
Tic-Tac-Toe
Memory Match
Recycle Bin simulation
Browser-style application
Code editor simulation
Paint application
Responsive mobile warning for the desktop-focused experience

## Project Structure

```text
src/
├── apps/
│   ├── Resume/
│   ├── About/
│   ├── Experience/
│   ├── Projects/
│   ├── Skills/
│   ├── Certifications/
│   ├── Contact/
│   ├── Explorer/
│   ├── Browser/
│   ├── Code/
│   ├── Paint/
│   ├── Recycle/
│   ├── Personalize/
│   └── Games/
│       ├── Snake/
│       ├── TicTacToe/
│       ├── MemoryMatch/
│       └── GamesHub/
│
├── components/
│   ├── LockScreen/
│   ├── Desktop/
│   ├── Taskbar/
│   ├── StartMenu/
│   ├── Window/
│   ├── ContextMenu/
│   ├── Flyouts/
│   └── DesktopIcon/
│
├── context/
│   ├── WindowManagerContext/
│   └── WallpaperContext/
│
├── hooks/
│   ├── useClock/
│   └── useDraggableWindow/
│
├── data/
│   ├── profile.js
│   └── appRegistry.js
│
└── styles/
    ├── global.css
    └── shared doc-content.module.css
```
Run Locally

Clone the repository:

git clone https://github.com/rowhn/windows_screen_portfolio.git
cd windows_screen_portfolio

Install dependencies:

npm install

Start the development server:

npm run dev

Create a production build:

npm run build

Preview the production build:

npm run preview
Deployment

The portfolio is deployed using Vercel and connected directly to the GitHub repository.

Every new push to the main branch automatically triggers a new production deployment.

Application Architecture

The portfolio is structured as an operating-system-style shell rather than a traditional single-page portfolio.

The main OS shell handles:

Session and lock-screen state
Window management
Desktop state
Taskbar
Start menu
Context menus
Flyouts
Wallpaper management
Power states
Fullscreen functionality

Individual portfolio sections are implemented as independent applications that can be opened inside the desktop window manager.

External Applications

GitHub and LinkedIn are registered as external applications in:

src/data/appRegistry.js

Clicking these shortcuts opens the corresponding profile in a new browser tab rather than creating an internal OS window.

Games

The built-in games are located under:

src/apps/Games/

They are launched through the Games Hub application.

Personalization

The desktop supports wallpaper customization through:

WallpaperContext

Users can access personalization through the desktop context menu and change the active wallpaper.

Portfolio

The portfolio includes:

Resume
About
Experience
Projects
Skills
Certifications
Contact
GitHub
LinkedIn
Author

Rohan Dohe

MERN Stack Developer

GitHub: https://github.com/rowhn

LinkedIn: linkedin.com/in/rohan-dohe-68965a233

License

This project is intended as a personal portfolio and demonstration of frontend and React development skills.
