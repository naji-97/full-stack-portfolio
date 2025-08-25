'use client';

import React from 'react'
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern technologies like Next.js, React, and Node.js.",
    href: "/work"
  },
  {
    num: "02",
    title: "API Integration",
    description: "Connecting websites to external services and APIs to enable seamless functionality and data exchange.",
    href: "/work"
  },
  {
    num: "03",
    title: "E-Commerce Solutions",
    description: "Developing online stores with product management, shopping carts, and payment integrations.",
    href: "/work"
  },
  {
    num: "04",
    title: "SEO Optimization",
    description: "Improving website visibility and ranking on search engines.",
    href: "/work"
  },
  {
    num: "05",
    title: "Deployment & Hosting",
    description: "Launching websites on platforms like AWS, Vercel, and Netlify with proper configuration and CI / CD setup.",
    href: "/work"
  },
  {
    num: "06",
    title: "Content Management Systems(CMS)",
    description: "Implementing and customizing platforms like WordPress, Strapi, or Sanity for easy content management.",
    href: "/work"
  },
  




]
function page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2  gap-[60px]'
        >

          {services.map((service, index) => {
            return <div key={index} className='flex-1 flex flex-col gap-6 justify-center group'>
              <div className='w-full flex items-center justify-between '>
                <div className='text-5xl font-extrabold text-outline text-transparent transition-all duration-500 ease-in-out '>{service.num} </div>
                <Link href={service.href} className='w-[70px] h-[70px] bg-white group-hover:bg-accent rounded-full transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-3xl text-primary' />
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white text-outline transition-all duration-500' >{service.title} </h2>
              <p className='text-white/60'>{service.description} </p>
              <div className="border-b border-white/20 w-full"></div>
            </div>;
          })}
        </motion.div>
      </div>
    </section >
  )
}

export default page
