import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import styles from "./CodeBlock.module.css";
import Prism from "prism-react-renderer/prism";
import theme from "prism-react-renderer/themes/duotoneDark";
import custom from "./theme2";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-rust");

export default function CodeBlock({ children, className }) {
  const language = className
    ? className.replace(/language-/, "")
    : "language-bash";

  return (
    <Highlight
      {...defaultProps}
      theme={custom}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles.pre}`} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
