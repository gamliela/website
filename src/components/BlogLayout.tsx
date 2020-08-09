import React, { ReactNode } from "react";
import { Components, MDXProvider } from "@mdx-js/react";
import PrismCodeBlock from "./PrismCodeBlock";

const components: Components = {
  code: PrismCodeBlock,
};

function withBlogLayout(
  Content: () => JSX.Element,
  metadata?: BlogMetadata
): () => ReactNode {
  function BlogLayout() {
    const title = metadata?.title && (
      <h1 className="text-center">{metadata?.title}</h1>
    );
    const subTitle = metadata?.subTitle && (
      <div className="lead text-center">{metadata?.subTitle}</div>
    );

    return (
      <MDXProvider components={components}>
        <article className="container mx-auto antialiased text-gray-900 px-6 py-6">
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <header>
              {title}
              {subTitle}
            </header>
            <Content />
          </div>
        </article>
      </MDXProvider>
    );
  }

  return BlogLayout;
}

export default withBlogLayout;
