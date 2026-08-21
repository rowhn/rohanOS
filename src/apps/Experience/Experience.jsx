import doc from '../../styles/doc-content.module.css';
import { experience, education } from '../../data/profile';

export default function Experience() {
  return (
    <div className={doc.docContent}>
      <h3 style={{ marginTop: 0 }}>Work History</h3>

      {experience.map((job) => (
        <div className={doc.cardItem} key={job.title}>
          <h4>
            {job.title} <span className={doc.timelineBadge}>{job.period}</span>
          </h4>
          <div className={doc.metaLine}>{job.company}</div>
          <ul>
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Education</h3>
      <div className={doc.cardItem}>
        <h4>
          {education.degree} <span className={doc.timelineBadge}>{education.period}</span>
        </h4>
        <div className={doc.metaLine}>
          {education.school} · {education.detail}
        </div>
      </div>
    </div>
  );
}
