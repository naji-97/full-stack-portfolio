"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MoblieNav = () => {
    const pathName = usePathname();
  return (
    <div>
          <Sheet>
              <SheetTrigger asChild className='flex items-center justify-center '>
                  <CiMenuFries className='text-accent text-[32px]'/>
              </SheetTrigger>
              <SheetContent className=' flex flex-col gap-4'>
                {/* LOGO */}
                  <div className='mt-32 mb-40 text-center text-2xl'>
                        <Link href="/" >
                          <h1 className='text-4xl font-semibold'> Naji<span className='text-accent'>.</span>
                          </h1>
                        </Link>
                  </div>
                {/* NAV LINKS */}
                 <div>
                        <nav className='flex flex-col items-center gap-8'>
                            {links.map((link, index) => (
                                <Link href={link.path} key={index} className={`text-2xl capitalize hover:text-accent transition-all ${link.path === pathName && "text-accent border-b-2 border-accent"} `}>
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                 </div>
              </SheetContent>
          </Sheet>
    </div>
  )
}

export default MoblieNav
