import * as React from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Link from "next/link";

const Page = () => (
  <div className={styles.index}>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className={styles.header}>Alon Gamliel</h1>
    <ul>
      <li>
        <Link href="blog/a-gentle-introduction-to-serverless-development">
          <a>Practical Introduction to Serverless Development</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Page;
