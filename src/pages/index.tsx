import * as React from "react";
import style from "./style.module.scss";
import Head from "next/head";
import Link from "next/link";

const Page = () => (
  <div className={style.index}>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className={style.header}>Alon Gamliel</h1>
    <ul>
      <li>
        <Link href="blog/practical-introduction-to-serverless-development">
          Practical Introduction to Serverless Development
        </Link>
      </li>
    </ul>
  </div>
);

export default Page;
