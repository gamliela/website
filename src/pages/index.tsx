import React, { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";

function Page(): ReactElement {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="antialiased text-gray-900 px-6 py-6 prose">
        <h1>Alon Gamliel</h1>
        <ul>
          <li>
            <Link href="blog/a-gentle-introduction-to-serverless-development">
              <a>A Gentle Introduction to Serverless Development</a>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Page;
