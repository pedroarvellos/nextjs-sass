import React, { useState } from "react";
import Link from "next/link";
import styles from "./Layout.module.scss";
import Head from "next/head";
import Router from "next/router";

import Spinner from "../spinner/Spinner";

const Layout = ({ children, title }) => {
  Router.onRouteChangeStart = () => setSpinnerState(true);
  Router.onRouteChangeComplete = () => setSpinnerState(false);
  Router.onRouteChangeError = () => setSpinnerState(false);

  const [spinnerState, setSpinnerState] = useState(false);
  const spinner = spinnerState && <Spinner></Spinner>;

  return (
    <div className={styles.root}>
      <Head>
        <title>Next.js with Sass</title>
        <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hire-me">
          <a>Hire Me</a>
        </Link>
      </header>
      <div className={styles.content}>
        {spinner}
        <h1>{title}</h1>
        {children}
      </div>
      <footer><p>© 2020 - Pedro Arvellos</p></footer>
    </div>
  );
};

export default Layout;
