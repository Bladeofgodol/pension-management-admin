'use client';

import { MoreHoriz, Phone, Send } from '@mui/icons-material';
import { Avatar, IconButton, TextField } from '@mui/material';
import { useState } from 'react';

export default function CustomerServicePage() {
  const [message, setMessage] = useState('');

  const complaints = [
    {
      id: 1,
      employee: 'Abobe Yelma',
      reportDate: 'March 6, 2025',
      anonymity: 'Unanimous',
      isActive: true,
    },
    {
      id: 2,
      employee: 'Alvin Assefa',
      reportDate: 'April 8, 2025',
      anonymity: 'Non-unanimous',
      isActive: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'system',
      content: 'Complaint on : Org 1\nAnonymity: Unanimous',
      time: '10:11',
    },
    {
      id: 2,
      sender: 'Abobe Yelma',
      content:
        'I am writing to formally report an issue regarding the handling of my pension contributions by my employer.',
      time: '10:11',
    },
    {
      id: 3,
      sender: 'agent',
      content: 'Your complaint was correct and contribution was mishandled',
      time: '10:11',
    },
    {
      id: 4,
      sender: 'Abobe Yelma',
      content: 'Great! 😊',
      time: '10:11',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add logic to send message
      setMessage('');
    }
  };

  return (
    <div className="flex h-full bg-gray-50">
      {/* Main content area */}
      <div className="flex flex-1">
        {/* Complaints section */}
        <div className="w-full border-r border-gray-200 bg-white">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-medium">Complaints</h1>
          </div>

          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-gray-500 text-sm">
                <tr>
                  <th className="py-3 px-6 text-left font-normal">Employee</th>
                  <th className="py-3 px-6 text-left font-normal">
                    Report Date
                  </th>
                  <th className="py-3 px-6 text-left font-normal">Anonymity</th>
                  <th className="py-3 px-6 text-left font-normal"></th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr
                    key={complaint.id}
                    className={`border-t border-gray-100 hover:bg-gray-50 ${
                      complaint.isActive ? 'bg-blue-50' : ''
                    }`}
                  >
                    <td className="py-4 px-6 text-sm">{complaint.employee}</td>
                    <td className="py-4 px-6 text-sm">
                      {complaint.reportDate}
                    </td>
                    <td className="py-4 px-6 text-sm">{complaint.anonymity}</td>
                    <td className="py-4 px-6 text-sm">
                      <button className="bg-teal-700 text-white text-xs py-1 px-3 rounded">
                        Conversation
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Message section */}
        <div className="w-[55%] flex flex-col bg-gray-100">
          <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <div className="flex items-center">
              <h2 className="text-xl font-medium ml-2">Message</h2>
            </div>
            <IconButton>
              <MoreHoriz />
            </IconButton>
          </div>

          <div className="flex items-center p-4 bg-white border-b border-gray-200">
            <Avatar
              src="/placeholder.svg?height=40&width=40"
              alt="Abobe Yelma"
            />
            <div className="ml-3">
              <p className="font-medium">Abobe Yelma</p>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <span className="bg-teal-700 text-white text-xs py-1 px-3 rounded">
                Resolved
              </span>
              <IconButton className="text-gray-600">
                <Phone />
              </IconButton>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div key={msg.id} className="mb-4">
                {msg.sender === 'system' ? (
                  <div className="bg-white rounded-lg p-3 max-w-[80%] mx-auto shadow-sm">
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                  </div>
                ) : msg.sender === 'agent' ? (
                  <div className="flex justify-end">
                    <div className="bg-teal-700 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">{msg.content}</p>
                      <div className="flex justify-end items-center mt-1">
                        <p className="text-xs text-teal-100">{msg.time}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex">
                    <Avatar
                      src="/placeholder.svg?height=32&width=32"
                      alt={msg.sender}
                      className="h-8 w-8 mr-2"
                    />
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center bg-gray-100 rounded-lg px-3">
              <TextField
                fullWidth
                variant="standard"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
                className="py-2"
              />
              <IconButton
                color="primary"
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <Send />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
