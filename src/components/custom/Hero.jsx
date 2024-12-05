import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center px-6 md:px-20 lg:px-36 gap-6 md:gap-10'>
      <h1 className='font-extrabold text-3xl md:text-4xl xl:text-6xl text-center mt-12 leading-tight lg:leading-snug'>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span> 
        Personalized Itineraries at Your Fingertips</h1>
      <p className='text-base md:text-lg lg:text-xl text-gray-600 text-center max-w-4xl'>Your personal trip planner and travel curator, creating custom Itineraries tailored to your interests and budget.</p>
      

      <Link to={'/create-trip'}>
        <Button className="px-8 py-4 text-sm md:text-lg lg:text-xl">Get Started, It&apos;s Free</Button>
      </Link>

      <div className="mt-10 w-full max-w-3xl lg:max-w-5xl">
        <img src='/landing.jpg' alt="Landing"
        className="w-full object-contain"/>
      </div>
    </div>
  )
}
export default Hero
