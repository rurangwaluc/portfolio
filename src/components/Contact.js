import React from 'react';

// import contact data
import { contact } from '../data';


const Contact = () => {
 

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center mb-12'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
         
        </div>
        <div
          className=' grid lg:grid-cols-3 md:grid-cols-3 gap-8'
        >
         
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='contact-card flex  lg:flex-row gap-x-4 text-center' key={index}>
                  <div className='text-accent border-r-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Contact;
