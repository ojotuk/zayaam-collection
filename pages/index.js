import Head from "next/head";
import Link from "next/link";
import { connectToDatabase } from "../util/mongodb";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faTachometerAlt,
  faYinYang,
} from "@fortawesome/free-solid-svg-icons";
import { faYarn, faYCombinator } from "@fortawesome/free-brands-svg-icons";
export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected(); // Returns true or false

  return {
    props: { isConnected },
  };
}
