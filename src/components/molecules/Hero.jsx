import React from "react";
import Main from "../../layouts/Main";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <Main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 3.4 },
        }}
        className={`flex flex-col items-center w-full gap-4 xl:flex-row px-6 xl:px-0 py-20 xl:py-0`}
      >
        <img
          src="hero.png"
          alt="hero"
          className="mx-auto h-72 w-72 xl:h-[400px] xl:w-[400px] select-none "
        />

        <div className="flex flex-row items-center w-full gap-3 xl:gap-4 ">
          <div className="flex flex-col items-center h-full">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-56 sm:h-80 2xl:h-80 bg-gradient-to-b from-violet-600" />
          </div>
          <div className="flex flex-col w-full xl:gap-3">
            <p className={`${styles.heroHeadText} text-white flex flex-col`}>
              Hello there! My name is
              <TypeAnimation
                sequence={["Musyan", 2000, "Yandra Muslim", 4000]}
                cursor={true}
                repeat={Infinity}
                className={"text-violet-600"}
              />
            </p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I code using ReactJS, Trying to be a great{" "}
              <br className="hidden sm:block" />
              Front-end Web Developer
            </p>
            {/* <button className="w-40 py-3 mt-2 text-sm font-extrabold transition-all duration-300 rounded-full md:w-56 md:text-lg bg-secondary text-primary hover:bg-gradient-to-r hover:from-violet-600 hover:to-violet-400 hover:text-white">
              Download My CV
            </button> */}
            <div>
              <button className="mt-2 btn btn--light">
                <span className="btn__inner">
                  <span className="btn__slide"></span>
                  <span className="btn__content">Download My Cv</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Main>
  );
};

export default Hero;
