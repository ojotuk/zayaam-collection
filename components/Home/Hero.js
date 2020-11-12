import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Slide.module.css";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    //slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const descriptionSlide = [
  {
    spn: "welcome",
    link: "/",
    name: styles.slide_1,
    caption: "Zayaam Collections",
    id: 1,
  },
  {
    spn: "women collection from 2018",
    link: "/",
    name: styles.slide_1,
    caption: "New Arrivals",
    id: 2,
  },
  {
    spn: "men collection from 2018",
    link: "/",
    name: styles.slide_2,
    caption: "New Arrivals",
    id: 3,
  },
];

const Hero = (props) => {
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // afterChange={() => console.log("changed")}
      >
        {descriptionSlide.map((slide) => (
          <div className={slide.name} key={slide.id}>
            <div>
              <span>{slide.spn}</span>
              <h3>{slide.caption}</h3>
              <Link href={slide.link}>
                <a>
                  <button>Shop Now</button>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Hero;
