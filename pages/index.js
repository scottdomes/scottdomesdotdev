import Head from "next/head";
import Layout from "components/layout/Layout";
import styles from "./Home.module.css";
import GradientLine from "components/visual/GradientLine";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        <span className="tri-light">Courses, articles, and books</span> to help
        you become{" "}
        <span className="tri-dark">an insanely productive developer.</span>
      </h1>
      <GradientLine />

      <div className={styles.body}>
        <h2 className={styles.text}>Hi I'm Scott. 👋</h2>
        <h2 className={styles.text}>
          In my experience, being a “good” developer is{" "}
          <span className="tri-dark">
            not about knowing languages, tools, frameworks, etc.
          </span>
        </h2>
        <h2 className={styles.text}>
          It's about being{" "}
          <span className="tri-mid">a fast and effective problem-solver.</span>
        </h2>
        <h2 className={styles.text}>
          I write{" "}
          <span className="tri-light">courses, articles, and books</span> to
          help you get better at just that.
        </h2>
        <h2 className={styles.text}>Here are my greatest hits:</h2>
      </div>
    </Layout>
  );
}
