import { TypeAnimation } from 'react-type-animation';

export const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'web developer',
        1500,
        'full stack',
        1500,
        'Programmer',
        1500
      ]}
   
      speed={50}
      className='text-[2rem] md;text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};