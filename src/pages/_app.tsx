import React from "react";
import { AppProps } from "next/app";
import PrismCodeBlock from "../components/PrismCodeBlock";
import { MDXProvider } from "@mdx-js/react";

// tailwind global styling
import "../styles/tailwind.css";

const components = {
  code: PrismCodeBlock,
};

// default component export is required, as described in docs:
// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
const MyApp = function({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <article className="container mx-auto prose lg:prose-xl">
        <Component {...pageProps} />
      </article>
    </MDXProvider>
  );
};

export default MyApp;
