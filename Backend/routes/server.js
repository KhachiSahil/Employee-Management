const express = require('express');
const msgRoute = express.Router();
const { Chat, Messages } = require('../models/db');

msgRoute.get('/', async (req, res) => {
  const { participant1, participant2 } = req.query;

  try {
    const chat = await Chat.findOne({
      participants: { $all: [participant1, participant2] }
    });

    if (!chat) {
      return res.status(200).json([]); 
    }

    res.status(200).json(chat.messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

msgRoute.post('/', async (req, res) => {
  const { sender, recipient, message } = req.body;

  if (!recipient) {
    return res.status(400).json({ error: 'Recipient is required' });
  }

  try {
    let chat = await Chat.findOne({
      participants: { $all: [sender, recipient] }
    });

    if (!chat) {
      chat = new Chat({ participants: [sender, recipient], messages: [] });
    }

    const newMessage = { sender, recipient, message, timestamp: new Date() };
    chat.messages.push(newMessage);

    await chat.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = {msgRoute};
