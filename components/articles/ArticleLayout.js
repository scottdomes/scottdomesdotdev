import Layout from "components/layout/Layout";
import GradientLine from "components/visual/GradientLine";
import CodeBlock from "components/visual/CodeBlock";
import { MDXProvider } from "@mdx-js/react";
import styles from "./ArticleLayout.module.css";

const ArticleLayout = ({ meta, children }) => {
  const components = {
    code: CodeBlock,
  };
  return (
    <Layout title={meta.title}>
      <h1 className={styles.title}>{meta.title}</h1>
      <h3 className={styles.description}>{meta.description}</h3>
      <GradientLine className={styles.line} />
      <MDXProvider components={components}>
        <article className={styles.content}>{children}</article>
      </MDXProvider>
    </Layout>
  );
};

export default ArticleLayout;
