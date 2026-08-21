import doc from '../../styles/doc-content.module.css';
import styles from './Personalize.module.css';
import { useWallpaper, wallpapers } from '../../context/WallpaperContext';

export default function Personalize() {
  const { wallpaper, setWallpaper } = useWallpaper();

  return (
    <div className={doc.docContent}>
      <h3 style={{ marginTop: 0 }}>Choose your background</h3>
      <div className={styles.grid}>
        {wallpapers.map((wp) => (
          <div
            key={wp.id}
            className={`${styles.option} ${wallpaper.id === wp.id ? styles.active : ''}`}
            onClick={() => setWallpaper(wp)}
          >
            <img src={wp.src} alt={wp.label} />
            <span>{wp.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
