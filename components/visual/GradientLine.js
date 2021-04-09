import styles from "./GradientLine.module.css";

const GradientLine = ({ className }) => {
  return <div className={`${className} ${styles.main}`} />;
};

export default GradientLine;
