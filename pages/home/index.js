import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <p className="font-size-30 font-weight-600">Example repository</p>
        <p className="font-size-26 font-weight-400 m-t-20 p-l-10 p-r-30 width-600">
          Hello guys this is simple example repositiory of how to use sass
          logics in your project. Below showing list of what i covered so far.
        </p>
        <ol className="font-size-36 font-weight-400">
          <li className="primary-light p-l-10 m-b-10 border-radius-2">
            for loops
          </li>
          <li className="secondary-light p-l-10 p-r-10 m-b-10 border-radius-2">
            while loops
          </li>
          <li className="accent-light p-l-10 border-radius-2">each loops</li>
        </ol>
        <p className="font-size-26 font-weight-600 m-t-20">
          Stay tuned for more logics explanation in styling
        </p>
      </div>
    </>
  );
}
