import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 gap-6 md:gap-8 lg:gap-10">
      <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl text-center mt-8 sm:mt-12 leading-tight lg:leading-snug">
        <span className="text-[#f56551]">Discover Your Next Adventure with AI: </span>
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      <Link to={'/create-trip'}>
        <Button className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl">
          Get Started, It&apos;s Free
        </Button>
      </Link>

      <div className="mt-8 sm:mt-10 w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <img 
          src="/landing.jpg" 
          alt="Landing" 
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Hero;