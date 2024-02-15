"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects")
  
  return(
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}

    >
      <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
        <SectionHeading>Freelance Projects</SectionHeading>
        <div className="flex justify-center">
          <div className="bg-gray-100 border flex justify-center flex-wrap border-black/5 rounded-lg 
          relative hover:bg-gray-200  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            {
              projectsData.map((project, index) => (
                <React.Fragment key={index}>
                  <Project {...project} />
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </section>
    </motion.div>
  );
}

