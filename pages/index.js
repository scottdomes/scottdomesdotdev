import Head from "next/head";
import Layout from "components/layout/Layout";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        <span className="tri-light">Courses, articles, and books</span> to help
        you become{" "}
        <span className="tri-dark">an insanely productive developer.</span>
      </h1>
    </Layout>
  );
}
