import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>OK... second try!</h1>

        <p className={styles.description}>
          To be honest I don't really know what I am doing. :P
        </p>
      </main>

      <footer className={styles.footer}>
        But, whatever, nice to have the first step. ;-D
      </footer>
    </div>
  );
}
