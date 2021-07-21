import "../../styles/views/home.scss";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import Intro from "../components/Intro";

export default function Home() {
  const { scrollYProgress } = useViewportScroll();

  const home = useTransform(scrollYProgress, [1 / 8, 2 / 8], ["0%", "-103%"]);

  const homeStyle = {
    translateY: home,
  };

  return (
    <motion.div className="page home" style={{ ...homeStyle }}>
      <Intro scrollYProgress={scrollYProgress} />
    </motion.div>
  );
}
