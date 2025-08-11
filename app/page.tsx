'use client';
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials"
import {FiDownload} from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
export default function Home() {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* Description */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">
                Naji Ali
                <span className="block text-sm text-white/60">
                  (Legal name: Abdennaji Elbair)
                </span>
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            {/* Btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant={"outline"} size={"lg"} className="flex justify-between gap-2">
              <span>Download Cv</span>
              <FiDownload/>
            </Button>
            {/* Socials */}
            <div className="mb-8 xl:mb-0 order-1 xl:order-none">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:trasition-all duration-500" />
            </div>
            </div>
          </div>


        {/*Profile image  */}
          <div> <Photo/> </div>
      </div>
      </div>
      <Stats/>
      
    </section>
  );
}
