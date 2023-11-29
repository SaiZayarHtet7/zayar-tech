import React from "react";
import Image, { StaticImageData } from "next/image";
import parse from 'html-react-parser';
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import { FiBox } from "react-icons/fi";
interface Props {
  title: string;
  date: string;
  companyName: string;
  image?: StaticImageData;
  description: string;
}

export const ExperienceWidget = ({
  title,
  date,
  companyName,
  image,
  description,
}: Props) => {
  return (
    <VerticalTimelineElement
      visible={true}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#112240" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      iconStyle={{ background: "#fff", color: "#fff" }}
      icon={ image ?  <Image className="rounded-full  bg-white" src={image ?? ""} alt="MIT" /> : <span className="text-textDark font-2xl"><FiBox/></span> }
    >
      <h1>{title}</h1>
      <p className="text-textGreen">{companyName}</p>{" "}
      <p className="text-justify">{parse(description)}</p>
    </VerticalTimelineElement>
  );
};
