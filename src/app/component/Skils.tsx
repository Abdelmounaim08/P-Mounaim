import React from 'react'
import SklisItems from './SklisItems'
import SkilsLangaue from './SkilsLangaue'

function Skils() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] '>

      <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SklisItems title='React Developer' year='2022-2024' text="As a trained React developer, I possess the necessary skills and experience to build dynamic and responsive user interfaces. Proficiency in JavaScript and React.js allows me to create reusable components and effectively manage state using tools like Redux or Context API. Through my training and project work, I have gained a solid understanding of React's core principles and industry best practices, enabling me to develop scalable and efficient web applications."/>
          <SklisItems title='Next JS Developer' year='2023-2024' text="I am a skilled Next.js developer experienced in building high-performance web applications. With Next.js, I create lightning-fast websites with seamless user experiences."/>
          <SklisItems title='Laravel Developer' year='2023-2024' text="As a trained Laravel developer, I have acquired comprehensive skills and hands-on experience in building robust web applications. Proficient in PHP and Laravel, I specialize in utilizing the framework's expressive syntax and extensive feature set to create scalable and maintainable projects. With a solid understanding of Laravel's MVC architecture, I can efficiently develop applications while adhering to industry best practices."/>
          <SkilsLangaue skill1='html css'
           skill2='javascript TS' 
           skill3='laravel'
           level1='w-[91%]'
            level2='w-[88%]'
             level3='w-[78%]'/>
        </div>
        <div>
         
          
          <SklisItems title='Node JS Developer' year='2022-2024' text="As a skilled Node.js developer, I have expertise in building backend applications using the Node.js runtime environment. With Node.js, I can develop scalable and efficient web applications, leveraging its non-blocking, event-driven architecture. From API development to server-side rendering, I utilize Node.js to create robust applications that handle high volumes of traffic and deliver optimal performance."/>
          <SklisItems title='Remix TS Developer' year='2024' text="As an experienced Remix developer, I specialize in building powerful and scalable web applications. Remix is a server-rendered React framework that enables me to create dynamic and interactive user interfaces. Leveraging Remix's features like server-side rendering, code splitting, and data fetching, I deliver performant applications that provide an exceptional user experience"/>
          <SklisItems title='shpify Developer' year='2024' text="As an experienced Shopify developer, 
          I specialize in building customized e-commerce solutions on the Shopify platform. With a deep understanding of Shopify's Liquid templating language and APIs, I can create visually appealing and fully functional online stores. Whether it's designing custom themes, integrating payment gateways, I leverage Shopify's features to deliver seamless shopping experiences for clients."/>
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