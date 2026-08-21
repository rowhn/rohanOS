import styles from './ContextMenu.module.css';

export default function ContextMenu({ x, y, onClose, onView, onSort, onRefresh, onPersonalize, onAbout }) {
  return (
    <div className={styles.menu} style={{ top: y, left: x }} onMouseLeave={onClose}>
      <div className={styles.item} onClick={onView}>
        <i className="fa-solid fa-image" /> View
      </div>
      <div className={styles.item} onClick={onSort}>
        <i className="fa-solid fa-arrow-down-a-z" /> Sort by
      </div>
      <div className={styles.item} onClick={onRefresh}>
        <i className="fa-solid fa-rotate-right" /> Refresh
      </div>
      <div className={styles.sep} />
      <div className={styles.item} onClick={onPersonalize}>
        <i className="fa-solid fa-palette" /> Personalize
      </div>
      <div className={styles.sep} />
      <div className={styles.item} onClick={onAbout}>
        <i className="fa-solid fa-circle-info" /> About this PC
      </div>
    </div>
  );
}
