export const profile = {
  name: 'Rohan Dohe',
  role: 'Full Stack Developer',
  email: 'rohandohe5427@gmail.com',
  phone: '+91 82085 XXXXX',
  github: 'https://github.com/rowhn',
  linkedin: 'https://www.linkedin.com/in/rohan-dohe-68965a233/',
};

export const experience = [
  {
    title: 'Full Stack Developer',
    company: 'DezyKode IT Solutions · Pune',
    period: 'Jan 2026 – Present',
    bullets: [
      'Developed AI-powered web applications using the MERN stack, integrating LLM APIs into production-ready applications.',
      'Designed landing pages with scroll-based animations, parallax effects and modern UI components while keeping layouts responsive.',
      'Deployed scalable applications on Vercel and Render, managing environment configs, API integrations and production releases.',
    ],
  },
  {
    title: 'MERN Stack Developer — Internship',
    company: 'Wide Softech Pvt. Ltd. · Nagpur',
    period: 'Jan 2025 – Jul 2025',
    bullets: [
      'Gained hands-on experience contributing to real-world full-stack web applications under senior developers.',
      'Worked across MongoDB, Express.js, React.js and Node.js in a collaborative team environment.',
      'Built production-ready features, integrated REST APIs, and followed industry best practices.',
    ],
  },
];

export const education = {
  degree: 'B.Tech, Information Technology',
  school: 'J D College of Engineering and Management, Nagpur',
  period: '2021 – 2025',
  detail: 'CGPA 6.96 / 10',
};

export const projects = [
  {
    title: 'Iron Rentals — Heavy Equipment Rental Platform',
    stack: 'React.js · Node.js · Express.js · MongoDB · Vite',
    bullets: [
      'Full-stack rental platform with an 18-machine fleet catalogue, rental inquiry form, and a protected admin dashboard — replacing phone-only booking coordination.',
      'React admin dashboard with 7 modules (fleet, bookings, customers, operators, compliance, invoices, maintenance) and live Chart.js analytics across Pune, Mumbai and Nagpur.',
      'Tri-mode (light / dark / neon) UI system: 18 CSS custom-property tokens across 8 pages and 10+ reusable components — zero third-party theming library.',
    ],
    github: 'https://github.com/rowhn',
  },
  {
    title: 'Prajna AI — RAG Chatbot',
    stack: 'MongoDB · Express.js · React.js · Node.js · Google Gemini API · JWT',
    bullets: [
      'Generative-AI chatbot built on the MERN stack with Google Gemini — ask general questions or upload PDFs for context-aware conversations.',
      'Retrieval-Augmented Generation with vector embeddings and semantic search, plus JWT authentication and persistent chat history for real-time responses.',
    ],
    github: 'https://github.com/rowhn',
  },
  {
    title: 'Windows-Style Portfolio',
    badge: "you're using it",
    stack: 'React · JavaScript · Vite',
    bullets: [
      'A Windows-style portfolio shell — draggable windows, taskbar, Start menu, desktop icons and mini-games — rebuilt in React with a component-driven architecture.',
      'Originally a vanilla-JS build that scored 94 on Lighthouse; this version keeps that same DOM discipline inside a proper React app.',
    ],
    github: 'https://github.com/rowhn',
  },
];

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { group: 'Frameworks & Databases', items: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap 5'] },
  { group: 'Tools & Testing', items: ['Git', 'Postman', 'React Testing Library', 'Vite', 'Vercel'] },
  { group: 'Concepts', items: ['REST API Design', 'JWT Auth', 'CI/CD', 'Responsive UI', 'Component Architecture'] },
];

export const certifications = [
  { title: 'AI-ML Virtual Internship', issuer: 'AICTE' },
  { title: 'Paper Presentation', issuer: 'International Conference' },
  { title: 'Foundations of Web Development', issuer: 'Udemy' },
  { title: 'Web Development', issuer: 'IIT Bombay' },
];
