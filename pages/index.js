import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>scottdomes.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="tri-light">Courses, articles, and books</span> to
          help you become{" "}
          <span className="tri-dark">an insanely productive developer.</span>
        </h1>
      </main>
    </div>
  );
}
