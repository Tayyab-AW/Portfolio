import React from "react";
import { Github_Base_Url } from "../utils/Constants";

const Card = (props) => {
  return (
    <div className="pro pro__1 flex flex-col p-[20px] rounded-[17px] gap-x-[30px] gap-y-[30px] bg-secondary shadow-[0_0_10px_rgba(0,0,0,.1)] md:h-[750px] md:w-[570px] lg:flex-row lg:h-[400px] lg:w-fit lg:gap-x-[80px] lg:gap-y-[80px]">
      <div className="pro__img overflow-hidden rounded-[17px] h-[403px] shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_10px_#147efb] bg-primary lg:w-[530px] lg:h-[360px]">
        <a target="_blank" href={props.projectHosting} rel="noreferrer">
          <img
            src={props.projectImg}
            alt="website"
            className="overflow-clip h-auto w-full translate-y-[0%] hover:translate-y-[-87%] duration-[10s] ease-in-out"
          />
        </a>
      </div>
      <div className="pro__text flex flex-col justify-center m-0 p-0 h-auto md:m-auto md:w-[300px]">
        <h3 className="flex items-center justify-center m-0 p-0 relative gap-[2px] uppercase text-[17px] font-bold mb-[20px]">
          {props.projectName}
          <span className="date-className ml-[2px] text-[14px] text-[hsla(0,5%,8%,.773)] dark:text-[#147efb]">
            ({props.projectDate})
          </span>
        </h3>
        <p className="mb-[10px] text-[17px] font-medium text-center text-[#767676] dark:text-[gray]">
          {props.projectDescription}
        </p>
        <div className="mt-[10px] h-[51px] flex items-center text-center justify-center m-0 p-0 gap-xy-[10px] gap-x-[10px]">
          {props.techStack.map((name, index) => (
            // Only do this if items have no stable IDs
            <div
              className="mb-[10px] p-[10px] pr-[13px] text-[17px] font-semibold text-center bg-secondary dark:bg-[white] dark:text-[black] shadow-[0_0_10px_rgba(0,0,0,.1)]  w-fit h-[41px] "
              key={index}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="links mt-[30px] flex items-center justify-evenly m-0 p-0 gap-xy-[10px] gap-x-[10px] ">
          <a
            target="_blank"
            className="flex items-center m-0 p-0 text-[17px] font-medium cursor-pointer gap-xy-[5px] gap-x-[5px] hover:text-[#147efb] hover:transition-all duration-300"
            href={Github_Base_Url + props.repoName}
            rel="noreferrer"
          >
            Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-github"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
          <a
            target="_blank"
            href={props.projectHosting}
            rel="noreferrer"
            className="flex items-center m-0 p-0 text-[17px] font-medium cursor-pointer gap-xy-[5px] gap-x-[5px] hover:text-[#147efb] hover:transition-all duration-300"
          >
            Live Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-external-link"
            >
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
              <path d="M11 13l9 -9"></path>
              <path d="M15 4h5v5"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
