"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.60)

  return (
    <div className="flex items-center w-full mt-[5rem] justify-center">
        <motion.section
            className="w-[45rem] text-center items-center leading-8 scroll-mt-[8.5rem]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            ref={ref}
            >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3 text-justify">
                After starting my degree in <span className="font-medium">Computer Engineering</span>, I chose to follow my passion for 
                programming beyond the curriculum of my university studies. This led me to enroll in a coding bootcamp, where I learned 
                <span className="font-medium"> full-stack web development</span>. What captivates me most about programming is its 
                <span className="italic"> problem-solving nature</span> and the opportunity it offers to engage with a diverse range of 
                organizations and industries, delivering <span className="underline">technological solutions</span> that create value and 
                address emerging challenges. As a software developer, I am constantly driven to explore <span className="font-medium">new 
                technologies</span> and embrace new challenges.
            </p>
            <p className="mb-3 text-justify">
                My expertise is centered around <span className="font-medium">React, Next.js, Node.js, and PostgreSQL</span>. Outside of 
                coding, I find joy in <span className="italic">working out at the gym, watching movies, and cycling</span> along the Rambla 
                in Montevideo.
            </p>
        </motion.section>

    </div>

  );
}