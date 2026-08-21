import styles from './Paint.module.css';

export default function Paint() {
  return (
    <iframe
      title="Paint"
      className={styles.iframe}
      src="https://viliusle.github.io/miniPaint/"
    />
  );
}
