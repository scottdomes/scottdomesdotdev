import Layout from "components/layout/Layout";
import GradientLine from "components/visual/GradientLine";
import CodeBlock from "components/visual/CodeBlock";
import WolframPattern from "components/articles/WolframPattern/Base";
import BinaryWolframPattern from "components/articles/WolframPattern/Binary";
import CustomWolframPattern from "components/articles/WolframPattern/Custom";
import RuleDisplay from "components/articles/WolframPattern/RuleDisplay";
import BinaryTree from "components/articles/BinaryTrees/BinaryTree";

import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

import styles from "./ArticleLayout.module.css";
import "katex/dist/katex.min.css";
import EmailSignup from "./EmailSignup";

const ArticleLayout = ({ meta, children, noEmail = false }) => {
  const components = {
    code: CodeBlock,
    WolframPattern,
    BinaryWolframPattern,
    CustomWolframPattern,
    RuleDisplay,
    BinaryTree,
  };
  return (
    <Layout title={meta.title}>
      <div className={styles.meta}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{meta.title}</h1>
          <h3 className={styles.description}>{meta.description}</h3>
        </div>
      </div>
      <GradientLine className={styles.line} />
      <MDXProvider components={components}>
        <article className={styles.content}>{children}</article>
      </MDXProvider>
      {!noEmail && <EmailSignup />}
    </Layout>
  );
};

export default ArticleLayout;
