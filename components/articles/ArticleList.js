import styles from "./ArticleList.module.css";

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

export default function ArticleList({ articles }) {
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date)
  );
  return (
    <>
      {sortedArticles.map((post) => {
        return <Article key={post.link} post={post} />;
      })}
    </>
  );
}
