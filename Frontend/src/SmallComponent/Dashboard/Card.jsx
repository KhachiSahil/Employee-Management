import React from 'react';
import CountUp from "react-countup";

function Card({ title,value }) {
  return (
    <div className='my-9 overflow-hidden opacity-85 block shadow-custom animate-custom-shadow w-full md:max-w-sm p-9 text-white bg-gray-700 border border-gray-200 rounded-lg hover:opacity-100 hover:text-gray-900 hover:scale-105 transition-all duration-300 ease-in-out'>
      <div className="flex items-center justify-between mb-2 mx-9">
        <h5 className='text-2xl font-bold tracking-tight'>{title}</h5>
        <div className="counter-container bg-slate-700 border rounded-full px-2">
          <CountUp
            duration={10}
            className="counter font-normal text-4xl" // Tailwind classes for font size
            end={value}
            separator=","
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
