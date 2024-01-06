import React from 'react';

// import skill data
import { experiences } from '../data';

const Experience = () => {
  return (
    <section className='experience bg-secondary'>
      <div className=' box-container '>
      
          {experiences.map((experience, index) => {
            const { company, time, title, description,list0, list1, list2, list3 } = experience;
            return (
              <div className='box' key={index}>
                  <i></i>
                  <span>{time}</span>
                <h4 className='text-xl font-medium mb-2 mt-12'>{title}</h4>
                  <em>{company}</em>
                {/* <p>{description}</p> */}
                <p>
                <ul className='list-disc text-left px-4'>
                <li>{list1}</li>
                <li>{list0}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                </ul>  
                </p>
                
              </div>
            );
          })}

      </div>
    </section>
  );
};

export default Experience;
