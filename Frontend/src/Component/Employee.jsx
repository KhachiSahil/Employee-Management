import React from 'react'
import Card from '../SmallComponent/Employee/Card'

function Employee({ sidebarOpen }) {
  return (
    <div className={`flex flex-col mt-16 top-16 bg-gray-100 justify-center items-center h-max p-0 bg-white dark:bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Employee
