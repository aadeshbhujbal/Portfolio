import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid  border-dark text-lg font-medium
    text-dark dark:border-light dark:text-light 3xl:text-xl sm:text-base
    "
    >
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="px-1 text-2xl text-primary dark:text-primaryDark">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="/"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            Aadesh
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline
            underline-offset-2
            "
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
