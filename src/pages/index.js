import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore Aadesh's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <main className="flex min-h-screen w-full items-center text-dark dark:text-light sm:items-start xs:!min-h-fit">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex w-full items-center justify-between lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Aadesh"
                className="h-auto w-full lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="flex w-1/2 flex-col  items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="lg:!text=5xl !text-left 
                !text-5xl 3xl:!text-7xl xl:!text-4xl lg:!text-center md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-4 text-base font-medium 3xl:text-2xl md:text-sm sm:text-xs">
                As a skilled Web developer, I am dedicated to turning ideas into
                innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in React.js and web
                development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center rounded-lg border-2 border-solid border-transparent
                  bg-dark p-2.5 px-6 text-lg font-semibold text-light
                  hover:border-dark hover:bg-light hover:text-dark dark:bg-light    
                  dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light
                  3xl:px-8 3xl:py-4 3xl:text-2xl md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"ml-1 w-6 3xl:w-8"} />
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light 3xl:text-2xl md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute bottom-8 right-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Codebucks" className="h-auto w-full" />
        </div>
      </main>
    </>
  );
}
