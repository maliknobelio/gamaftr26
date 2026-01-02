'use client'

import React, { useState, useEffect } from 'react';
import { H1, H2, H3, H4, H5, H6, H7, B1, B2, B3, B4, B5 } from "@/components/elements/typography";

// Indonesian Labels
const timeLabelsID = {
  days: 'Hari',
  hours: 'Jam',
  minutes: 'Menit',
};

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  }
  return timeLeft;
};

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timer);
        setIsFinished(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const timerKeys = Object.keys(timeLeft);

  return (
    <div className="flex items-center justify-center p-4 bg-transparent">
      
      {/* 2. THE UNIFIED GLASS PANEL */}
      <div className={`
        relative z-10 
        /* Layout - CHANGED: Removed flex-col/md:flex-row. It is now always row. */
        flex flex-row items-center justify-center gap-5
        p-9 pb-4 rounded-3xl
        /* Glass Effect */
        backdrop-blur-md bg-white/5 shadow-2xl
        /* Green Border */
        border-3 border-green-700
      `}>
        
        {isFinished ? (
          <span className="text-l md:text-l font-bold uppercase tracking-widest">
            Waktu Habis!
          </span>
        ) : timerKeys.length > 0 ? (
          timerKeys.map((interval, index) => (
            <div key={interval} className="flex text-center justify-center items-center">
              
              {/* Number and Label Group */}
              <div className="flex flex-col justify-center items-center">
                <span className="
                  font-light
                  text-center
                  text-4xl
                  tracking-tighter
                  drop-shadow-lg
                ">
                  <H5 className="-mt-5 p-0">{timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}</H5>
                </span>
                <span className="font-bold text-center uppercase tracking-widest text-xl mt-2 mb-3">
                  {timeLabelsID[interval]}
                </span>
              </div>

              {/* Colon Separator - CHANGED: Removed 'hidden md:block'. It is now always visible. */}
              {index < timerKeys.length - 1 && (
                <span className="text-green-800 text-4xl font-bold pb-6 ml-5">
                  :
                </span>
              )}
            </div>
          ))
        ) : (
          <span className="animate-pulse text-m">Memuat...</span>
        )}
      </div>
    </div>
  );
};

export default Countdown;