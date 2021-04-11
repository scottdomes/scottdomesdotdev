import styles from "./EmailSignup.module.css";

export default function EmailSignup() {
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
