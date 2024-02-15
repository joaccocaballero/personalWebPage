"use client";

import React from "react";
import { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
    const { ref } = useSectionInView("Education")

  return (
    <div className="flex items-center  w-full justify-center mt-10" ref={ref}>
        <motion.section
            className="w-[45rem] text-center leading-8 scroll-mt-[15rem]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="education"
            >
            <SectionHeading>Education</SectionHeading>
            <dl className=" text-gray-900  divide-gray-200 dark:text-white dark:divide-gray-700">
                <div className="flex flex-col pb-3">
                    <dt className="text-black-500 md:text-xl mb-2 dark:text-gray-400 font-semibold">Higher Education:</dt>
                    <dd className="text-lg font-semibold">Universidad de la República: </dd>
                    <dd className="text-lg font-light items-center w-full flex flex-wrap gap-2 justify-center">Facultad de Ingeniería, Ingeniería en Computación 
                    <span className="bg-gray-300 ml-2 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Ongoing</span></dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="text-black-500 md:text-xl dark:text-gray-400 font-semibold mb-2 ">Certifications:</dt>
                    <dd className="text-lg font-semibold">University of Cambridge: English Certificates</dd>
                    <dd className="text-lg font-light">- B2 First</dd>
                    <dd className="text-lg font-light">- C1 Advanced</dd>
                    <dd className="text-lg font-semibold mt-2">Senpai Academy:</dd>
                    <dd className="text-lg font-light">- Full Stack Web Development Bootcamp </dd>
                </div>
            </dl>

        </motion.section>
          
    </div>

  );
}