import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, className }) => {
  return (
    <motion.div
      className={`dark: absolute flex cursor-pointer items-center justify-center rounded-full
      bg-dark px-6 py-3 font-semibold text-light shadow-dark dark:!bg-light dark:!text-dark
      3xl:text-xl lg:px-4 lg:py-2 md:px-3 md:py-1.5 md:text-sm xs:bg-transparent
      xs:font-bold xs:text-dark xs:dark:bg-transparent xs:dark:text-light
       ${{ className }}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" my-16 w-full text-center text-7xl font-bold text-dark dark:text-light 3xl:text-8xl  2xl:text-7xl md:mt-32 md:text-6xl">
        Skills
      </h2>
      <div
        className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:h-[60vh] sm:bg-circularLightSm
      sm:dark:bg-circularDarkSm xs:h-[50vh]
      "
      >
        <motion.div
          className="flex cursor-pointer items-center justify-center rounded-full bg-dark p-10 font-semibold text-light
              shadow-dark dark:bg-light dark:text-dark 3xl:text-xl 2xl:text-lg lg:p-6 md:p-4 xs:p-2 xs:text-xs
              "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-18vw" />
        <Skill name="Tailwind CSS" x="16vw" y="-14vw" />
        <Skill name="Bootstrap" x="32vw" y="-5vw" />
        <Skill name="Node" x="0vw" y="-22vw" />
        <Skill name="MongoDB" x="-25vw" y="18vw" />
        <Skill name="Express " x="-30vw" y="-3vw" />
        <Skill name="Firebase " x="18vw" y="18vw" />
        <Skill name="GCP " x="-1vw" y="22.5vw" />
      </div>
    </>
  );
};

export default Skills;
