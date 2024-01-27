import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto  my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize text-dark dark:text-light 3xl:text-3xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize  text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 3xl:text-xl xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full  font-medium text-dark dark:text-light 3xl:text-xl md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 2xl:my-16 2xl:mt-28 xs:my-12">
      <h2 className="mb-32 w-full text-center text-9xl font-bold text-dark dark:text-light 3xl:text-8xl 2xl:text-7xl md:mb-16 md:text-6xl xs:text-4xl">
        Experience
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark 
  dark:bg-primaryDark dark:shadow-3xl md:left-[30px] md:w-[2px] xs:left-[20px]
  "
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Dataspace Security "
            companyLink="https://dataspacesecurity.com/"
            time="2024-Present"
            address="Sector V, Kolkota, West Bengal"
            work="
            As a Frontend Developer, my role is to bring the visual and interactive aspects of websites and web applications to life. I specialize in creating engaging user interfaces and seamless user experiences by utilizing my skills. I work closely with UX/UI designers to translate their mockups and wireframes into functional and visually appealing interfaces."
          />

          <Details
            position="Associate Lead"
            company="Shadowfax Technologies "
            companyLink="https://www.shadowfax.in/"
            time="2022"
            address="Bengaluru, Karnataka "
            work="Worked on a team responsible for developing a New UI and Working With Portals.Managing Operations "
          />

          <Details
            position="Trainee Engineer"
            company="Kalyani Forge"
            companyLink="https://www.kalyaniforge.co.in/"
            time="2020-2021"
            address="Sanaswadi,Pune"
            work="As a Trainee Engineer in Kalyani Forge, my role is to support the manufacturing operations of a forging  by operating and programming CNC machines and VMCs. I work closely with experienced engineers and machinists to gain hands-on experience in machining processes, tooling, and production efficiency. With my technical skills and eagerness to learn, I contributed to the successful production of high-quality forged components."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
