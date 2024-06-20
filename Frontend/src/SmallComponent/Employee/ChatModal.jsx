// ChatModal.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const ChatModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, { text: msg, sender: 'Other' }]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'You' }]);
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-80 max-h-full flex flex-col">
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-lg font-semibold">Chat</h2>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`text-sm ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
                <span className="font-semibold">{msg.sender}: </span>{msg.text}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
          <input 
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white px-3 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
