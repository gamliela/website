import React from "react";
import { MDXProvider } from "@mdx-js/react";
import PrismCodeBlock from "./PrismCodeBlock";

const components = {
  code: PrismCodeBlock,
};

function withBlogLayout(Content: () => JSX.Element) {
  function BlogLayout() {
    return (
      <MDXProvider components={components}>
        <article className="container mx-auto prose lg:prose-xl">
          <Content />
        </article>
      </MDXProvider>
    );
  }

  return BlogLayout;
}

export default withBlogLayout;
