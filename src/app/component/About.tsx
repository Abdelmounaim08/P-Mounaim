import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'
//bg-[#121130]
const About = () => {
  return (
    <div className='  pb-[3rem] bg-[#17284d] pt[4rem] md:pt[8rem]'>
       <div className='  grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
       <div className=' mt-11'>
        <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'> ABOUT ME</h1>
       <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] loading-[2rem] capitalize mb-[3rem] font-bold text-white '>
        TransForming <span className='text-[25px] text-yellow-400'>Visions</span>
       </h2>
       <div className='mb-[3rem] flex items-center md:space-x-10'>
       <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm '></span>
       <p className='text-[19px] flex text-slate-300 w-[110%]'>As a junior full-stack developer, I bring a comprehensive
        range of skills to the table, including HTML, CSS, JavaScript, Python, PHP, and frameworks like React and Laravel.
         With a solid foundation in front-end technologies, 
          
          </p></div>
       <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5]
 text-black flex items-center space-x-2'>
  <p> Download CV</p>
  <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black  '/>
  </button>

       </div>
       <div className='lg:w-[500px]  mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
       <Image src='/image/profile.png'
     alt='user' layout='fill' objectFit='contain'
     className='  relative z-[11] pt-10 mt-10 bg-white  w-[60%] h-[60%] object-contain'/>

       </div>
       
        </div> 
    </div>
  )
}

export default About