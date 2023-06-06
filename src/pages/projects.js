import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/RealEstate.png";
import project2 from "../../public/images/projects/BookSearch.png";
import project3 from "../../public/images/projects/photosearch.png";
import project4 from "../../public/images/projects/portfolio.png";
import project5 from "../../public/images/projects/Movie_Search.png";
import project6 from "../../public/images/projects/ABFarm.png";
import project7 from "../../public/images/projects/tictac_toe.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center justify-between  rounded-3xl
        rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
    dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline     "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon className={"bg-dark"} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center 
    rounded-2xl border border-solid border-dark bg-light p-6 text-dark dark:border-light dark:bg-dark dark:text-light xs:p-4
    "
    >
      <div
        className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl
    bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Aadesh, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 3xl:text-8xl 2xl:text-7xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Real Estate App"
                summary="A feature-rich RealEstate App using React, Axios, Cookiesm, Context API, React Router , Bcrypt , Mongoose,  Node and Express. It shows detail regarding almost all the Property . You can easily Add Your own property into this , on main page you will get all the prooperty detaile which have been added with specific numbers , contact and addresses "
                img={project1}
                link="https://realestate-ab.web.app/"
                github="https://github.com/aadeshbhujbal/Real_Estate_Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Movie Search"
                img={project5}
                title="Movie Search"
                link="https://react-movie-search-beta.vercel.app/"
                github="https://github.com/aadeshbhujbal/React_Movie_Search"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Image Search "
                title="Image Search Website"
                img={project3}
                link="https://react-image-iota.vercel.app/"
                github="https://github.com/aadeshbhujbal/react_image_Searc"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Portfolio Website"
                title="React Portfolio Website"
                summary="A professional portfolio website using NextJs, React JS and Framer-motion. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={project4}
                link=""
                github=""
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Book List "
                title="Book List Website"
                img={project2}
                link="https://github.com/aadeshbhujbal/booklist"
                github="https://github.com/aadeshbhujbal/booklist"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="AB Farm"
                img={project6}
                title="AB Farm "
                link="https://s3fu8s.sse.codesandbox.io/overview"
                github="https://s3fu8s.sse.codesandbox.io/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Tic-Tac-Toe"
                title="A Tic-Tac-Toe Game"
                summary="A professional Tic-Tac-Toe Game React JS , Router, and Hooks ."
                img={project7}
                link="https://tic-tac-toe-eaf28.web.app/"
                github="https://github.com/aadeshbhujbal/tic-tac-toe"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
