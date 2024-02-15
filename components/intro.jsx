"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const {setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section className="mb-[3rem] text-center max-w-[55rem] scroll-mt-[100rem]" id="home" ref={ref}>
       <div className='flex items-center justify-center'>
        <div className='relative'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
            >
                <Image src="/port.jpeg" alt="personalportrait" width={240} height={240} quality={99} priority={true}
                    className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                  >
                </Image>

            </motion.div>
            <motion.span 
                className="absolute bottom-0 right-1 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
                }}
            >
                👋🏼🧉👨🏽‍💻
            </motion.span>
        </div>
       </div>

       <motion.h1
          className="mb-10 mt-4 px-4 text-lg font-lg !leading-[1.5] text-center sm:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hey, I'm Joaquín.</span> I'm a{" "}
            <span className="font-bold">web developer</span>  and also a 
            <span className="font-bold"> computer engineering student</span>. Always
            <span className="font-bold"> endlessly curious </span>
            about technology and coding.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/jca-uy/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}
