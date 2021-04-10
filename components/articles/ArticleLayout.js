import Layout from "components/layout/Layout";
import GradientLine from "components/visual/GradientLine";
import CodeBlock from "components/visual/CodeBlock";
import WolframPattern from "components/articles/WolframPattern/Base";
import BinaryWolframPattern from "components/articles/WolframPattern/Binary";
import CustomWolframPattern from "components/articles/WolframPattern/Custom";
import RuleDisplay from "components/articles/WolframPattern/RuleDisplay";

import { MDXProvider } from "@mdx-js/react";
import styles from "./ArticleLayout.module.css";
import "katex/dist/katex.min.css";

const ArticleLayout = ({ meta, children }) => {
  const components = {
    code: CodeBlock,
    WolframPattern,
    BinaryWolframPattern,
    CustomWolframPattern,
    RuleDisplay,
  };
  return (
    <Layout title={meta.title}>
      <h1 className={styles.title}>{meta.title}</h1>
      <h3 className={styles.description}>{meta.description}</h3>
      <GradientLine className={styles.line} />
      <MDXProvider components={components}>
        <article className={styles.content}>{children}</article>
      </MDXProvider>
      <iframe
        src="https://scottdomesdev.substack.com/embed"
        height="320"
        className={styles.iframe}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Layout>
  );
};

export default ArticleLayout;
