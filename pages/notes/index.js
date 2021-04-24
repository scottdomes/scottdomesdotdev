import ArticleList from "components/articles/ArticleList";
import Layout from "components/layout/Layout";
import { notes } from "utils/getNotes";

export default function IndexPage() {
  return (
    <Layout>
      <ArticleList articles={notes} category="notes" />
    </Layout>
  );
}
