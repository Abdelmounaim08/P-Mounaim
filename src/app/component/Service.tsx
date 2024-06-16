import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Service() {
  return (
    <div className=' bg-[#121212] pt-[2rem] md:pt-[4rem] pb-[5rem] ' id='service'>
        <p className='heading'>My 
        <span className='text-yellow-400'>Services</span></p>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white' >
            <div className='bg-red-700 hover:scale-110 transform-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>frontend</h1>
               <p className=' text-[15px] text-[#d3d2d2]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis inventore velit aut qui reprehenderit. Illo incidunt architecto a mollitia, praesentium sunt amet exercitationem error dolores aut. Blanditiis, id aliquid. Expedita.</p>
                </div>
                <div className='bg-blue-700  hover:scale-110 transform-all  uppercase font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
               <p className=' text-[15px] text-[#d3d2d2]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis inventore velit aut qui reprehenderit. Illo incidunt architecto a mollitia, praesentium sunt amet exercitationem error dolores aut. Blanditiis, id aliquid. Expedita.</p>
                </div>
                <div className='bg-yellow-700 hover:scale-110 transform-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>fullstack</h1>
               <p className=' text-[15px] text-[#d3d2d2]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis inventore velit aut qui reprehenderit. Illo incidunt architecto a mollitia, praesentium sunt amet exercitationem error dolores aut. Blanditiis, id aliquid. Expedita.</p>
                </div>

        </div>
    </div>
  )
}

export default Service