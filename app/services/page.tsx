'use client';

import React from 'react'
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern technologies.",
    href: "/services/web-development"
  },
  {
    num: "02",
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications for iOS and Android platforms.",
    href: "/services/mobile-app-development"
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces and experiences.",
    href: "/services/ui-ux-design"
  },
  {
    num: "04",
    title: "SEO Optimization",
    description: "Improving website visibility and ranking on search engines.",
    href: "/services/seo-optimization"
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
