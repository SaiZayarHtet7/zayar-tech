import React from "react";

interface Props {
    title:string,
    number:string
}

export const SectionTitle = ({title,number}:Props) => {
  
  if (!title || !number) {
    throw "please enter title or number";
  }

  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="text-base md:text-lg text-textGreen mr-2">{number}.</span>{" "}
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-textDark ml-6"/>
    </h2>
  );
};
