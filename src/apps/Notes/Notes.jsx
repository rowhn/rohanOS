import { useState } from "react";
import styles from "./Notes.module.css";

const notes = [
  {
    id: "welcome",
    name: "Welcome.txt",
    icon: "📝",
    title: "Welcome to Rohan's Portfolio",
    content: [
      "Hey! I'm Rohan.",
      "",
      "Welcome to my interactive portfolio.",
      "",
      "I didn't want this to be another ordinary portfolio website, so I built it to feel like a Windows desktop.",
      "",
      "Explore the folders, open the applications, check out my projects, learn about my experience, and play the games.",
      "",
      "Don't be afraid to click around.",
      "",
      "There might be something interesting hiding somewhere.",
      "",
      "— Rohan Dohe",
      "MERN Stack Developer",
    ],
  },
  {
    id: "about",
    name: "About-Portfolio.txt",
    icon: "📄",
    title: "About This Portfolio",
    content: [
      "Why a Windows-style portfolio?",
      "",
      "A traditional portfolio usually tells you what I can do.",
      "",
      "I wanted mine to let you experience it.",
      "",
      "This website is built as an interactive desktop environment where each application represents a different part of my professional profile.",
      "",
      "Resume → My professional journey",
      "Projects → Things I've built",
      "Skills → Technologies I work with",
      "Experience → My development experience",
      "Games → A little something for fun",
      "GitHub → My code",
      "LinkedIn → My professional profile",
      "",
      "Have fun exploring.",
    ],
  },
  {
    id: "explore",
    name: "Explore.txt",
    icon: "🗺️",
    title: "How To Explore",
    content: [
      "Welcome to the desktop.",
      "",
      "Double-click desktop icons to open applications.",
      "",
      "Drag windows around the screen.",
      "",
      "Try maximizing and minimizing windows.",
      "",
      "Right-click the desktop to see additional options.",
      "",
      "Open the Start Menu to discover more applications.",
      "",
      "Try the Games folder when you need a break.",
      "",
      "And if you want to know more about me, check out my GitHub and LinkedIn.",
      "",
      "Enjoy the experience.",
    ],
  },
  {
    id: "projects",
    name: "My-Projects.txt",
    icon: "💻",
    title: "Things I've Built",
    content: [
      "My projects are where I turn ideas into working software.",
      "",
      "Iron Rentals",
      "Heavy Equipment Rental Platform built with the MERN stack.",
      "",
      "Prajna AI",
      "A GenAI-powered developer assistant with semantic search and PDF interaction.",
      "",
      "This portfolio",
      "A Windows-inspired interactive portfolio built with React.",
      "",
      "Open the Projects application on the desktop to explore the projects in more detail.",
    ],
  },
  {
    id: "contact",
    name: "Contact.txt",
    icon: "✉️",
    title: "Let's Connect",
    content: [
      "Found something interesting?",
      "",
      "Want to discuss a project?",
      "",
      "Looking for a developer?",
      "",
      "I'd love to hear from you.",
      "",
      "You can find me through the GitHub and LinkedIn icons on the desktop.",
      "",
      "GitHub",
      "github.com/rowhn",
      "",
      "LinkedIn",
      "linkedin.com/in/rohan-dohe-68965a233/",
    ],
  },
];

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  return (
    <div className={styles.notes}>
      {/* Explorer-style toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            title="Back"
          >
            ‹
          </button>

          <button
            className={styles.navButton}
            title="Forward"
          >
            ›
          </button>
        </div>

        <div className={styles.addressBar}>
          <span className={styles.folderIcon}>📁</span>
          <span>This PC</span>
          <span className={styles.separator}>›</span>
          <span>Notes</span>
        </div>

        <button
          className={styles.searchButton}
          title="Search"
        >
          🔍
        </button>
      </div>

      {/* Main content */}
      <div className={styles.body}>
        {/* File list */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarTitle}>
            Notes
          </div>

          <div className={styles.fileList}>
            {notes.map((note) => (
              <button
                key={note.id}
                className={`${styles.fileItem} ${
                  selectedNote.id === note.id
                    ? styles.selected
                    : ""
                }`}
                onClick={() =>
                  setSelectedNote(note)
                }
              >
                <span className={styles.fileIcon}>
                  {note.icon}
                </span>

                <span className={styles.fileName}>
                  {note.name}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Note viewer */}
        <main className={styles.viewer}>
          <div className={styles.viewerHeader}>
            <span className={styles.viewerIcon}>
              {selectedNote.icon}
            </span>

            <div>
              <div className={styles.viewerTitle}>
                {selectedNote.name}
              </div>

              <div className={styles.viewerSubtitle}>
                Text Document
              </div>
            </div>
          </div>

          <div className={styles.document}>
            {selectedNote.content.map(
              (line, index) => {
                if (index === 0) {
                  return (
                    <h2
                      key={index}
                      className={styles.documentTitle}
                    >
                      {line}
                    </h2>
                  );
                }

                if (line === "") {
                  return (
                    <div
                      key={index}
                      className={styles.spacer}
                    />
                  );
                }

                return (
                  <p key={index}>
                    {line}
                  </p>
                );
              }
            )}
          </div>

          <div className={styles.statusBar}>
            <span>
              {selectedNote.content.length} lines
            </span>

            <span>
              Read-only
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}