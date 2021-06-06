import React, { useState,useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function BackTop() {
  const [isVissible, setIsVissible] = useState(false);

  const checkScroll = () => {
    if (!isVissible && window.pageYOffset > 1000) {
      setIsVissible(true);
    } else if (isVissible && window.pageYOffset <= 1000) {
      setIsVissible(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
useEffect(() => {
   window.addEventListener("scroll", checkScroll);
  return () => {
     window.removeEventListener("scroll", checkScroll);
  }
})
 

  return (
    <FaArrowCircleUp
      className={
        isVissible
          ? "back-to-top-vissible"
          : "back-to-top-hidden"
      }
      onClick={scrollUp}
    />
  );
}
