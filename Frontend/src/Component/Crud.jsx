import React from 'react';
import SignUp from '../SmallComponent/CRUD/Signup';

function Crud({ sidebarOpen }) {
  return (
    <div className={`relative flex flex-col top-16 bg-gray-100 z-10 justify-center items-center h-screen p-0 bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
        <img src="/emplog.gif" alt="Sahil GIF" className="cursor-pointer absolute brightness-25 opacity-50  inset-0 -z-10 w-full h-full object-cover" />
      <SignUp />
    </div>
  );
}

export default Crud;
