import React from "react";

import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex  flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col  gap-4 ">
        <a href="http://github.com/saizayarhtet7" type="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full  inline-flex items-center  justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FiGithub />
          </span>
        </a>
      </div>
      <div className="flex flex-col  gap-4 ">
        <a href="http://github.com/saizayarhtet7" type="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full  inline-flex items-center  justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FiLinkedin />
          </span>
        </a>
      </div>
      <div className="flex flex-col  gap-4 ">
        <a href="http://github.com/saizayarhtet7" type="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full  inline-flex items-center  justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FiFacebook />
          </span>
        </a>
      </div>

      <div className="w-[2px] h-32  bg-textDark"></div>
      
    </div>
  );
};

export default LeftSide;
