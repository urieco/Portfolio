import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollTopButton && (
        <FaAngleDoubleUp onClick={scrollTop} className="toTopBtn" />
      )}
    </>
  );
};

export { ScrollToTop };
