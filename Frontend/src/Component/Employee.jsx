import React, { useState, useEffect } from 'react';
import Card from '../SmallComponent/Employee/Card';
import { useRecoilValue } from 'recoil';
import { userDataAtom } from '../../recoil/atoms';

function Employee({ sidebarOpen }) {
  console.log("navber")
  const userData = useRecoilValue(userDataAtom);
  const employees = userData && userData.employees;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Update itemsPerPage based on screen size
    const updateItemsPerPage = () => {
      const isSmallScreen = window.innerWidth <= 640;
      setItemsPerPage(isSmallScreen ? 3 : 5);
    };

    // Initial setup
    updateItemsPerPage();
    const resizeListener = window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  useEffect(() => {
    // Calculate total pages whenever employees change
    const totalPages = Math.ceil((employees?.length || 0) / itemsPerPage);
    setTotalPages(totalPages);
  }, [employees, itemsPerPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, employees?.length || 0);
  const visibleEmployees = employees?.slice(startIndex, endIndex) || [];

  return (
    <>
      <div className="relative">
      <img src="/emplog.gif" alt="Sahil GIF" className="cursor-pointer absolute brightness-25 opacity-50  inset-0 z-0 w-full h-full object-cover" />
        <div className={`flex flex-col mt-16 md:mt-0 top-0 bg-gray-600 justify-center items-center h-screen py-16 bg-white dark:bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64 z-10'}`} >
          <div className={'max-w-4xl opacity-90 w-full mx-auto px-4 md:mt-16'}>
            {visibleEmployees.map((employee) => (
              <Card key={employee._id} name={employee.username} entries={employee.entries} success={employee.success} />
            ))}
          </div>
          <div className="flex justify-center mt-4 z-10">
            <button className="bg-blue-500 hover:bg-blue-700 opacity-100 text-white font-bold py-2 px-4 rounded-l" disabled={currentPage === 1} onClick={handlePrevPage}>Previous</button>
            <span className="mx-2 text-lg font-semibold">{currentPage} / {totalPages}</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" disabled={currentPage === totalPages} onClick={handleNextPage}>Next</button>
          </div>
        </div>
      </div>
    </>
  );  
}

export default Employee;
