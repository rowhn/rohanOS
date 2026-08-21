import styles from './Calendar.module.css';
import { useClock } from '../../hooks/useClock';

export default function Calendar() {
  const { now, time, longDate, MONTHS } = useClock(1000);

  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const cells = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className={styles.flyout} onClick={(e) => e.stopPropagation()}>
      <div className={styles.clock}>{time}</div>
      <div className={styles.date}>{longDate}</div>
      <div className={styles.monthLabel}>
        {MONTHS[now.getMonth()]} {now.getFullYear()}
      </div>
      <div className={styles.grid}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
          <div key={d} className={styles.dow}>
            {d}
          </div>
        ))}
        {cells.map((day, i) => (
          <div
            key={i}
            className={`${styles.day} ${day === null ? styles.blank : ''} ${
              day === now.getDate() ? styles.today : ''
            }`}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
}
