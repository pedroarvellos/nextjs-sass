import React from "react";
import Link from "next/link";
import styles from "./Layout.module.scss";

const Layout = ({ children, title }) => (
  <div className={styles.root}>
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
    <h1>{title}</h1>
    {children}
    <footer>Footer</footer>
  </div>
);

export default Layout;
