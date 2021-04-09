import Layout from "components/layout/Layout";
import { posts } from "utils/getAllPosts";
import styles from "./Index.module.css";

const Article = ({ post }) => {
  const { meta } = post.module;
  return (
    <a className={styles.container} href={`/articles${post.link}`}>
      <div>
        <a href={`/articles${post.link}`}>
          <h2 className={styles.title}>{meta.title}</h2>
        </a>
        <h3 className={styles.description}>{meta.description}</h3>
      </div>
    </a>
  );
};

export default function IndexPage() {
  const sortedArticles = posts.sort(
    (a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date)
  );
  return (
    <Layout>
      {sortedArticles.map((post) => {
        return <Article key={post.link} post={post} />;
      })}
    </Layout>
  );
}
