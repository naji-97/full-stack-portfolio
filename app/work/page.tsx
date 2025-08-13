"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

import Image from "next/image";
import WorkdSilderButtons from "@/components/WorkdSilderButtons";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnammodi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnammodi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "React" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnammodi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: ""
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnammodi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnammodi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  },
  {
    num: "06",
    category: "frontend",
    title: "project 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnammodi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  },
]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
  }

  return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 ,transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%] ">
            {/* Ouline Num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* Project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
            {/* Project description */}
            <p className="text-white/60 ">{project.description} </p>
            {/* Project stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => (
                <li key={index} className="text-xl text-accent  font-medium">
                  {item.name} {index < project.stack.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
            {/* Border */}
            <div className="border border-white/20"></div>
            {/* Buttons */}
            <div className="flex items-center gap-4 ">
              {/* Live project button */}
              <Link href={project.live} target="_blank" className="btn btn-md btn-primary mt-4">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group ">

                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent> <p> Live Project</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>

              </Link>
              {/* Github project button */}
              <Link href={project.github} target="_blank" className="btn btn-md btn-secondary ml-4">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group ">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent> <p> Github</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%] ">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="xl:h-[520px] mb-12"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index} className="w-full ">

                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/* Overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/* Image */}
                  <div className="relative w-full h-full ">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 "
                  />
                  </div>
                </div>
                

              </SwiperSlide>
            ))}
            {/* Slider Buttons */}
            <WorkdSilderButtons containerStyles="flex gap-6 absolute right-0  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-center  " 
            btnSyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all duration-500 cursor-pointer rounded-full" 
            iconsStyles="" />
          </Swiper>
        </div>

      </div>
    </div>

  </motion.section>;
};

export default Work;