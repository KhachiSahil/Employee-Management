import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Card({ name, entries, success }) {
  const navigate = useNavigate(); 
  async function buttonHandler() {
    try {
      const response = await axios.delete('http://localhost:3000/empmng/admin/deleteuser', {
        data: { name },
        withCredentials: true
      });
      console.log(response.data);
      alert("Success, user deleted")
      navigate('/dashboard');
    } catch (err) {
      alert("Error, user not deleted")
    }
  }

  return (
    <div className="bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out shadow-md rounded-md p-4 md:px-8 lg:px-16 xl:px-16 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8 xl:space-x-16 my-9">
      <div className="hidden md:flex text-white items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16 bg-gray-700 shadow-md">{name[0].toUpperCase()}</div>
      <div className="font-black text-gray-300">{name}</div>
      <div className="text-gray-300">Entries: {entries}</div>
      <div className="text-gray-300">Success: {success}</div>
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Message</button>
      <button onClick={buttonHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white hover:scale-125 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
        </svg>
      </button>
    </div>
  );
}

export default Card;
