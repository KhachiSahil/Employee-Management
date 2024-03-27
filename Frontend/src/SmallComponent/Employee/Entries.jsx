import React from 'react';

function Entries() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 md:px-8 lg:px-16 xl:px-16 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8 xl:space-x-16 my-9">
      <div className="text-white font-black flex items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16 bg-gray-700 shadow-md">S</div>
      <div className="text-gray-700 font-black dark:text-gray-300">Sahil</div>
      <div>
      <label className="text-gray-700 dark:text-gray-300" >Entries</label>  
      <input className="text-black-700 dark:text-black-300 mx-2  w-8" type="number" defaultValue={10} />
      </div>
      <div>
      <label className="text-gray-700 dark:text-gray-300" >Success</label>  
      <input className="text-black-700 dark:text-black-300 mx-2  w-8" type="number" defaultValue={10} />
      </div>
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Message</button>
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>  
    </div>
  );
}


export default Entries;
