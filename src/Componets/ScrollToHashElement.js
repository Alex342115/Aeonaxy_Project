import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;
    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };
    // console.log(removeHashCharacter(hash));
    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          top:100,
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
