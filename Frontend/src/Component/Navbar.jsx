import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-300 border-gray-600 dark:bg-gray-900 fixed w-full top-0 z-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://travelhangouts.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../..//412511701_348579924584894_1996260569768132186_n.jpg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Travel hangouts</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;