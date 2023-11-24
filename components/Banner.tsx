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
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {" "}
        I am a skillful software engineer specializing in the development of
        mobile applications. Currently, my primary focus lies in crafting
        high-quality mobile apps that cater specifically to the realm of
        educational platforms at SFEG(Strategy First Education Group).
      </motion.p>
    </section>
  );
};
