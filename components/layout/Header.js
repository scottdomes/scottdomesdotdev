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
          <Link href="/courses">Courses</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
