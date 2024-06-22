import React from 'react';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { employeeSide } from '../../../recoil/atoms';
import axios from 'axios';
import ChatModal from './ChatModal'; // Ensure to import the ChatModal component

function Entries() {
  const userData = useRecoilValue(employeeSide);
  const data = userData && userData.data;

  const [enquiries, setEnquiries] = useState(data ? data.enquiries : 0);
  const [success, setSuccess] = useState(data ? data.success : 0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatModal = () => {
    setIsChatOpen(!isChatOpen);
  };

  async function handleChange() {
    try {
      const response = await axios.post('http://localhost:3000/empmng/employee/submit', {
        success,
        enquiries
      }, {
        withCredentials: true
      });
      alert("Submitted successfully");
    } catch (error) {
      alert("Failed to submit");
    }
  }

  if (!data) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-gray-800 z-10 shadow-md rounded-md p-4 md:px-8 lg:px-16 xl:px-16 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8 xl:space-x-16 my-9">
      <div className="text-white font-black flex items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16 bg-gray-700 shadow-md">{data.username[0].toUpperCase()}</div>
      <div className="font-black text-gray-300">{data.username}</div>
      <div>
        <label className="text-gray-300">Entries</label>
        <input className="text-black-300 mx-2 w-10" type="number" onChange={(event) => {
          setEnquiries(event.target.value);
        }} defaultValue={data.enquiries} />
      </div>
      <div>
        <label className="text-gray-300">Success</label>
        <input className="text-black-700 mx-2 w-10" type="number" onChange={(event) => {
          setSuccess(event.target.value);
        }} defaultValue={data.success} />
      </div>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={toggleChatModal}
      >
        Message
      </button>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleChange}
      >
        Submit
      </button>
      {isChatOpen && <ChatModal isOpen={isChatOpen} onClose={toggleChatModal} sender={data.username} recipient="Admin" />}

    </div>
  );
}

export default Entries;
