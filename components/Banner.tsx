"user client";
import React from "react";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col  gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, My name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Sai Zayar Htet.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">A flutter developer</span>
      </motion.h1>
      <motion.p className="text-justify"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {" "}
        I am a skillful software engineer specializing in the development of
        mobile applications. Currently, my primary focus lies in crafting
        high-quality mobile apps that cater specifically to the realm of
        educational platforms at SFEG(Strategy First Education Group).
        <br />
        <a href="http://" target="_blank">
          <span className="text-textGreen inline-flex relative overflow-x-hidden cursor-pointer h-7 group">
            Learn More{" "}
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my Project!
      </motion.button>
    </section>
  );
};
