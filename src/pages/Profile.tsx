import React, { useState } from 'react'
import { Settings, Edit, Globe, Heart, EyeOff, Shield, Languages, MapPin, Camera } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Profile() {
  const [showSecretProfile, setShowSecretProfile] = useState(false)
  const [autoTranslate, setAutoTranslate] = useState(true)
  const [showDistance, setShowDistance] = useState(true)

  const publicProfile = {
    name: 'Alexander',
    age: 28,
    location: 'San Francisco, USA',
    photos: [
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    languages: ['English', 'Spanish'],
    lookingFor: 'Serious relationship',
    bio: 'Love exploring new cultures and meeting people from around the world. Always up for an adventure!',
    interests: ['Travel', 'Photography', 'Cooking', 'Hiking'],
  }

  const secretProfile = {
    trueLookingFor: 'Casual dating, open to long-term',
    trueInterests: ['Nightlife', 'Adventure sports', 'Art galleries'],
    personalityTraits: ['Introverted', 'Creative', 'Ambitious'],
    dealBreakers: ['Smoking', 'No travel interest'],
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Profile Photos */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative mb-4">
            <img
              src={publicProfile.photos[0]}
              alt="Profile"
              className="w-full h-80 object-cover rounded-xl"
            />
            <button className="absolute bottom-3 right-3 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
              <Camera size={20} />
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto">
            {publicProfile.photos.slice(1).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Profile ${index + 2}`}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
            ))}
            <button className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-gray-400 transition-colors flex-shrink-0">
              <Camera size={20} />
            </button>
          </div>
        </motion.div>

        {/* Basic Info */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Basic Information</h2>
            <button className="text-primary hover:text-red-600 transition-colors">
              <Edit size={20} />
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {publicProfile.name}, {publicProfile.age}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-gray-600" />
              <span className="text-gray-700">{publicProfile.location}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{publicProfile.bio}</p>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {publicProfile.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-red-50 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Languages</h2>
          <div className="flex gap-3">
            {publicProfile.languages.map((language, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-purple-50 text-secondary px-3 py-2 rounded-full"
              >
                <Languages size={14} />
                <span className="text-sm font-medium">{language}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Secret Profile */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <EyeOff size={20} className="text-secondary" />
              <h2 className="text-xl font-bold text-secondary">True Desires Profile</h2>
              <Shield size={16} className="text-accent" />
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showSecretProfile}
                onChange={(e) => setShowSecretProfile(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            Your private profile helps us find better matches based on your authentic preferences. Only used for matching algorithm.
          </p>

          {showSecretProfile && (
            <motion.div
              className="bg-purple-50 border-2 border-purple-100 rounded-xl p-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h4 className="font-semibold text-secondary mb-2">Actually Looking For</h4>
                <p className="text-gray-700">{secretProfile.trueLookingFor}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-secondary mb-2">Hidden Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {secretProfile.trueInterests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-secondary mb-2">Personality Traits</h4>
                <div className="flex flex-wrap gap-2">
                  {secretProfile.personalityTraits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-purple-100 text-secondary py-3 rounded-lg font-medium hover:bg-purple-200 transition-colors">
                <Edit size={16} />
                Edit True Profile
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Settings */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Preferences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Languages size={20} className="text-gray-600" />
                <span className="text-gray-700">Auto-translate messages</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoTranslate}
                  onChange={(e) => setAutoTranslate(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-gray-600" />
                <span className="text-gray-700">Show distance</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showDistance}
                  onChange={(e) => setShowDistance(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Activity</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">127</div>
              <div className="text-sm text-gray-600">Profile Views</div>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-2xl font-bold text-primary mb-1">23</div>
              <div className="text-sm text-gray-600">Likes Sent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-gray-600">Matches</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}