import "../../styles/components/intro.scss";
import React from "react";
import IntroItem from "./IntroItem";
import { motion, useTransform } from "framer-motion";

export default function Intro({ scrollYProgress }) {
  //creating 88 grid items for a grid of 8x11
  const length = 88;
  const items = Array.from({ length: length }, (v, i) => {
    return <IntroItem key={i} index={i} scrollYProgress={scrollYProgress} />;
  });

  //scroll indicator functionality/animition
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0.03, 0.06],
    [1, 0]
  );
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.06], [0, -10]);
  const scrollBorderY = useTransform(scrollYProgress, [0, 0.03], [0, 12]);
  const scrollIndicatorText = "scroll";
  const scrollContainerStyle = {
    opacity: scrollIndicatorOpacity,
    y: scrollIndicatorY,
  };
  const scrollContainerTransition = {
    duration: 1,
    yoyo: Infinity,
    type: "spring",
    bounce: 0.5,
  };
  const scrollContainer = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const scrollLetterVariants = {
    start: {
      y: 0,
    },
    end: {
      y: 3,
    },
  };

  const backgroundY = useTransform(
    scrollYProgress,
    [6 / 64, 10 / 64],
    ["-100%", "0%"]
  );

  const renderScrollIndicatorText = () => {
    return scrollIndicatorText.split("").map((item, i) => {
      return (
        <motion.span
          variants={scrollLetterVariants}
          transition={scrollContainerTransition}
          key={i}
        >
          {item}
        </motion.span>
      );
    });
  };

  return (
    <div className="intro">
      <div className="intro-grid">
        {items}
        <motion.div
          className="intro-background"
          style={{
            y: backgroundY,
          }}
        />
      </div>
      <motion.div
        className="scroll-indicator"
        variants={scrollContainer}
        style={scrollContainerStyle}
        initial="start"
        animate="end"
      >
        <motion.div
          className="scroll-border"
          style={{ y: scrollBorderY }}
          initial="start"
          animate="end"
        />

        {renderScrollIndicatorText()}
      </motion.div>
    </div>
  );
}
