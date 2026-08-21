import doc from '../../styles/doc-content.module.css';

export default function Recycle() {
  return (
    <div className={doc.emptyState}>
      <i className="fa-solid fa-trash-can" />
      <div>Recycle Bin is empty</div>
      <div style={{ fontSize: 12, marginTop: 4 }}>
        No bugs were thrown away in the making of this portfolio... probably.
      </div>
    </div>
  );
}
