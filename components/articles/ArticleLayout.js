import Layout from "components/layout/Layout";
import GradientLine from "components/visual/GradientLine";
// import styles from "./LessonLayout.module.css";

const ArticleLayout = ({ meta, children }) => {
  return (
    <Layout title={meta.title}>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      <GradientLine />
      <article>{children}</article>
    </Layout>
  );
};

export default ArticleLayout;
