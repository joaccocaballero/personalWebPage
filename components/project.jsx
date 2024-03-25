"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Project({ title, client, clientWeb ,description, tags }){
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
        <section className="flex flex-col xl:flex-row justify-between relative">
        <div className="pt-4 pb-7 w-full p-5 flex gap-3 flex-col">
            <h2 className="font-bold text-xl">{title}</h2>
            <span className="font-semibold"><a href={clientWeb} className="hover:text-blue-500">Client: {client}</a></span> 
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-justify">{description}</p>
            <ul className="flex flex-wrap mt-10 gap-2 sm:mt-auto"> 
            {tags.map((tag, index) => (
                <div key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">{tag}</div>
            ))}
            </ul>
        </div>  
        <div className="max-w-[30rem]">
            <Image src={"/mockupPcom.png"} alt={"project photo"} layout="responsive" width={300} height={200} quality={99} priority={true} />
        </div>
        </section>
    </motion.div>
  );
}