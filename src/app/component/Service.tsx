import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Service() {
  return (
    <div className=' bg-[#121212] pt-[2rem] md:pt-[4rem] pb-[5rem] ' id='service'>
        <p className='heading'>My 
        <span className='text-yellow-400'>Services</span></p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white h-full'>
  <div data-aos="fade-right" className='bg-red-700 hover:scale-110 transform-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] h-full'>
    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>frontend</h1>
    <p className='text-[15px] text-[#d3d2d2]'>I{"'"}m an experienced Front-end developer specializing in creating 
      attractive and interactive user interfaces. Using the latest technologies like HTML5, CSS3, 
      and JavaScript, I excel in frameworks such as React.js and Next JS. My focus is on delivering smooth and intuitive user experiences,
      prioritizing performance, accessibility, and cross-platform compatibility.</p>
  </div>
  <div data-aos="fade-up" className='bg-blue-700 hover:scale-110 transform-all uppercase font-semibold text-center p-[2rem] h-full'>
    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
    <p className='text-[15px] text-[#d3d2d2]'>As a skilled Back-end developer, I build robust services and APIs
      to power web applications. Proficient in languages like PHP, JavaScript, and Node.js, I{"'"}mwell-versed
      in popular frameworks such as Laravel, Express. My expertise lies in designing databases and implementing complex business logic, 
      ensuring high-performing and secure Back-end solutions.</p>
  </div>
  <div data-aos="fade-left" className='bg-yellow-700 hover:scale-110 transform-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] h-full'>
    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>fullstack</h1>
    <p className='text-[15px] text-[#d3d2d2]'>
    I{"'"}m a versatile Full-stack developer with the ability to handle both Front-end and Back-end development.
      I can design appealing user interfaces while implementing server-side logic. 
      With in-depth knowledge of Front-end technologies like HTML, CSS, and JavaScript, 
      coupled with Back-end skills in Python, PHP, and Node.js,
      I create comprehensive and integrated web applications, delivering a seamless user experience
    </p>
  </div>
</div>
    </div>
  )
}

export default Service