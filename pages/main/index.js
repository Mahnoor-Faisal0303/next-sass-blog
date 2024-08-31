import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border-radius-10 m-l-100 p-l-20 p-r-10 primary-light width-200">
        <p className="font-size-40 font-weight-400">Hello World</p>
      </div>
    </>
  );
}
