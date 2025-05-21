import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero.gif";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    
    <section className="bg-[#D98CE0] overflow-hidden relative" id="home">
      <Navbar />
   
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-10 md:py-0 relative z-20">
          <div className="text-justify md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h3
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-2xl lg:text-2xl font-bold !leading-snug text-white" >
              Get expert tutoring, AI-enhanced learning tools, and personal mentorship.
              {" "}
              <span className="text-[#9E3DAF]"> All in one platform.</span>
            </motion.h3>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Learn More
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[300px] xl:w-[350px] -top-20 relative z-10 "
          />
          {/* removed style
          drop-shadow */}
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
