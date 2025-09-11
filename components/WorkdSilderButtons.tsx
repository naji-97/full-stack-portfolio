import React from 'react'
import {useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold  } from "react-icons/pi";

interface Props {
    containerStyles: string;
    btnSyles: string;
    iconsStyles: string;
}
const WorkdSilderButtons = ({ containerStyles, btnSyles, iconsStyles }: Props) => {
    const swiper = useSwiper();
    const handlePrevSlide = (swiper: any) => {
        // You can access the current slide index using swiper.activeIndex
        console.log('Current slide index:', swiper.activeIndex);
        if(swiper.activeIndex === 0){
            swiper.slideTo(swiper.slides.length - 1); // Go to the last slide
        } else {
            swiper.slidePrev(); // Go to the previous slide
        }

    }
    const handleNextSlide = (swiper: any) => {
        // You can access the current slide index using swiper.activeIndex
        console.log('Current slide index:', swiper.activeIndex);
        if(swiper.activeIndex === swiper.slides.length - 1){
            swiper.slideTo(0); // Go to the first slide
        } else {
            swiper.slideNext(); // Go to the next slide
        }
    }
  return (
    <div className={containerStyles}>
      <button
        className={btnSyles}
        title="Previous Slide"
        aria-label="Previous Slide"
        onClick={ () => handlePrevSlide(swiper)}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnSyles}
        title="Next Slide"
        aria-label="Next Slide"
        onClick={() => handleNextSlide(swiper)}
      >
        <PiCaretRightBold  className={iconsStyles} />
      </button>
    </div>
  )
}

export default WorkdSilderButtons
