import doc from '../../styles/doc-content.module.css';
import { useWindowManager } from '../../context/WindowManagerContext';

const entries = [
  { id: 'resume', label: 'rohan_resume.pdf', icon: 'fa-solid fa-file-lines', color: '#dc4b3f' },
  { id: 'projects', label: 'Projects', icon: 'fa-solid fa-folder', color: '#dfb620' },
  { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase', color: '#d46a1f' },
  { id: 'certifications', label: 'Certifications', icon: 'fa-solid fa-certificate', color: '#b98700' },
  { id: 'games', label: 'Games', icon: 'fa-solid fa-gamepad', color: '#ff5da2' },
];

export default function Explorer() {
  const { openWindow } = useWindowManager();

  return (
    <div className={doc.docContent}>
      <h3 style={{ marginTop: 0 }}>C:\Users\Rohan\Documents</h3>
      {entries.map((e) => (
        <div
          key={e.id}
          className={doc.cardItem}
          style={{ cursor: 'pointer' }}
          onClick={() => openWindow(e.id)}
        >
          <h4>
            <i className={e.icon} style={{ color: e.color }} />
            &nbsp; {e.label}
          </h4>
        </div>
      ))}
    </div>
  );
}
