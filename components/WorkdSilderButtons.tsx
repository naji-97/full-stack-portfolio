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
  return (
    <div className={containerStyles}>
      <button
        className={btnSyles}
        title="Previous Slide"
        aria-label="Previous Slide"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnSyles}
        title="Next Slide"
        aria-label="Next Slide"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold  className={iconsStyles} />
      </button>
    </div>
  )
}

export default WorkdSilderButtons
