import React from "react";
import { motion } from "framer-motion";

const LoaderHero = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -5000,
        transition: {
          duration: 7,
          delay: 2.5,
        },
      }}
      className="flex flex-col items-center justify-center min-h-screen leading-[0] w-full text-white fixed bg-black z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5 },
          transitionEnd: {
            display: "none",
          },
        }}
        className="text-[2rem] xl:text-[3rem] uppercase"
      >
        Hallo
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.0 },
          transitionEnd: {
            display: "none",
          },
        }}
        className="text-[2rem] xl:text-[3rem] uppercase"
      >
        Welcome to
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5 },
          transitionEnd: {
            display: "none",
          },
        }}
        className="text-[2rem] xl:text-[3rem] uppercase"
      >
        My Website
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.0 },
        }}
        className="text-[2rem] xl:text-[3rem] uppercase"
      >
        いらしゃいませ
      </motion.span>
    </motion.section>
  );
};

export default LoaderHero;
