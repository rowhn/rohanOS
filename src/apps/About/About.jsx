import doc from '../../styles/doc-content.module.css';

export default function About() {
  return (
    <div className={doc.docContent}>
      <h2>Hi, I&apos;m Rohan 👋</h2>
      <div className={doc.lead}>Full Stack Developer · MERN</div>

      <p style={{ marginTop: 14 }}>
        I build full-stack web applications with MongoDB, Express, React and
        Node — from responsive, animated UIs to REST APIs and production
        deployments.
      </p>
      <p>
        About a year into my career across two internships, I now work as a
        Full Stack Developer at DezyKode IT Solutions in Pune, where I
        integrate LLM APIs into production apps and ship scalable
        deployments on Vercel and Render.
      </p>
      <p>
        Outside of client work, I like building things that show the craft
        end-to-end — this desktop, for instance, is one of my own side
        projects: a Windows-style portfolio shell built in React, with
        draggable windows, a taskbar, and a couple of games hidden inside.
      </p>

      <h3>Currently</h3>
      <div className={doc.tagRow}>
        <div className={doc.tag}>Full Stack Developer @ DezyKode IT</div>
        <div className={doc.tag}>Pune, India</div>
        <div className={doc.tag}>Open to full-time MERN roles</div>
      </div>
    </div>
  );
}
