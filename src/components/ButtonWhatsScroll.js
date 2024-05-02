import React, { useState, useEffect } from "react";

import { ImWhatsapp } from "react-icons/im";

import styles from "../styles/ButtonWhatsScroll.module.css";

function ButtonWhatsScroll() {
  const [pageYPosition, setPageYPosition] = useState(0);
  const [containerDoubts, setContainerDoubts] = useState(false);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPageYAfterScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleMarkerClick = () => {
    const locationUrl = "https://api.whatsapp.com/send?phone=5512997228453";
    window.open(locationUrl, "_blank");
  };

  return (
    <div className={styles.containerButtons}>
      {pageYPosition > 700 && (
        <div className={styles.containerScroll}>
          <span
            onClick={() => scrollToTop()}
            className={styles.btnScroll}
          ></span>
        </div>
      )}
      <div className={styles.containerWhats}>
        <p
          style={containerDoubts ? { display: "flex" } : { display: "none" }}
          className={styles.paragraphWhats}
        >
          Tire suas dúvidas!
        </p>
        <div
          className={styles.iconWhats}
          onMouseEnter={() => setContainerDoubts(true)}
          onMouseLeave={() => setContainerDoubts(false)}
          onClick={handleMarkerClick}
        >
          <ImWhatsapp color="#FFF"  />
        </div>
      </div>
    </div>
  );
}

export default ButtonWhatsScroll;
