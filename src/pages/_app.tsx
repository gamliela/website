import React from "react";
import { AppProps } from "next/app";

// add global styling for code blocks
import "prismjs/themes/prism-tomorrow.css";

// default component export is required, as described in docs:
// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
