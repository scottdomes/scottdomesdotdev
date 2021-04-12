import Article from "./Article";

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
