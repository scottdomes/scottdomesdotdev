import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.inner}>
        <Logo />
        <div className={styles.linkContainer}>
          <Link href="/articles">Articles</Link>
          <Link href="/hire">Hire me</Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
