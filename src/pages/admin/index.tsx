import React, { ReactNode } from "react";
import Head from "next/head";
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import NoSSR from "../../components/NoSSR";

// TODO: remove this from package.json, it's just example for the tutorial
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NoSSR>
        <Admin dataProvider={dataProvider} />
      </NoSSR>
    </>
  );
}

export default Page;
