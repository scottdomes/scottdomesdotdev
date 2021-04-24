import Layout from "components/layout/Layout";
import styles from "./Home.module.css";
import GradientLine from "components/visual/GradientLine";
import { bestPosts } from "utils/getBestPosts";
import EmailSignup from "components/articles/EmailSignup";
import Article from "components/articles/Article";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        <span className="tri-dark">Guides & tutorials</span> to help
        you become{" "}
        <span className="tri-light">an insanely productive developer.</span>
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
          <span className="tri-light">guides, tutorials, and books</span> to
          help you get better at just that.
        </h2>
        <GradientLine />

        <h2 className={styles.text}>Here are my greatest hits:</h2>
        <ul className={styles.list}>
          {bestPosts.map((post) => {
            return (
              <li className={styles.listItem} key={post.link}>
                <span className={styles.bullet}>&rsaquo;</span>
                <Article key={post.link} post={post} />
              </li>
            );
          })}
        </ul>
        <EmailSignup />
      </div>
    </Layout>
  );
}
