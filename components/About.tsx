import React from "react";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { FiArrowRight, FiChevronsRight } from "react-icons/fi";
import ProfileImage from "../public/assets/ProfileImage.png";

export const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About" number="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p className="text-justify">
            My love for creating impactful solutions drive me to craft mobile
            applications that center to the unique needs of users in every
            field. With a strong focus on architectural design patterns, I
            strive to create robust, scalable, and maintainable applications
            that deliver exceptional user experience.
          </p>
          <p>Technology I commonly use</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-2">
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              Flutter
            </li>
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              Android
            </li>
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              iOS
            </li>
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              JavaScript
            </li>
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              TypeScript
            </li>
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              React
            </li>
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              Next
            </li>
            <li className="flex items-center">
              <span className="text-textGreen mr-5">
                <FiChevronsRight />
              </span>
              Express
            </li>
          </ul>
        </div>
        <div className=" lg:hidden block w-full h-80 -left-6 -top-6 rounded-lg">
          <Image
            className=" rounded-lg h-full object-cover mx-auto block"
            src={ProfileImage}
            alt="profileImage"
          />
        </div>

        <div className=" hidden lg:block w-full mx-auto lgl:w-1/3 h-80 relative  group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 mx-auto">
              <Image
                className="rounded-lg h-full object-cover mx-auto block"
                src={ProfileImage}
                alt="profileImage"
              />
              <div
                className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/
              20 rounded-md top-0 left-0  group-hover:bg-none duration-300"
              ></div>
            </div>
          </div>
          <div
            className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-y-2 group-hover:-translate-x-2
            transition-transform duration-300"
          ></div>
        </div>
      </div>
    </section>
  );
};
