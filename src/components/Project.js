import React from 'react';

const Project = ({ item }) => {
  return (
   <a href={item.url} target="_blank">
     <div key={item.id} className='box flex flex-col items-center text-center'>
  
       <img  src={item.image} alt='' />

      <div className="content">
      <p className='capitalize text-accent text-sm'>{item.category}</p>
      <h3>{item.name}</h3>

      </div>
      </div>
   </a>
  );
};

export default Project;
