import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div
      className="fixed bottom-4 left-4
    flex items-center justify-center overflow-hidden md:absolute md:bottom-auto md:left-auto md:right-8 md:top-0
    sm:right-0
    "
    >
      <div className="relative flex h-auto w-48 items-center justify-center 3xl:w-52 md:w-24">
        <CircularText
          className={"animate-spin-slow fill-dark dark:fill-light"}
        />

        <Link
          href="mailto:aadeshbhujbal1@gmail.com"
          className="absolute left-1/2 top-1/2
                  flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full 
                  border border-solid border-dark bg-dark font-semibold text-light shadow-md hover:bg-light
                  hover:text-dark dark:bg-light dark:text-dark
                  hover:dark:border-light hover:dark:bg-dark hover:dark:text-light 3xl:h-24
                                    3xl:w-24 3xl:text-xl
                  md:h-12 md:w-12 md:text-[10px]

"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
