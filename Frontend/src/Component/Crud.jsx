import React from 'react'
import SignUp from '../SmallComponent/CRUD/Signup'

function Crud({sidebarOpen}) {
  return (
    <div className={`flex flex-col  top-16 bg-gray-100 justify-center items-center h-screen p-0 bg-white dark:bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
      <SignUp />
    </div>
  )
}

export default Crud
