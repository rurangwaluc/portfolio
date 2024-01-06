import React from 'react';
// import Experiences from './Experiences';

// import CV
import CV from '../assets/CV.pdf';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
         
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              
            <p className='mb-4 text-accent'>
              I' m a Passionate 
              </p>
             
              <h2 className='text-2xl before:content-about relative 
              before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
               HTML Email Developer
              </h2>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              There's no better feeling than developing something to solve a problem.
               That's why I love email, the number of limitations around this ancient marketing tool, 
               makes me go the extra mile, research, and develop new ways to push the boundaries of email.
              </p>
              <p className='mb-8'>
              I am very pro-active and have developed many personal projects in my spare time.
              </p>
            </div>
           
            <button className='btns'>
            <a href={CV} target="_blank">Download CV</a>
             </button>
           
           
          </div>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
                        
              <h2 className='mt-10 text-2xl'>
              Skills & Technologies
              </h2>
              <hr className='mb-8 opacity-5' />
              <p className='mb-2'>
              Self-taught Developer who loves challenges, working hard, I care about writing clean code and genuinely love to learn.
              </p>
              <ul className='list-disc text-left p-4'>
              <li> HTML5, CSS3, SASS, Bootstrap </li>
              <li>JavaScript, React, jQuery </li>
              <li>CMS: WordPress, Elementor</li>
              <li>Salesforce Marketing Cloud</li>
              <li>Git, Email On Acid, Netlify</li>
              </ul>
            </div>
           
           
          </div>
          
        </div>
      </div>
      <div className="mt-5">

      {/* <Experiences /> */}
      </div>
    </section>
  );
};

export default About;
