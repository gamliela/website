import React from "react";
import { AppProps } from "next/app";

// tailwind global styling
import "../styles/tailwind.css";

// add global styling for code blocks
import "prismjs/themes/prism-tomorrow.css";

// default component export is required, as described in docs:
// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
const MyApp = function({ Component, pageProps }: AppProps) {
  return (
    <article className="container mx-auto prose lg:prose-xl">
      <Component {...pageProps} />
    </article>
  );
};

export default MyApp;
