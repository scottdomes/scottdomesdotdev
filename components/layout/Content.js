import Container from "./Container";
import styles from "./Content.module.css";

const Content = ({ children, className }) => {
  return (
    <div className={styles.content}>
      <Container className={className}>{children}</Container>
    </div>
  );
};

export default Content;
