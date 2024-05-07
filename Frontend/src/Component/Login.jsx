import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isClient,employeeSide } from '../../recoil/atoms';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setIsClient = useSetRecoilState(isClient);
  const setEmployeSide = useSetRecoilState(employeeSide);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUserName = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-custom animate-custom-shadow">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={async (event) => {
              event.preventDefault();
              if (role === 'admin') {
                setIsClient('admin')
                try {
                  const response = await axios.post('http://localhost:3000/empmng/admin/login', {
                    username,
                    password
                  },{
                    withCredentials:true
                  })
                  console.log(response.data)
                  navigate('/dashboard')
                } catch (err) {
                  console.log(err)
                }
              }
              if(role=='employee'){
                setIsClient('employee')
                try {
                  const response = await axios.post('http://localhost:3000/empmng/employee/login', {
                    username,
                    password
                  },{
                    withCredentials:true
                  })
                  setEmployeSide(response)
                  navigate('/employee')
                } catch (err) {
                  console.log(err)
                }
              }
            }}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                <input type="username" name="username" id="username" onChange={handleUserName} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" onChange={handlePassword} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className="flex items-center justify-evenly">
                <div className="flex items-start">
                  <div className="flex justify-between items-center h-5">
                    <input
                      id="admin"
                      aria-describedby="admin"
                      type="radio"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      value="admin"
                      checked={role === 'admin'}
                      onChange={handleRoleChange}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="admin" className="text-gray-500 dark:text-gray-300">Admin</label>
                  </div>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="employee"
                    aria-describedby="employee"
                    type="radio"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    value="employee"
                    checked={role === 'employee'}
                    onChange={handleRoleChange}
                  />
                  <div className="ml-3 text-sm">
                    <label htmlFor="employee" className="text-gray-500 dark:text-gray-300">Employee</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
