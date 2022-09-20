import type { NextPage } from "next";
import Head from "next/head";
import HeadLine from "../components/headline/HeadLine";
import Hero from "../components/hero/Hero";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <main>
          <Hero />
        </main>

        <footer>hallo</footer>
      </div>
    </>
  );
};

export default Home;
