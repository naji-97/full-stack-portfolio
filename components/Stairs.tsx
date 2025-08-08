import React from 'react'
import { motion } from 'framer-motion';
const reverseIndex= (index: number)=> {
    const totalSteps = 6; // Total number of steps
    return totalSteps - index - 1; // Reverse the index
}
function Stairs() {
    // Variant
    const stairsAnimation = {
        initial: { top:"0%",

        },
        animate: { top:"100%" },
        exit: { top:["100%", "0%"] },
    }
  return (
    <>
      {/* render 6 motion divs, each one representing a step of the stairs.
      Each div will have the same animation defined by the StairsAnimation object.
      the delay for each div is calculated dynamically based on it's reserved index,
      creating a staggered effect with decreasing the delay for each subsquent step */}
    {
        Array.from({ length: 6 }, (_, index) => (
          <motion.div
            key={index}
            className={`w-full h-full bg-white relative left-0 z-10`}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              delay: reverseIndex(index) * 0.1, // Decrease delay for each step
              ease: "easeInOut",
            }}
          />
        ))
    }
    </>
  )
}

export default Stairs
