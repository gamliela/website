import React, { HTMLProps } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
import styles from "./styles.module.css";

type PrismCodeBlockProps = HTMLProps<{}> & { metastring?: string };

interface Meta {
  highlight?: number[];
}

// code borrowed from https://mdxjs.com/guides/syntax-highlighting
function PrismCodeBlock({
  children,
  className,
  metastring,
}: PrismCodeBlockProps) {
  const code = children as string;
  const language = className?.replace(/language-/, "") as Language;
  const meta: Meta = metastring ? JSON.parse(metastring.trim()) : {};
  const highlightedLines = meta.highlight || [];

  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            if (highlightedLines.indexOf(i + 1) != -1) {
              lineProps.className =
                (lineProps.className || "") + " " + styles.CodeLineHighlighted;
            }
            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </code>
      )}
    </Highlight>
  );
}

export default PrismCodeBlock;
