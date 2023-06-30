import Head from "next/head";
import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Luis</title>
        <meta name="description" content="Pagina principal Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
