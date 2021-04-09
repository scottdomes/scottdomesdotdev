import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/">
      <h2 className={styles.text}>
        <span className={styles.gradient}>scottdomes.dev</span>
      </h2>
    </a>
  );
};

export default Logo;
