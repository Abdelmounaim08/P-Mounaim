import React from 'react'
interface Props{
    title:string,
    year:string,

}

function SklisItems({title,year}:Props) {
  return (
    <div className='mb-[4rem] md:mb-[8rem] '>
        <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>{year}</span>
    <h1 className='mt-[2rem] font-semibold uppercase  mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white  '>
        {title}
    </h1>
    <p className=' text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestias eaque aliquid nihil eum repellendus dolor suscipit sapiente, culpa nisi accusantium eos sit ratione! Illo nihil aut inventore neque autem.</p>

    </div>
  )
}

export default SklisItems