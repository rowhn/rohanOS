# Rohan Dohe — Portfolio OS

<div align="center">

### An interactive Windows-style portfolio built with React and Vite.

A desktop-inspired developer portfolio where your resume, projects, skills, experience, games, and social profiles live inside a fully interactive operating-system interface.

<br />

[**Live Portfolio**](https://rohanos.vercel.app/)   ·   [**GitHub Repository**](https://github.com/rowhn/windows_screen_portfolio)

<br /><br />

![React](https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-Styling-264DE4?style=for-the-badge\&logo=css3\&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)

</div>

---

## About

**Portfolio OS** is a desktop-style personal portfolio designed to feel less like a traditional website and more like an interactive operating system.

Instead of navigating through conventional pages, visitors interact with a virtual desktop containing applications, windows, a taskbar, Start menu, system tray, personalization tools, and built-in games.

The project was built to demonstrate practical React architecture, state management, component design, UI engineering, animations, and interactive frontend development.

---

## Live Experience

<div align="center">

### [Open Portfolio OS](https://rohanos.vercel.app/)

**Best experienced on a laptop or desktop.**

</div>

---

## Features

### Desktop Experience

* Windows-style desktop interface
* Boot animation and lock screen
* Desktop shortcuts
* Start menu
* Taskbar with running applications
* System tray
* Clock and calendar flyout
* Quick settings flyout
* Show Desktop functionality
* Fullscreen mode
* Desktop context menu

### Window Management

* Draggable windows
* Resizable windows
* Minimize and maximize
* Window focusing and z-index management
* Window snapping
* Multiple simultaneous applications
* Dynamic taskbar state

### Portfolio Applications

The desktop contains dedicated applications for:

* Resume
* About
* Experience
* Projects
* Skills
* Certifications
* Contact
* File Explorer
* Browser
* Code Editor
* Paint
* Personalization
* Recycle Bin

### Games

A built-in Games Hub contains:

* Snake
* Tic-Tac-Toe
* Memory Match

### Personalization

* Custom wallpapers
* Wallpaper switching
* Desktop context menu
* OS-style personalization experience

### External Profiles

GitHub and LinkedIn are integrated as external applications.

Selecting them opens the corresponding profile in a new browser tab instead of an internal portfolio window.

---

## Tech Stack

| Technology   | Purpose                                         |
| ------------ | ----------------------------------------------- |
| React        | UI architecture and component development       |
| Vite         | Development environment and production bundling |
| JavaScript   | Application logic                               |
| CSS Modules  | Component-scoped styling                        |
| Context API  | Global application state                        |
| Font Awesome | Interface icons                                 |
| Vercel       | Production deployment                           |

---

## Architecture

The application is structured around an **OS shell + independent applications** architecture.

```text
                         Portfolio OS
                              │
              ┌───────────────┴───────────────┐
              │                               │
          OS Shell                       Applications
              │                               │
      ┌───────┼────────┐              ┌───────┼────────┐
      │       │        │              │       │        │
   Desktop  Taskbar  Start Menu     Resume  Projects  Games
      │
      ├── Window Manager
      ├── Context Menu
      ├── Flyouts
      ├── Wallpaper System
      └── Power System
```

This separation allows individual portfolio sections to behave like applications running inside the desktop environment.

---

## Project Structure

```text
src/
│
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

---

## Window Management

The core of the portfolio is the window management system.

The `WindowManagerContext` controls:

* Opening applications
* Closing applications
* Minimizing windows
* Maximizing windows
* Focusing windows
* Z-index management
* Window positioning
* Window state
* Taskbar synchronization
* Window snapping

This allows every application to behave like a native desktop window.

---

## Application Registry

Application metadata is centralized in:

```text
src/data/appRegistry.js
```

The registry defines information such as:

```text
Application
├── ID
├── Title
├── Icon
├── Color
├── Type
└── Launch behavior
```

This makes adding new desktop applications significantly easier without modifying the core window manager.

---

## Games

The built-in games are organized under:

```text
src/apps/Games/
```

The Games Hub provides a single entry point for launching the individual games.

Current games:

```text
Games Hub
├── Snake
├── Tic-Tac-Toe
└── Memory Match
```

---

## Personalization

The wallpaper system is managed through:

```text
WallpaperContext
```

Users can access personalization from the desktop context menu and switch between available wallpapers without leaving the desktop environment.

---

## Responsive Experience

The portfolio is intentionally designed as a **desktop-first OS experience**.

The window-based interface is optimized for laptop and desktop screens where there is enough space for multiple applications and desktop interactions.

Mobile visitors receive a dedicated desktop-experience notice explaining the intended viewing environment.

---

## Running Locally

### Clone

```bash
git clone https://github.com/rowhn/windows_screen_portfolio.git
cd windows_screen_portfolio
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Deployment

The application is deployed on **Vercel** and connected directly to the GitHub repository.

Production URL:

**https://rohanos.vercel.app/**

Every push to the `main` branch triggers a new production deployment.

```text
Local Development
       │
       ▼
     Git
       │
       ▼
    GitHub
       │
       ▼
    Vercel
       │
       ▼
Production
```

---

## Portfolio Content

The OS currently includes:

```text
Resume
About
Experience
Projects
Skills
Certifications
Contact
GitHub
LinkedIn
```

All portfolio content is presented through the operating-system interface rather than traditional website sections.

---

## Author

<div align="center">

### Rohan Dohe

**MERN Stack Developer**

Building full-stack applications and interactive web experiences with React, Node.js, Express, and MongoDB.

<br />

[GitHub](https://github.com/rowhn) · [LinkedIn](https://linkedin.com/in/rohan-dohe-68965a233) · [Portfolio](https://rohanos.vercel.app/)

</div>

---
<img width="1920" height="971" alt="Screenshot 2026-08-21 160123" src="https://github.com/user-attachments/assets/f63d7d48-d7c6-4eb1-88d9-9739681d45a3" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7fb8d042-f1b1-4f7d-941c-427c7de71cf0" />

<img width="1920" height="963" alt="Screenshot 2026-08-21 124341" src="https://github.com/user-attachments/assets/026dc370-835d-457a-b8d7-c972d1d7fb70" />


## License

This project is a personal portfolio and demonstration of frontend engineering, React architecture, UI development, and interactive web application design.
