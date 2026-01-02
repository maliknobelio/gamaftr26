import React from "react";
import Image from "next/image";
import { H1, H2, H3, H4, H5, H6, H7, B1, B2, B3, B4, B5 } from "@/components/elements/typography";
import heroKiri from "../public/hero-bg-kiri.png";
import heroKanan from "../public/hero-bg-kanan.png";
// Importing the new mobile images
import heroKiriMobile from "../public/hero-bg-kiri-mobile.svg"; 
import heroKananMobile from "../public/hero-bg-kanan-mobile.svg";
import heroHeader from "../public/hero-header.png";
import Countdown from "./countdown";

const Hero = () => {
  return (
    <div className="hero-section relative overflow-hidden bg-linear-to-b from-glacier-400 to-white">
        
        {/* Background Container */}
        <div className="hero-background absolute h-full w-full pointer-events-none">
            {/* DESKTOP IMAGES: Hidden on mobile (block md:hidden is false, hidden md:block is true) */}
            <Image 
                src={heroKiri} 
                alt="Background Left" 
                className="hidden md:block absolute left-0 z-10"
            />
            <Image 
                src={heroKanan} 
                alt="Background Right" 
                className="hidden md:block absolute right-0 z-10"
            />

            {/* MOBILE IMAGES: Visible on mobile, Hidden on Desktop (md:hidden) */}
            <Image 
                src={heroKiriMobile} 
                alt="Background Mobile Top" 
                className="block md:hidden absolute left-0 bottom-0 z-10"
            />
            <Image 
                src={heroKananMobile} 
                alt="Background Mobile Bottom" 
                className="block md:hidden absolute right-0 bottom-0 z-10"
            />
        </div>

        {/* Content Container */}
        <div className="hero-content relative h-screen md:h-200 flex flex-col justify-center items-center z-100 px-4">
            
            {/* CHANGE 1: Increased margin bottom for mobile.
                Changed 'mb-8' to 'mb-20' to create more space between header and countdowns.
            */}
            <div className="hero-header flex flex-col justify-center items-center mb-20 mx-10 md:mb-12">
                <Image 
                    src={heroHeader} 
                    alt="Hero Header" 
                    className="object-contain w-full max-w-190 h-auto md:h-40"
                /> 
                <H5 className="text-center mt-4 md:mt-0">Revealing the Path, Lighting the Way Towards Brighter Futures</H5>
            </div>

            {/* CHANGE 2: Decreased gap for mobile.
                Changed 'gap-8' to 'gap-3' so the countdowns are closer to each other.
            */}
            <div className="hero-countdown relative flex flex-col md:flex-row gap-3 md:gap-0">
                <div className="countdown-opening-ceremony justify-center items-center mx-0 md:mx-2">
                    <H5 className="text-center text-white drop-shadow-[0_1.6px_0_rgba(0,0,0,1)] [-webkit-text-stroke:0.4px_#000000]">Opening Ceremony</H5>
                    <Countdown targetDate={"2026-01-04T06:00:00"}></Countdown>
                </div>
                <div className="countdown-bedah-kampus justify-center items-center mx-0 md:mx-2">
                    <H5 className="text-center text-white drop-shadow-[0_1.6px_0_rgba(0,0,0,1)] [-webkit-text-stroke:0.4px_#000000]">Bedah Kampus</H5>
                    <Countdown targetDate={"2026-01-25T09:00:00"}></Countdown>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Hero;