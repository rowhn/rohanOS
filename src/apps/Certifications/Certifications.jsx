import doc from '../../styles/doc-content.module.css';
import { certifications } from '../../data/profile';

export default function Certifications() {
  return (
    <div className={doc.docContent}>
      <h3 style={{ marginTop: 0 }}>Certifications</h3>
      {certifications.map((c) => (
        <div className={doc.cardItem} key={c.title}>
          <h4>{c.title}</h4>
          <div className={doc.metaLine}>{c.issuer}</div>
        </div>
      ))}
    </div>
  );
}
