import { profile } from '../../data/profile';
import resumePdf from '../../assets/images/rohan_resume.pdf';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.name}>{profile.name}</h2>
          <div className={styles.role}>{profile.role}</div>
        </div>
        <a href={resumePdf} download className={styles.downloadBtn}>
          <i className="fa-solid fa-download" /> Download PDF
        </a>
      </div>

      <div className={styles.preview}>
        <ResumeSheet />
      </div>
    </div>
  );
}

function ResumeSheet() {
  return (
    <iframe
      title="Resume preview"
      className={styles.iframe}
      srcDoc={buildResumeHtml()}
    />
  );
}

function buildResumeHtml() {
  // A lightweight, self-contained sheet rendered inside an iframe so it
  // keeps its own print-style layout independent of the OS shell CSS.
  return `<!DOCTYPE html><html><head><meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; }
    body { margin:0; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; color:#222; }
    .resume { max-width: 820px; margin: 0 auto; padding: 24px; }
    .header { display:flex; justify-content:space-between; border-bottom:2px solid #eee; padding-bottom:12px; margin-bottom:16px; }
    .name { font-size:24px; font-weight:700; }
    .role { font-size:13px; color:#666; margin-top:2px; }
    .contacts { text-align:right; font-size:13px; line-height:1.7; }
    .section-title { font-weight:700; color:#0078d7; margin:18px 0 8px; font-size:14px; text-transform:uppercase; letter-spacing:.4px; }
    .row { display:flex; justify-content:space-between; margin-bottom:2px; }
    .meta { color:#666; font-size:12px; white-space:nowrap; }
    .item { margin-bottom:12px; }
    .item-title { font-weight:600; font-size:14px; }
    .stack { font-size:12.5px; color:#0078d7; font-weight:600; margin:2px 0 6px; }
    ul { margin:0; padding-left:18px; font-size:13.5px; }
    li { margin-bottom:3px; }
    .grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
  </style></head>
  <body><div class="resume">
    <div class="header">
      <div><div class="name">Rohan Dohe</div><div class="role">MERN Stack Developer</div></div>
      <div class="contacts">+91 82085 XXXXX<br/>rohandohe5427@gmail.com<br/>GitHub &middot; LinkedIn</div>
    </div>

    <div class="section-title">Experience</div>
    <div class="item">
      <div class="row"><div class="item-title">Full Stack Developer — DezyKode IT Solutions, Pune</div><div class="meta">Jan 2026 – Present</div></div>
      <ul>
        <li>Developed AI-powered web applications using the MERN stack by integrating LLM APIs into production-ready applications.</li>
        <li>Designed visually appealing landing pages with scroll-based animations, parallax effects, and modern UI components while maintaining responsive layouts.</li>
        <li>Deployed scalable applications on Vercel and Render while managing environment configurations, API integrations, and production releases.</li>
      </ul>
    </div>
    <div class="item">
      <div class="row"><div class="item-title">MERN Stack Developer — Wide Softech Pvt. Ltd. (Internship), Nagpur</div><div class="meta">Jan 2025 – Jul 2025</div></div>
      <ul>
        <li>Gained hands-on experience in MERN stack development, contributing to real-world web applications under the guidance of senior developers.</li>
        <li>Worked on full-stack web applications using MongoDB, Express.js, React.js, and Node.js in a collaborative team environment.</li>
        <li>Built production-ready features, integrated REST APIs, and followed industry best practices.</li>
      </ul>
    </div>

    <div class="section-title">Projects</div>
    <div class="item">
      <div class="item-title">Iron Rentals — Heavy Equipment Rental Platform</div>
      <div class="stack">React.js · Node.js · Express.js · MongoDB · Vite</div>
      <ul>
        <li>Full-stack rental platform with an 18-machine fleet catalogue, rental inquiry form, and a protected admin dashboard.</li>
        <li>React admin dashboard with 7 modules and live Chart.js analytics across Pune, Mumbai and Nagpur.</li>
        <li>Tri-mode (light/dark/neon) UI system with 18 CSS custom property tokens — zero third-party theming library.</li>
      </ul>
    </div>
    <div class="item">
      <div class="item-title">Prajna AI</div>
      <div class="stack">MongoDB · Express.js · React.js · Node.js · Google Gemini API · JWT</div>
      <ul>
        <li>Generative AI-powered chatbot enabling context-aware conversations and PDF uploads.</li>
        <li>Implemented RAG with vector embeddings, semantic search, JWT auth, and chat history.</li>
      </ul>
    </div>
    <div class="item">
      <div class="item-title">Windows-Style Portfolio</div>
      <div class="stack">React · JavaScript · Vite</div>
      <ul><li>A Windows-style portfolio shell with draggable windows, taskbar and app icons.</li></ul>
    </div>

    <div class="grid-2">
      <div>
        <div class="section-title">Skills</div>
        <div style="font-size:13.5px;line-height:1.9;">
          <strong>Languages:</strong> JavaScript (ES6+), HTML5, CSS3<br/>
          <strong>Frameworks &amp; DB:</strong> React.js, Node.js, Express.js, MongoDB, Bootstrap 5<br/>
          <strong>Tools:</strong> Git, Postman, RTL, Vite, Vercel<br/>
          <strong>Concepts:</strong> REST APIs, JWT Auth, CI/CD, Responsive UI
        </div>
      </div>
      <div>
        <div class="section-title">Certifications</div>
        <ul>
          <li>AI-ML Virtual Internship — AICTE</li>
          <li>Paper Presentation — International Conference</li>
          <li>Foundations of Web Development — Udemy</li>
          <li>Web Development — IIT Bombay</li>
        </ul>
      </div>
    </div>

    <div class="section-title">Education</div>
    <div class="item">
      <div class="item-title">B.Tech — Information Technology</div>
      <div class="meta" style="text-align:left;">J D College of Engineering and Management, Nagpur · CGPA: 6.96 / 10 · 2021 – 2025</div>
    </div>
  </div></body></html>`;
}
