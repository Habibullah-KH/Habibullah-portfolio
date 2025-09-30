"use client";

import { useState } from "react";
import ImageCard from "./ImageCard";

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
    <div className="rounded-lg h-72 mb-4 relative">
      <img className="object-cover object-top rounded-lg w-full h-full" src={images[currentIndex]}/>

      <div className="absolute w-full top-1/2">
      <div className="flex justify-between text-black">
        <button onClick={()=>handleBacwordClick()}>after</button>
        <button onClick={()=>handleForwordClick()}>before</button>
      </div>
      </div>
    </div>

        <div
         className="flex gap-2 overflow-x-auto">
      {images?.map((image, idx) => (
        <div
        className={`
        hover:border-3 hover:border-red-500 rounded-lg border-2 border-transparent duration-300
        ${idx === currentIndex ? 'border-3 border-red-500 rounded-lg':' border-2 border-transparent'}
        `}
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
