import React, { useState, useRef } from "react";
import Link from "next/Link";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(true);
  const nav = useRef(null);

  const toggler = () => {
    nav.current.classList.toggle("hello");
    console.log("clicked");
  };
  return (
    <div className={styles.navContainer}>
      <div className={styles.brand} onClick={toggler}>
        <img src="/iqlogo.png" alt="brand-logo" />
        <span>IQ-Evaluate</span>
      </div>
      <ul className={open ? styles.open : styles.closed} ref={nav}>
        <li className={styles.firstChild}>
          <Link href="/">
            <a> My Evaluation</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Features</a>
          </Link>
        </li>
      </ul>
      <span className={styles.logins}>
        <Link href="/">
          <a>Login / Sign Up</a>
        </Link>
      </span>
      <span className={styles.toggler}>
        {open ? (
          <FontAwesomeIcon
            icon={faTimes}
            size="3x"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="3x"
            onClick={() => setOpen(!open)}
          />
        )}
      </span>
    </div>
  );
};

export default Header;
