import React, { ReactElement } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
import styles from "./styles.module.css";

type PrismPreCodeBlockProps = JSX.IntrinsicElements["pre"] & {
  highlight?: number[];
};

function PrismPreCodeBlock({
  children,
  highlight,
  ...otherPreProps
}: PrismPreCodeBlockProps): ReactElement {
  // If pre doesn't contain code don't attempt to style it.
  if (
    React.Children.count(children) != 1 ||
    typeof React.Children.only(children) !== "object" ||
    (React.Children.only(children) as ReactElement).type !== "code"
  ) {
    return <pre {...otherPreProps}>{children}</pre>;
  }

  // If code is not a simple string don't attempt to style it.
  const codeProps = (React.Children.only(children) as ReactElement).props;
  const codeString = codeProps.children;
  if (typeof codeString !== "string") {
    return <pre {...otherPreProps}>{children}</pre>;
  }

  const language = codeProps.className?.replace(/language-/, "") as Language;
  const highlightedLines = highlight || [];

  return (
    <Highlight
      {...defaultProps}
      code={codeString.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre>
          <code className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              if (highlightedLines.indexOf(i + 1) != -1) {
                lineProps.className =
                  (lineProps.className || "") +
                  " " +
                  styles.CodeLineHighlighted;
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
        </pre>
      )}
    </Highlight>
  );
}

export default PrismPreCodeBlock;
