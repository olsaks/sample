import "../../styles/components/intro.scss";
import { motion, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";
import TRANSFORMS_CONFIG from "../config/transformsConfig";

export default function IntroItem({ scrollYProgress, index }) {
  const [type, setType] = useState(null);

  const defaultIndices = new Set(TRANSFORMS_CONFIG.defaultIndices);
  const oliverIndices = new Set(TRANSFORMS_CONFIG.oliverIndices);
  const saksIndices = new Set(TRANSFORMS_CONFIG.saksIndices);

  useEffect(() => {
    console.log(defaultIndices);
    if (defaultIndices.has(index + 1)) {
      setType("default");
    } else if (oliverIndices.has(index + 1)) {
      setType("oliver");
    } else if (saksIndices.has(index + 1)) {
      setType("saks");
    }
  }, []);

  const generateRotate = (index, position) => {
    if (defaultIndices.has(index)) {
      return TRANSFORMS_CONFIG.defaultRotate[position];
    } else if (TRANSFORMS_CONFIG.transforms[index]) {
      return TRANSFORMS_CONFIG.transforms[index][position];
    } else {
      return TRANSFORMS_CONFIG.defaultRotate[position];
    }
  };

  const rotateTop = useTransform(
    scrollYProgress,
    [0, 2 / 32],
    generateRotate(index + 1, "top")
  );
  const rotateBottom = useTransform(
    scrollYProgress,
    [0, 2 / 32],
    generateRotate(index + 1, "bottom")
  );

  const transformOliver = useTransform(
    scrollYProgress,
    [2 / 32, 3 / 32],
    ["0px", "30px"]
  );
  const transformSaks = useTransform(
    scrollYProgress,
    [2 / 32, 3 / 32],
    ["0px", "-30px"]
  );
  const opacity = useTransform(scrollYProgress, [2 / 32, 3 / 32], [1, 0]);

  const styles = {
    oliver: {
      x: transformOliver,
    },
    saks: {
      x: transformSaks,
    },
    default: {
      x: "0px",
    },
  };

  return (
    <motion.div
      className="intro-item"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      style={{
        opacity: TRANSFORMS_CONFIG.transforms[index + 1] ? 1 : opacity,
        x: type ? styles[type].x : "0px",
      }}
    >
      <motion.span
        className="line"
        style={{
          rotate: rotateTop,
        }}
      />
      <motion.span
        className="line"
        style={{
          rotate: rotateBottom,
        }}
      />
    </motion.div>
  );
}
