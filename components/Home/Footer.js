import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
const Footer = () => {
  let date = new Date();
  let copyright = () => `${date.getFullYear()} zayaamcollections.com`;
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.getInTouch}>
            <h3>Get in Touch</h3>
            <p>
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <i className="fa fa-facebook"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <i className="fa fa-instagram"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <i className="fa fa-pinterest"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categories}>
            <h3>categories</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Men</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Women</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Kiddies</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>sunglasses</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>Links</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Search</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.mail}>
            <h3>News Letter</h3>
            <input
              placeholder="email@example.com"
              type="email"
              autoComplete="off"
            />
            <button>Subscribe</button>
          </div>
        </div>
        <hr></hr>
        <div className={styles.copyright}>&copy; {copyright()}</div>
      </div>
    </section>
  );
};

export default Footer;
