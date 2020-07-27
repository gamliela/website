import React from "react";
import { MDXProvider } from "@mdx-js/react";
import PrismCodeBlock from "./PrismCodeBlock";

const components = {
  code: PrismCodeBlock,
};

function withBlogLayout(Content: () => JSX.Element, metadata?: BlogMetadata) {
  function BlogLayout() {
    const title = metadata?.title && <h1>{metadata?.title}</h1>;
    const subTitle = metadata?.subTitle && <h2>{metadata?.subTitle}</h2>;

    return (
      <MDXProvider components={components}>
        <article className="container mx-auto prose lg:prose-xl">
          <header>
            {title}
            {subTitle}
          </header>
          <Content />
        </article>
      </MDXProvider>
    );
  }

  return BlogLayout;
}

export default withBlogLayout;
