"use client";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Experience } from "../components/Experience";
import LeftSide from "../components/Leftside";
import Navbar from "../components/Navbar";
import { RightSide } from "../components/RightSide";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden xl:inline-flex  w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4 w-full">
            <Banner></Banner>
            <About></About>
            <Experience></Experience>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
