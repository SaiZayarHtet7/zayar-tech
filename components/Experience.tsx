"use client";
import React from "react";
import { SectionTitle } from "./SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import colors from "tailwindcss/colors";
import Image from "next/image";
import MIT from "../public/assets/mit.jpeg";
import SlashLogo from "../public/assets/SlashLogo.jpg";
import SFU from "../public/assets/SFU.jpg";
import { ExperienceWidget } from "./ExperienceWidget";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-contentContainer mdl:px-10 max-w-containers mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" number="02"></SectionTitle>
      <br />
      <p className="text-justify">
        {" "}
        I began my professional mobile application development journey with an
        internship at <span className="text-textGreen">MIT</span> (Myanmar
        Information Technology Co.). After completing the internship, I teamed
        up with my friends and founded
        <span className="text-textGreen"> SLASH Myanmar</span>. We have been
        working together for 1.5 years. In order to gain more experience and
        take on new challenges, I joined{" "}
        <span className="text-textGreen"> Strategy First Education Group </span>{" "}
        as a Flutter Developer. After one year, I was promoted as senior flutter
        developer currently sharing knowledge and maintain and creating the art
        of mobile application development.{" "}
      </p>
      <div className="mt-20">
        <VerticalTimeline lineColor="#8892b0">
          <ExperienceWidget
            title={"Internship Flutter Developer"}
            date={"Jun 2020 - Oct 2020"}
            companyName={"Myanmar Information Technology"}
            image={MIT}
            description={"I am responsible for development and maintenance for real-time government projects, such as <span className=\"text-textGreen\"> Labor Registration Application</span>and <span className=\"text-textGreen\">Payment Application</span> by using Flutter, REST API and Firebase."}
          />
           <ExperienceWidget
            title={"Programming Teacher"}
            date={"Apr 2021 - Oct 2021"}
            companyName={"Freelance"}
            description={`I have experience of teaching programming basics to children through <span className=\"text-textGreen\">code.org</span> and <span className=\"text-textGreen\">Scratch</span> courses. Additionally, I have instructed them on how to develop simple website using HTML and CSS for design purpose.`}
          />
           <ExperienceWidget
            title={"Co-Founder"}
            date={"May 2021 - Oct 2022"}
            companyName={"Slash Myanmar"}
            image= {SlashLogo}
            description={`&nbsp;&nbsp;&nbsp;&nbsp;My Friends and I co-founded a company with the aim of providing enhanced IT solutions for businesses. We have developed a user-friendly and versatile POS system as our flagship product.<br/> &nbsp;&nbsp;&nbsp;&nbsp;In addition to that, we offer mobile and web development services to cater to the diverse needs of our valuable customers.`}
          />
          <ExperienceWidget
            title={"Freelancer"}
            date={"Dec 2020 - Present"}
            companyName={"Freelance"}
            description={`As a freelancer, I was responsible for the development of mobile application with flutter and firebase.`}
          />
          <ExperienceWidget
            title={"Senior Flutter Developer "}
            date={"Jan 2022 - Present"}
            companyName={"Strategy First Education Group"}
            image= {SFU}
            description={`I am responsible for the development and maintenance of many mobile application provided by StrategyFirst Education Group , aimed at offering a higher education service for Myanmar. Working closely with skillful team, we collaboratively create improved solutions for education sector in Myanmar.`}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};
