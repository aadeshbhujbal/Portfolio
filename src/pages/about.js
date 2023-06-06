import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/myimage.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 800 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Aadesh Portfolio | About Page</title>
        <meta
          name="description"
          content="Learn more about Aadesh , a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !leading-tight 3xl:text-8xl 2xl:text-7xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 3xl:text-4xl">
                Biography
              </h2>
              <p className="font-medium text-dark dark:text-light  3xl:text-xl">
                Hi, I&apos;m Aadesh, a web developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With 2 years of experience in the field. I am always looking for
                new and innovative ways to bring my clients&apos; visions to
                life.
              </p>

              <p className="my-4 font-medium  text-dark dark:text-light 3xl:text-xl">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium  text-dark dark:text-light 3xl:text-xl">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark
bg-light p-12 dark:border-light dark:bg-dark 2xl:!p-6 xl:col-span-4 md:order-1 md:col-span-8
"
            >
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Aadesh"
                className="!h-1/2 w-full rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-dark dark:text-light 3xl:text-7xl 2xl:text-6xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2
                  className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 3xl:text-xl xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl  font-bold text-dark dark:text-light 3xl:text-7xl 2xl:text-6xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2
                  className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 3xl:text-xl xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-dark dark:text-light 3xl:text-7xl 2xl:text-6xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 3xl:text-xl xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
