import styles from './Code.module.css';

export default function Code() {
  return (
    <div className={styles.editor}>
      <pre className={styles.pre}>
        <code>
          <span className={styles.kw}>const</span> <span className={styles.var}>developer</span> = {'{'}
          {'\n'}  <span className={styles.prop}>name</span>: <span className={styles.str}>&quot;Rohan Dohe&quot;</span>,
          {'\n'}  <span className={styles.prop}>role</span>: <span className={styles.str}>&quot;Full Stack Developer&quot;</span>,
          {'\n'}  <span className={styles.prop}>stack</span>: [<span className={styles.str}>&quot;MongoDB&quot;</span>, <span className={styles.str}>&quot;Express&quot;</span>, <span className={styles.str}>&quot;React&quot;</span>, <span className={styles.str}>&quot;Node.js&quot;</span>],
          {'\n'}  <span className={styles.prop}>currentlyBuilding</span>: <span className={styles.str}>&quot;AI-powered web apps&quot;</span>,
          {'\n'}  <span className={styles.prop}>openTo</span>: <span className={styles.str}>&quot;full-time MERN roles&quot;</span>,
          {'\n'}{'}'};
          {'\n'}
          {'\n'}<span className={styles.kw}>console</span>.<span className={styles.fn}>log</span>(<span className={styles.str}>&quot;Hi, I&apos;m &quot;</span> + developer.name + <span className={styles.str}>&quot; 👋&quot;</span>);
        </code>
      </pre>
    </div>
  );
}
