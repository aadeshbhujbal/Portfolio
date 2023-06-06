import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex  w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize text-dark dark:text-light 3xl:text-3xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 3xl:text-xl xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium text-dark dark:text-light 3xl:text-xl md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 2xl:!my-16">
      <h2 className="mb-32 w-full text-center text-8xl font-bold text-dark dark:text-light 3xl:text-8xl 2xl:text-7xl md:mb-16 md:text-6xl xs:text-4xl">
        Education
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark 
          dark:bg-primaryDark dark:shadow-3xl md:left-[30px] md:w-[2px] xs:left-[20px]"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          <Details
            type="Bachelor of Engineering"
            time="2017-2021"
            place="University of Pune"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />

          <Details
            type="Meta Certified Frontend Developer"
            time="2023"
            place="Coursera"
            info="Completed Course Work in concepts like website Testing, Website Developement  "
          />

          <Details
            type="Online Coursework"
            time="2021"
            place="Udemy, edX and TCSion "
            info="Completed working on Node , Express, Mongodb , WordPress, AWS , CloudFlare  etc.."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
