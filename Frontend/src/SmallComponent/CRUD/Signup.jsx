import React from 'react';
import {useState} from 'react';
import axios from 'axios';


function SignUp() {
  const [username,setuserName] = useState('');
  const [password,setPassword] = useState('');

  function handlepass(e){
    setPassword(e.target.value)
  }

  function handleuser(e){
    setuserName(e.target.value)
  }

  return (
    <section className='overflow-y-hidden' >
      <div className="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={async (event)=>{
                event.preventDefault();
                try{
                    const response =  await axios.put('http://localhost:3000/empmng/admin/create',{
                      username,
                      password
                    },{
                      withCredentials:true
                    })
                    alert("Success, user created")
                }catch(err){
                  alert("Error, user not created")
                }

            }}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Your username</label>
                <input type="username" name="username" id="username" onChange={handleuser} className=" sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                <input type="password" name="password" id="password" onChange={handlepass} placeholder="••••••••" className=" sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
