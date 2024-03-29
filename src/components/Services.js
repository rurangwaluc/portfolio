import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            What I do 
          </h2>
        
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-secondary p-9  borderHover' key={index}>
                <div className='text-accent rounded-sm w-12 h-10 flex justify-center items-center mb-6 text-[28px] text-center'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
