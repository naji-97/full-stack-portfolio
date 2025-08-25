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
    category: "Fullstack",
    title: "Inventory Management System",
    description:
      "A full-stack inventory management dashboard using Next.js, Redux Toolkit, Node.js, and AWS. Features include product management, data visualization, and seamless API integration with a PostgreSQL database.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Redux Toolkit" },
      { name: "Node.js" },
      { name: "Prisma" },
      { name: "AWS" }
    ],
    image: "/assets/work/inventory-management.jpeg",
    live: "https://main.d1fuz2wu7nv9rz.amplifyapp.com/dashboard",
    github: "https://github.com/naji-97/Inventory-Management"
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Siinlab AI Training",
    description:
      "A full-stack application for training AI models to detect barcodes and objects in images, while also recognizing Moroccan dialects. Built to streamline data labeling and AI learning pipelines.",
    stack: [
      { name: "React" },
      { name: "Nextjs" },
      { name: "FastAPI" },
      { name: "Stripe" },
    ],
    image: "/assets/work/siinlab.png",
    live: "https://vox.siinlab.com/projects",
    github: "https://vox.siinlab.com/projects"
  },
  {
    num: "03",
    category: "frontend",
    title: "We Are Developer",
    description:"The website for the world's leading developer event is designed using modern CSS techniques like CSS Grid, Flexbox, and pseudo-selectors.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Github" }, { name: "Webpack" }],
    image: "/assets/work/project1.png",
    live: "https://naji-97.github.io/CapstonePrj1-ConferencePage/index.html",
    github: "https://github.com/naji-97/CapstonePrj1-ConferencePage"
  },
  {
    num: "04",
    category: "frontend",
    title: "Space Traveler's Hub",
    description:
      "Web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Using React, Redux & REST APIs",
    stack: [{ name: "React" }, { name: "Redux" }, { name: "Api" }, { name: "Github" }, { name: "Sass" }, { name: "Jest" }],
    image: "/assets/work/space-travel.png",
    live: "https://spacehub.onrender.com/",
    github: "https://github.com/naji-97/sec-space-travels-hub"
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
            <ul className="flex gap-3  ">
              {project.stack.map((item, index) => (
                <li key={index} className=" inline text-xl text-accent  font-medium whitespace-nowrap">
                  {item.name}{index < project.stack.length - 1 ? "," : ""}
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
                    
                      className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500 "
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