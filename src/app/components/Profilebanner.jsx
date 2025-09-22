
import React from 'react'
import './viralGrass.css'

export default function Profilebanner() {
  return (
    <>
    <div>
      <div className='relative profie-effect h-[20rem] w-[15rem] flex items-center justify-center'>


      <div 
      className='w-full h-full border-2 border-[--clr-primary]
      bg-white/20 rounded-xl rotate-3
      
      '>
        
      </div>

        <img
          className='
          h-full w-full object-cover rounded-xl absolute duration-500
          border-2 border-[--clr-primary] -rotate-3 hover:rotate-0
          '
          src='./profile.png'
          alt='Profile'
        />
      </div>
    </div>
    </>
  )
}
