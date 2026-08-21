import doc from '../../styles/doc-content.module.css';
import { skills } from '../../data/profile';

export default function Skills() {
  return (
    <div className={doc.docContent}>
      {skills.map((group) => (
        <div className={doc.skillGroup} key={group.group}>
          <h4>{group.group}</h4>
          <div className={doc.tagRow}>
            {group.items.map((item) => (
              <div className={doc.tag} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
