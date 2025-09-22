"use client"
import React from 'react'
import Banner from '../Banner/Banner'
import "./heroSection.css"
import { useTheme } from '../Theme/useTheme'
import Profilebanner from '../Profilebanner'

export default function HeroSection() {
  const {darkMode} = useTheme();
  return (
    <>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#07f49e] to-[#42047e] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[90rem]"
          />
        </div>

      <div

        className={`flex mx-auto items-center justify-center -z-10 ${darkMode === "enabled" ? "bg_graph_black" : "bg_graph_white"}`}
      >
        {/* <Profilebanner/> */}
        <Banner/>
      </div>
    </>
  )
}
