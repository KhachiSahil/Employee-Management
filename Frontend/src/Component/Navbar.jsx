import React from 'react';
import { useRecoilValue } from 'recoil';
import { isClient } from '../../recoil/atoms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const Client = useRecoilValue(isClient);
  async function buttonHandle() {
    if (Client === 'admin') {
        try {
            await axios.delete('http://localhost:3000/empmng/admin/logout',{
              withCredentials:true
            })
            navigate('/');
        } catch (err) {
            console.error('Logout error:', err);
        }
    } else {try{
      await axios.delete('http://localhost:3000/empmng/employee/logout',{
        withCredentials:true
      })
      navigate('/');
    }catch(err){
      console.error('Logout error:', err);
    }
    }
}

  return (
    <nav className="bg-gray-900 opacity-100 border-gray-600  fixed w-full top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../..//412511701_348579924584894_1996260569768132186_n.jpg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">Travel hanGins</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button"
          onClick={buttonHandle}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;