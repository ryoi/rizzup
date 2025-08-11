import React from 'react'
import { Heart, MessageCircle, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const matches = [
  {
    id: 1,
    name: 'Elena',
    age: 25,
    country: 'Spain',
    city: 'Barcelona',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    matchedAt: '2 hours ago',
    compatibility: 89,
    hasMessage: true,
  },
  {
    id: 2,
    name: 'Chen Wei',
    age: 27,
    country: 'China',
    city: 'Shanghai',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
    matchedAt: '1 day ago',
    compatibility: 91,
    hasMessage: false,
  },
  {
    id: 3,
    name: 'Amélie',
    age: 29,
    country: 'France',
    city: 'Paris',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800',
    matchedAt: '3 days ago',
    compatibility: 85,
    hasMessage: true,
  },
  {
    id: 4,
    name: 'Priya',
    age: 26,
    country: 'India',
    city: 'Mumbai',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    matchedAt: '1 week ago',
    compatibility: 88,
    hasMessage: false,
  },
]

export default function Matches() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Matches</h1>
          <p className="text-gray-600">{matches.length} global connections</p>
        </div>

        {/* Matches List */}
        <div className="space-y-4 mb-8">
          {matches.map((match, index) => (
            <motion.div
              key={match.id}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={match.image}
                    alt={match.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {match.hasMessage && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {match.name}, {match.age}
                    </h3>
                    <div className="flex items-center gap-1 bg-red-50 text-primary px-2 py-1 rounded-full">
                      <Heart size={12} />
                      <span className="text-sm font-semibold">{match.compatibility}%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <MapPin size={14} />
                    <span className="text-sm">{match.city}, {match.country}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={14} />
                    <span className="text-sm">Matched {match.matchedAt}</span>
                  </div>
                </div>

                <button className="p-3 rounded-full hover:bg-gray-50 transition-colors">
                  <MessageCircle 
                    size={24} 
                    className={match.hasMessage ? 'text-primary' : 'text-gray-400'} 
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Your Activity</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-gray-600">Total Matches</div>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-2xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">89%</div>
              <div className="text-sm text-gray-600">Avg. Match</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}