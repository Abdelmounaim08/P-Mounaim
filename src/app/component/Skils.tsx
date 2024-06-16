import React from 'react'
import SklisItems from './SklisItems'
import SkilsLangaue from './SkilsLangaue'

function Skils() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] '>

      <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SklisItems title='React Developer' year='2022-2024'/>
          <SklisItems title='Next JS Developer' year='2023-2024'/>
          <SklisItems title='Laravel Developer' year='2023-2024'/>
          <SkilsLangaue skill1='html css'
           skill2='javascript TS' 
           skill3='laravel'
           level1='w-[91%]'
            level2='w-[88%]'
             level3='w-[78%]'/>
        </div>
        <div>
         
          
          <SklisItems title='Node JS Developer' year='2022-2024'/>
          <SklisItems title='Remix TS Developer' year='2024'/>
          <SklisItems title='shpify Developer' year='2024'/>
          <SkilsLangaue skill1='REACT'
           skill2='larvel' 
           skill3='NEXT JS'
           level1='w-[88%]'
            level2='w-[78%]'
             level3='w-[68%]'/>
        </div>
      
      </div>
    </div>
  )
}

export default Skils