import doc from '../../styles/doc-content.module.css';
import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <div className={doc.docContent}>
      <h2>Let&apos;s talk</h2>
      <div className={doc.lead}>Open to full-time MERN roles</div>

      <div style={{ marginTop: 16 }}>
        <div className={doc.contactRow}>
          <i className="fa-solid fa-envelope" />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className={doc.contactRow}>
          <i className="fa-solid fa-phone" />
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        </div>
        <div className={doc.contactRow}>
          <i className="fa-brands fa-github" />
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github.replace('https://', '')}
          </a>
        </div>
        <div className={doc.contactRow}>
          <i className="fa-brands fa-linkedin" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin.replace('https://www.', '')}
          </a>
        </div>
      </div>
    </div>
  );
}
