import ArticleList from "components/articles/ArticleList";
import Layout from "components/layout/Layout";
import { posts } from "utils/getAllPosts";

export default function IndexPage() {
  return (
    <Layout>
      <ArticleList articles={posts} />
    </Layout>
  );
}
