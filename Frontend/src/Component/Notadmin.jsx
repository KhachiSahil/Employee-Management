import React from 'react'
import Navbar from './Navbar'
import Entries from '../SmallComponent/Employee/Entries'

function Notadmin() {
  return (
    <div className="flex flex-col  top-16 bg-gray-100 justify-center items-center h-screen p-0 bg-white dark:bg-gray-600">
      <Navbar/>
      <Entries/>
    </div>
  )
}

export default Notadmin
