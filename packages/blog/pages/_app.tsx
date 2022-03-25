import React, { ReactElement } from "react";
import type { AppProps } from "next/app";

// tailwind global styling
import "../styles/tailwind.css";

// default export is required, as described in docs:
// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
