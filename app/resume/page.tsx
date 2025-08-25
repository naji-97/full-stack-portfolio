'use client';
import React from 'react';
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiWordpress, SiPrisma, SiRubyonrails, SiMysql, SiRedux
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a self-taught full-stack web developer passionate about building innovative, user-focused web applications. With over 5 years of experience, I have worked on 30+ full-stack projects, ranging from small business websites to complex applications. Skilled in both front-end and back-end technologies, I enjoy solving problems, optimizing performance, and delivering high-quality results.",
  info: [
    { fieldName: "Name", fieldValue: "Naji Ali" },
    { fieldName: "Email", fieldValue: "elbairabennaji@gmail.com" },
    { fieldName: "Phone", fieldValue: "+212 6 12 34 56 78" },
    { fieldName: "Experience", fieldValue: "5+ years" },
    { fieldName: "Location", fieldValue: "Morocco" },
    {
      fieldName: "Skills",
      fieldValue:
        "Web Development, Software Engineering, SEO Optimization, Ecommerce Solutions",
    },
    { fieldName: "Languages", fieldValue: "English, French, Arabic" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description:
    "Over the past years, I have worked in various environments, from startups to remote global teams, building and maintaining full-stack applications, integrating APIs, and delivering ecommerce solutions.",
  items: [
    {
      company: "Siinlab",
      position: "Full Stack Web Developer",
      duration: "Oct 2023 – Present",
      details: [
        "Developed and deployed AI-powered organizational optimization tools using React, Redux Toolkit, and TailwindCSS.",
        "Worked on backend services using Node.js, Prisma, and MongoDB.",
        "Integrated Stripe payment gateway and user onboarding processes.",
      ],
    },
    {
      company: "Freelance",
      position: "WordPress & Ecommerce Developer",
      duration: "May 2022 – Nov 2022",
      details: [
        "Built and customized ecommerce websites using WordPress & WooCommerce.",
        "Optimized websites for SEO and performance.",
        "Implemented secure payment systems and responsive design.",
      ],
    },
    {
      company: "Microverse",
      position: "Software Engineer Student & Mentor",
      duration: "Nov 2022 – Dec 2023",
      details: [
        "Completed 1300+ hours of full-stack development with JavaScript, React, Next.js, Ruby on Rails, and MySQL.",
        "Mentored junior developers, improving their code quality and performance.",
      ],
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  Description:
    "I have a strong educational background in computer science and software engineering, complemented by various online courses and certifications. My education has provided me with a solid foundation in programming, software development methodologies, and project management.",
  items: [
    {
      institution: "Microverse",
      degree: "Certified Full Stack Software Engineering Program",
      duration: "Nov 2022 – Dec 2023",
    },
    {
      institution: "Online Courses",
      degree: "Full Stack Web Development",
      duration: "2019 – 2022",
    },
    {
      institution: "Institute specializing in offshoring careers, Tetouan Morocco",
      degree: "Technician Specializing in Computer Networks - Infrastructure Digitale",
      duration: "Oct 2016 – Jan 2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a diverse skill set that includes front-end and back-end technologies, database management, and design tools. I am always eager to learn new technologies and improve my skills.",
  sillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiRubyonrails />, name: "Ruby on Rails" },
    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <FaFigma />, name: "Figma" },
  ]
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import {  motion } from 'framer-motion';
import Image from 'next/image';
export default function Page() {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { duration: 0.4, delay: 2.4, ease: "easeIn" }
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
    <div className="container mx-auto mb-5">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
          <TabsTrigger value="experience" className="text-lg font-semibold">Experience</TabsTrigger>
          <TabsTrigger value="education" className="text-lg font-semibold">Education</TabsTrigger>
          <TabsTrigger value="skills" className="text-lg font-semibold">Skills</TabsTrigger>
          <TabsTrigger value="about" className="text-lg font-semibold">About Me</TabsTrigger>
        </TabsList>
        <div className='min-h-[70vh] w-full '>
          {/* Experience content */}
          <TabsContent value='experience' className='w-full '>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image src={experience.icon} alt="Experience Icon" width={32} height={32} className="w-8 h-8" />
                <h2 className="text-2xl font-bold ">{experience.title}</h2>
              </div>
              <p className="text-lg mb-4">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <div className="space-y-6">
                  {experience.items.map((item, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-accent">{item.company}</h3>
                      <p className="text-sm text-gray-500">{item.position} - {item.duration}</p>
                      <ul className="list-disc pl-5 mt-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-sm text-gray-700">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* Education content */}
          <TabsContent value='education' className='w-full'>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image src={education.icon} alt="Education Icon" className="w-8 h-8" />
                <h2 className="text-2xl font-bold">{education.title}</h2>
              </div>
              <p className="text-lg mb-4">{education.Description}</p>
              <ScrollArea className="h-[400px]">
                <div className="space-y-6">
                  {education.items.map((item, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                      <h3 className="text-xl font-semibold">{item.institution}</h3>
                      <p className="text-sm text-gray-500">{item.degree} - {item.duration}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* Skills content */}

          <TabsContent value='skills' className='w-full'>
            <div>
              <h2 className="text-2xl font-bold mb-4">{skills.title}</h2>
              <p className="text-lg mb-6">{skills.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.sillList.map((skill, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger className="flex flex-col items-center">
                        <span className="text-3xl mb-2">{skill.icon}</span>
                        <span className="text-sm">{skill.name}</span>
                      </TooltipTrigger>
                      <TooltipContent>{skill.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* About Me content */}
          <TabsContent value='about' className='w-full'>
            <div>
              <h2 className="text-2xl font-bold mb-4">{about.title}</h2>
              <p className="text-lg mb-6">{about.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {about.info.map((info, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    <span className="font-semibold">{info.fieldName}:</span> {info.fieldValue}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>


  </motion.div>;
}
