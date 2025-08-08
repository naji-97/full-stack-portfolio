'use client';
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stairs from './Stairs';

function StairTransition() {
    const pathname = usePathname()
  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}>
            <div className='h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex'>
            <Stairs/>
            </div>
            <motion.div
            className='h-screen w-screen bg-primary fixed top-0 left-0 pointer-events-none z-30'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease:"easeInOut" } }}
            />
        </div>
      
    </AnimatePresence>
  )
}

export default StairTransition
