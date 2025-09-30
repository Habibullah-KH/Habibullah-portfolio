"use client";

import { useState } from "react";
import ImageCard from "./ImageCard";

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function ImageSlider({images}) {
const [currentIndex, setCurrentIndex] = useState(0);

  
  function handleImageClick(index){
   setCurrentIndex(index)
  }

  function handleForwordClick(){
  setCurrentIndex((prev) => (prev + 1) % images.length);
  }
  
  function handleBacwordClick(){
  setCurrentIndex((prev) => prev === 0 ? images.length -1 : prev - 1);
  }

  return (
    <>
    <div className="py-4">
    <div className="rounded-lg h-[27rem] mb-4 relative group">
      <img className="object-cover object-top rounded-lg w-full h-full" src={images[currentIndex]}/>

      <div className="absolute w-full top-1/2">
      <div className="hidden justify-between duration-1000 text-xl p-2 group-hover:flex">
        <button
        className="p-2 rounded-full bg-black/55 "
         onClick={()=>handleBacwordClick()}><FiChevronLeft /></button>

        <button
        className="p-2 rounded-full bg-black/55 "
         onClick={()=>handleForwordClick()}><FiChevronRight /></button>
      </div>
      </div>
    </div>

        <div
         className="flex gap-2 overflow-x-auto">
      {images?.map((image, idx) => (
        <div
        className={`
        hover:border-3 hover:border-red-500 rounded-lg border-2 border-transparent duration-300
        ${idx === currentIndex ? 'border-3 border-red-500 rounded-lg':' border-2 border-transparent'}`}
        onClick={() => handleImageClick(idx)}
        >
        <ImageCard img={image} idx={idx}/>
        </div>
      ))}
        </div>
    </div>

    </>
  );
}
