import React, { useState, useRef } from "react";
import Link from "next/Link";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navLinks = useRef(null);

  const toggler = () => {
    navLinks.current.classList.toggle(styles.open);
    setOpen(!open);
  };

  return <div className={styles.nav_bar}></div>;
};

export default Header;
