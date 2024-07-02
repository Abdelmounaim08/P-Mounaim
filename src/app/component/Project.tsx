import React from 'react'
import Image from 'next/image'
function Project() {
  return (
    
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]' id='PROJECT'>
<h1 className='heading'>
    Proj<span className='text-yellow-700 '>ects</span>
    </h1>
    <div>
    <h3 className='text-white rounded-md mx uppercase text-center italic text-[1rem]'>Restaurant Manager </h3>
    <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
    <a href="https://github.com/Abdelmounaim08/restaurant-" className='transform cursor-pointer  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         
    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
      <Image src='/image/p1White.jpeg' alt='portfolio' layout='fill' className='object-contain'/> 
      
    </div></a>
    <a href="https://github.com/Abdelmounaim08/restaurant-" className='transform cursor-pointer  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
    
     <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
        <Image src='/image/p1PopUp.jpeg' alt='portfolio' layout='fill' className='object-contain'/>
    </div>
    </a>
    <a href="https://github.com/Abdelmounaim08/restaurant-" className='transform cursor-pointer  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
    
    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
        <Image src='/image/commande.jpeg' alt='portfolio' layout='fill' className='object-contain'/>
    </div>
   </a>
   
    </div>
    </div>
    <div>
    <h3 className='text-white rounded-md mx uppercase text-center italic text-[1rem]'>private school </h3>
    <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
    <a href="https://ecolealjabr.com/" className='transform cursor-pointer  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         
    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
      <Image src='/image/aljaber.png' alt='portfolio' layout='fill' className='object-contain'/> 
      
    </div></a>
    <a href="https://ecolealjabr.com/" className='transform cursor-pointer  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
    
     <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
        <Image src='/image/aljaberEcole.png' alt='portfolio' layout='fill' className='object-contain'/>
    </div>
    </a>
    <a href="https://ecolealjabr.com/" className='transform cursor-pointer  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
    
    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
        <Image src='/image/aljaberDSh.png' alt='portfolio' layout='fill' className='object-contain'/>
    </div>
   </a>
   
    </div>
    </div>
  
    
    </div>
    
    
  )
}

export default Project