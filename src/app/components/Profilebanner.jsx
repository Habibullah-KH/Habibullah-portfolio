
import React from 'react'
import './viralGrass.css'

export default function Profilebanner() {
  return (
    <>
    <div>
      <div className='relative profie-effect h-[20rem] w-[15rem] flex items-center justify-center group'>
        <div 
          className='w-full h-full border-2 border-[--clr-primary] bg-white/20 rounded-xl duration-500 rotate-3 group-hover:-rotate-6 pointer-events-none'
        >
        </div>
        <img
          className='
            h-full w-full object-cover rounded-xl absolute duration-500 z-10
            border-2 border-[--clr-primary] -rotate-3 group-hover:rotate-0
          '
          src='./profile.png'
          alt='Profile'
        />
      </div>
    </div>
    </>
  )
}
