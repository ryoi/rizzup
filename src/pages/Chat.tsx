import React, { useState } from 'react'
import { Send, Languages, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const conversations = [
  {
    id: 1,
    user: {
      name: 'Elena',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      country: 'Spain',
    },
    lastMessage: 'Hola! Me encanta viajar también ✈️',
    lastMessageTranslated: 'Hello! I love traveling too ✈️',
    timestamp: '5 min ago',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    user: {
      name: 'Chen Wei',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      country: 'China',
    },
    lastMessage: '你好！很高兴认识你',
    lastMessageTranslated: 'Hello! Nice to meet you',
    timestamp: '2 hours ago',
    unread: 0,
    online: false,
  },
  {
    id: 3,
    user: {
      name: 'Amélie',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800',
      country: 'France',
    },
    lastMessage: 'Bonjour! Comment allez-vous?',
    lastMessageTranslated: 'Hello! How are you?',
    timestamp: '1 day ago',
    unread: 1,
    online: true,
  },
]

const messages = [
  {
    id: 1,
    text: 'Hola! ¿Cómo estás?',
    translated: 'Hello! How are you?',
    sender: 'other',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    text: 'Hi Elena! I\'m doing great, thanks for asking!',
    translated: '¡Hola Elena! ¡Estoy muy bien, gracias por preguntar!',
    sender: 'me',
    timestamp: '10:32 AM',
  },
  {
    id: 3,
    text: 'Me alegra escuchar eso. ¿Te gusta viajar?',
    translated: 'I\'m glad to hear that. Do you like to travel?',
    sender: 'other',
    timestamp: '10:35 AM',
  },
]

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [message, setMessage] = useState('')
  const [showTranslation, setShowTranslation] = useState(true)

  if (selectedChat) {
    const currentUser = conversations.find(c => c.id === selectedChat)?.user

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-4">
          <button
            onClick={() => setSelectedChat(null)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="relative">
            <img
              src={currentUser?.image}
              alt={currentUser?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
          </div>
          
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900">{currentUser?.name}</h2>
            <p className="text-sm text-gray-600">{currentUser?.country}</p>
          </div>

          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`p-2 rounded-full transition-colors ${
              showTranslation ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Languages size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                msg.sender === 'me'
                  ? 'bg-primary text-white rounded-br-md'
                  : 'bg-white text-gray-900 rounded-bl-md shadow-sm'
              }`}>
                <p className="text-sm">{msg.text}</p>
                {showTranslation && msg.sender === 'other' && (
                  <p className="text-xs mt-1 opacity-75 italic">{msg.translated}</p>
                )}
                <p className={`text-xs mt-1 ${
                  msg.sender === 'me' ? 'text-red-100' : 'text-gray-500'
                }`}>
                  {msg.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="p-2 bg-primary text-white rounded-full hover:bg-red-600 transition-colors">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Connect across languages</p>
        </div>

        {/* Conversations List */}
        <div className="space-y-4 mb-8">
          {conversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              className="bg-white rounded-2xl p-4 shadow-lg card-hover cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setSelectedChat(conversation.id)}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={conversation.user.image}
                    alt={conversation.user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{conversation.user.name}</h3>
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {showTranslation ? conversation.lastMessageTranslated : conversation.lastMessage}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {conversation.user.country}
                    </span>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Translation Toggle */}
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold transition-colors ${
            showTranslation
              ? 'bg-secondary text-white'
              : 'bg-white text-gray-700 border border-gray-200'
          }`}
        >
          <Languages size={20} />
          {showTranslation ? 'Hide Translations' : 'Show Translations'}
        </button>
      </div>
    </div>
  )
}