import styles from './Browser.module.css';

export default function Browser() {
  return (
    <iframe
      title="Browser"
      className={styles.iframe}
      src="https://www.google.com/webhp?igu=1"
    />
  );
}
