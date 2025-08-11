import React, { useState } from 'react'
import { Heart, X, MapPin, Globe, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const profiles = [
  {
    id: 1,
    name: 'Sofia',
    age: 26,
    country: 'Brazil',
    city: 'São Paulo',
    interests: ['Travel', 'Photography', 'Dancing'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    distance: '8,547 km away',
    compatibility: 92,
  },
  {
    id: 2,
    name: 'Yuki',
    age: 24,
    country: 'Japan',
    city: 'Tokyo',
    interests: ['Art', 'Cooking', 'Hiking'],
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
    distance: '10,934 km away',
    compatibility: 87,
  },
  {
    id: 3,
    name: 'Isabella',
    age: 28,
    country: 'Italy',
    city: 'Rome',
    interests: ['Music', 'Food', 'History'],
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=800',
    distance: '7,234 km away',
    compatibility: 94,
  },
]

export default function Discover() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)

  const handleSwipe = (swipeDirection: 'left' | 'right') => {
    setDirection(swipeDirection)
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1)
      setDirection(null)
    }, 300)
  }

  const currentProfile = profiles[currentIndex]

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover</h1>
          <p className="text-gray-600">Find your global connection</p>
        </div>

        {/* Card Stack */}
        <div className="relative h-[600px] mb-8">
          <AnimatePresence mode="wait">
            {currentProfile ? (
              <motion.div
                key={currentProfile.id}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
                  rotate: direction === 'left' ? -30 : direction === 'right' ? 30 : 0
                }}
                exit={{ 
                  scale: 0.95, 
                  opacity: 0,
                  x: direction === 'left' ? -300 : 300,
                  rotate: direction === 'left' ? -30 : 30
                }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) handleSwipe('right')
                  else if (info.offset.x < -100) handleSwipe('left')
                }}
              >
                <div className="relative h-full">
                  <img
                    src={currentProfile.image}
                    alt={currentProfile.name}
                    className="w-full h-2/3 object-cover"
                  />
                  
                  {/* Compatibility Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles size={14} />
                    <span className="text-sm font-semibold">{currentProfile.compatibility}% Match</span>
                  </div>

                  {/* Profile Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                      {currentProfile.name}, {currentProfile.age}
                    </h2>
                    
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={16} />
                      <span>{currentProfile.city}, {currentProfile.country}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Globe size={16} />
                      <span className="text-gray-300">{currentProfile.distance}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentProfile.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-white rounded-3xl shadow-2xl">
                <div className="text-center">
                  <Sparkles size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No more profiles</h3>
                  <p className="text-gray-600">Check back later for new connections!</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8">
          <button
            onClick={() => handleSwipe('left')}
            className="w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            disabled={!currentProfile}
          >
            <X size={24} />
          </button>
          
          <button
            onClick={() => handleSwipe('right')}
            className="w-16 h-16 bg-primary hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            disabled={!currentProfile}
          >
            <Heart size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}