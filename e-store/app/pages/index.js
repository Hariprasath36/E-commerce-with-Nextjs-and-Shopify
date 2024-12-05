import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Store</title>
        <meta
          name="E-store"
          content="Learning Shopify"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Store</h1>
        <div className={styles.products}>
          </div>
      </main>
    </div>
  );
}