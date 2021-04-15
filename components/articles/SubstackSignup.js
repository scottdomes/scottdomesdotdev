import styles from "./SubstackSignup.module.css";

export default function SubstackSignup() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://scottdomesdev.substack.com/embed"
        height="320"
        className={styles.iframe}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
