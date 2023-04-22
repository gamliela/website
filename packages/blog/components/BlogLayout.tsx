import React, { ReactNode, useEffect } from "react";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import PrismPreCodeBlock from "./PrismPreCodeBlock";
import { BlogMetadata, MDXContent } from "*.mdx";
import { useRouter } from "next/router";
import { DiscussionEmbed } from "disqus-react";

function withBlogLayout(
  Content: MDXContent,
  metadata?: BlogMetadata
): () => ReactNode {
  function BlogLayout() {
    const mdxComponents = useMDXComponents({ pre: PrismPreCodeBlock });

    const title = metadata?.title && (
      <h1 className="text-center">{metadata?.title}</h1>
    );
    const subTitle = metadata?.subTitle && (
      <div className="lead text-center">{metadata?.subTitle}</div>
    );

    const router = useRouter();

    return (
      <MDXProvider components={mdxComponents}>
        <article className="container mx-auto antialiased text-gray-900 px-6 py-6">
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <header>
              {title}
              {subTitle}
            </header>
            <Content />
          </div>
          <div style={{ paddingTop: 50 }}>
            <DiscussionEmbed
              shortname="gamliela"
              config={{
                url: "https://gamliela.com/" + router.asPath,
                identifier: metadata?.id,
                title: metadata?.title,
                language: "en-nz",
              }}
            />
          </div>
        </article>
      </MDXProvider>
    );
  }

  return BlogLayout;
}

export default withBlogLayout;
