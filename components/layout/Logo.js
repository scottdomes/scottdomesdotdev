import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <h2 className={styles.text}>
      <span className={styles.gradient}>
        scottdomes.dev
      </span>
    </h2>
  );
};

export default Logo;
