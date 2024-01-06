import React from 'react';
import CV from '../assets/Rurangwa-CV.pdf';

const Hero = () => {
  return (
    <section
      id='home'
      className='home_hero lg:h-[100vh] sms flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto items-center h-full hero_container'>
        <div className='flex items-center h-full pt-8'>
          <div className='hero_text flex-1 flex flex-col items-center lg:items-center'>
              <p className="lg:text-left text-white ">Hi, My name is</p>
            <h1 className=' text-4xl leading-[44px] md:text-5xl md:leading-tight text-center lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            Jean Luc Rurangwa
 
            </h1>
            <p className='pt-4 pb-2 md:pt-2 md:pb-2 text-white md:text-2xl text-center lg:text-left'>
           An HTML Email Developer
            </p>
            <button className='btns'>
            <a href={CV} target="_blank">Work Experience</a>
             </button>
        
          </div>
         
        </div>
   
      </div>
     
    </section>
  );
};

export default Hero;
