import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Team,
  Blog,
  Footer,
  Contact,
  Digitalization,
  Talent,
  Coach,
} from "./components";
import { useScrollPosition } from "./hooks/useScrollPosition";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const App = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div className="bg-primary w-full ">
      <div
        className={`${styles.paddingX} ${styles.flexCenter}  ${classNames(
          scrollPosition > 0 ? "shadow bg-primary" : "shadow-none",
          "transition-all duration-500 sticknavbar z-[10]"
        )} `}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} overflow-hidden`}
      >
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <Business />
          <Billing />
          <CardDeal />
          <Digitalization />
          <Talent />
          <Coach />
          <Team />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
