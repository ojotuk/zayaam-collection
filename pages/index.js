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
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.navBar}>
            <Header />
          </div>
          <div className={styles.heroContents}>
            <div className={styles.heroLeft}>
              <h1>We are the Pioneers of The Digital technology </h1>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Pellentesque in ipsum id orci porta dapibus. Nulla
                porttitor accumsan tincidunt.
              </p>
              <button>
                <Link href="/">
                  <a>Start Exploring</a>
                </Link>
              </button>
            </div>
            <div className={styles.heroRight}>
              <img src="/vector_girl.png" />
            </div>
          </div>
          <div className={styles.greenRectUp}></div>
          <div className={styles.greenRectDown}></div>
          <div className={styles.redRectDown}></div>
          <div className={styles.redRectUp}></div>
          <div className={styles.redChild}></div>
        </section>
        {/* End of hero */}
        <section className={styles.coreSection}>
          <div className={styles.container}>
            <div className={styles.core_one}>
              <FontAwesomeIcon size="5x" icon={faTachometerAlt} />
              <h3>speed up</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur porta lacus, feugiat at urna congue ac vel. Volutpat
                dui, Consectetur porta lacus, feugiat at urna congue ac vel.
                Volutpat dui,{" "}
              </p>
            </div>
            <div className={styles.core_two}>
              <FontAwesomeIcon size="5x" icon={faYinYang} />
              <h3>Ease Time</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur porta lacus, feugiat at urna congue ac vel. Volutpat
                dui, Consectetur porta lacus, feugiat at urna congue ac vel.
                Volutpat dui,{" "}
              </p>
            </div>
            <div className={styles.core_three}>
              <FontAwesomeIcon size="5x" icon={faYarn} />
              <h3>Easy Access</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur porta lacus, feugiat at urna congue ac vel. Volutpat
                dui, Consectetur porta lacus, feugiat at urna congue ac vel.
                Volutpat dui,{" "}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.serviceSection}>
          <h1>What we do</h1>
          <div className={styles.container}>
            <div className={styles.core_one}>
              <FontAwesomeIcon size="5x" icon={faTachometerAlt} />
              <h3>
                <span>e-</span>Evaluation
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur porta lacus, feugiat at urna congue ac vel. Volutpat
                dui, Consectetur porta lacus, feugiat at urna congue ac vel.
                Volutpat dui,{" "}
              </p>
            </div>
            <div className={styles.core_two}>
              <FontAwesomeIcon size="5x" icon={faYinYang} />
              <h3>
                <span>e-</span>Recruitment
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur porta lacus, feugiat at urna congue ac vel. Volutpat
                dui, Consectetur porta lacus, feugiat at urna congue ac vel.
                Volutpat dui,{" "}
              </p>
            </div>
            <div className={styles.core_three}>
              <FontAwesomeIcon size="5x" icon={faYarn} />
              <h3>
                <span>e-</span>Management
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur porta lacus, feugiat at urna congue ac vel. Volutpat
                dui, Consectetur porta lacus, feugiat at urna congue ac vel.
                Volutpat dui,{" "}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.featureHero}>
          <div className={styles.container}>
            <h1>Go beyond your limitations</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur porta lacus, feugiat at urna congue ac vel. Volutpat
              dui, Consectetur porta lacus, feugiat at urna congue ac vel.
              Volutpat dui,{" "}
            </p>
          </div>
        </section>
        <section className={styles.transform_divider}>
          <img src="/ipad-top.png" alt="online-mobile" />
        </section>
        <section className={styles.features}>
          <div className={styles.container}>
            <div className={styles.core_features}>
              <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
              <div>
                <h1>preloaded assessments areas</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur porta lacus, feugiat at urna congue ac vel.
                  Volutpat dui, Consectetur porta lacus, feugiat at urna congue
                  ac vel. Volutpat dui,{" "}
                </p>
              </div>
            </div>
            <div className={styles.core_features}>
              <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
              <div>
                <h1>flexible options</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur porta lacus, feugiat at urna congue ac vel.
                  Volutpat dui, Consectetur porta lacus, feugiat at urna congue
                  ac vel. Volutpat dui,{" "}
                </p>
              </div>
            </div>
            <div className={styles.core_features}>
              <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
              <div>
                <h1>live streams</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur porta lacus, feugiat at urna congue ac vel.
                  Volutpat dui, Consectetur porta lacus, feugiat at urna congue
                  ac vel. Volutpat dui,{" "}
                </p>
              </div>
            </div>
            <div className={styles.core_features}>
              <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
              <div>
                <h1>performance charts</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur porta lacus, feugiat at urna congue ac vel.
                  Volutpat dui, Consectetur porta lacus, feugiat at urna congue
                  ac vel. Volutpat dui,{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.statisticSection}>
          <div className={styles.container}>
            <div className={styles.firstChild}>
              <h3>1</h3>
              <p>Platform</p>
            </div>
            <div>
              <h3>10K</h3>
              <p>Evaluation</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </section>
        <section className={styles.signUpNow}>
          <div className={styles.container}>
            <div className={styles.description}>
              <h3>why choose the hardway when you have us ?</h3>
              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Proin eget tortor risus. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                ligula.
              </p>
              <button>Sign Up Now</button>
            </div>
            <div className={styles.svgMan}>
              <img src="/Vector.svg" />
            </div>
          </div>
        </section>
        <section className={styles.pricingSectionUp}>
          <div className={styles.container}>
            <div className={styles.description}>
              <h1>Pricing Plans</h1>
              <p>
                faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                ligula.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.pricingSectionDown}>
          <div className={styles.container}>
            <div className={styles.cards}>
              <div className={styles.card_one}>
                <div className={styles.up}>
                  <h3>Basic</h3>
                  <p>
                    <sup>$</sup>20<sub>/Month</sub>
                  </p>
                </div>
                <div className={styles.down}>
                  <p>lorem</p>
                  <p>lorem</p>
                  <p>lorem</p>
                  <button>Sign Up Now</button>
                </div>
              </div>
              <div className={styles.card_two}>
                <div className={styles.up}>
                  <h3>Midi</h3>
                  <p>
                    <sup>$</sup>20<sub>/Month</sub>
                  </p>
                </div>
                <div className={styles.down}>
                  <p>lorem</p>
                  <p>lorem</p>
                  <p>lorem</p>
                  <button>Sign Up Now</button>
                </div>
              </div>
              <div className={styles.card_three}>
                <div className={styles.up}>
                  <h3>Super</h3>
                  <p>
                    <sup>$</sup>20<sub>/Month</sub>
                  </p>
                </div>
                <div className={styles.down}>
                  <p>lorem</p>
                  <p>lorem</p>
                  <p>lorem</p>
                  <button>Sign Up Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.description}>
            <div className={styles.about}>
              <h3>About Us</h3>
              <div>
                <p>
                  <span>IQ-EValuate</span>Vivamus magna justo, lacinia eget
                  consectetur sed, convallis at tellus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Curabitur non nulla sit
                  amet nisl tempus convallis quis ac lectus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
            <div className={styles.links}>
              <h3>Links</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.explore}></div>
            <div className={styles.contact}>
              <h3>Contact Us</h3>
              <div>
                <FontAwesomeIcon icon={faMapPin} />
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
