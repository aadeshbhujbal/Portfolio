import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full z-30 h-screen w-screen bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-20 h-screen w-screen bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-10 h-screen w-screen bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
