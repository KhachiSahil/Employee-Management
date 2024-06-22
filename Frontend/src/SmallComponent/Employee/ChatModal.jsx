import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XIcon } from '@heroicons/react/solid'; // You can use any icon library you prefer

const ChatModal = ({ isOpen, onClose, sender, recipient }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/empmng/message/', {
        params: { participant1: sender, participant2: recipient }
      });
      setMessages(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching messages');
    }
  };

  const sendMessage = async () => {
    try {
      await axios.post('http://localhost:3000/empmng/message/', {
        sender,
        recipient,
        message: newMessage
      });
      setNewMessage('');
      fetchMessages();
      setError('');
    } catch (error) {
      setError('Error sending message');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Chat with {recipient}</h2>
            <button onClick={onClose}>
              <XIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
          </div>
          <div className="max-h-80 overflow-y-scroll">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 p-2 rounded-md ${msg.sender === sender ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                <strong>{msg.sender}</strong>: {msg.message}
              </div>
            ))}
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-2 border rounded-md"
          />
          <button onClick={sendMessage} className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    )
  );
};

export default ChatModal;
