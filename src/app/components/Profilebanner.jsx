
import React from 'react'
import './viralGrass.css'

export default function Profilebanner() {
  return (
    <>
      <div className='relative profie-effect h-[15rem] w-[15rem] flex items-center justify-center rounded-xl'>
      <div className='w-full h-full  rounded-xl'></div>
        <img
          className='h-full w-full object-cover rounded-xl absolute'
          src='./profile.png'
          alt='Profile'
        />
      </div>
    </>
  )
}
