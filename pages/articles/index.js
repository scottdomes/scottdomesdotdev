import Layout from "components/layout/Layout";
import { posts } from "utils/getAllPosts";
import styles from "./Index.module.css";

const Article = ({ post }) => {
  const { meta } = post.module;
  return (
    <a href={`/articles${post.link}`}>
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
  return (
    <Layout>
      {posts.map((post) => {
        return <Article key={post.link} post={post} />;
      })}
    </Layout>
  );
}
