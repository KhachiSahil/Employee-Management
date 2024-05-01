import React from 'react';
import Card from '../SmallComponent/Employee/Card';
import { useRecoilValue } from 'recoil';
import { userDataAtom } from '../../recoil/atoms';

function Employee({ sidebarOpen }) {
  const userData = useRecoilValue(userDataAtom);
  const employees = userData && userData.employees; // Ensure userData exists and has employees

  return (
    <div className={`flex flex-col mt-16 top-0 bg-gray-100 justify-center items-center h-screen p-0 bg-white dark:bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
      {employees && employees.map((employee) => (
        <Card key={employee._id} name={employee.username} entries={employee.entries} success={employee.success} />
      ))}
    </div>
  );
}

export default Employee;
