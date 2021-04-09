import Layout from "components/layout/Layout";
import GradientLine from "components/visual/GradientLine";
import styles from "./ArticleLayout.module.css";

const ArticleLayout = ({ meta, children }) => {
  return (
    <Layout title={meta.title}>
      <h1 className={styles.title}>{meta.title}</h1>
      <h3 className={styles.description}>{meta.description}</h3>
      <GradientLine className={styles.line} />
      <article className={styles.content}>{children}</article>
    </Layout>
  );
};

export default ArticleLayout;
