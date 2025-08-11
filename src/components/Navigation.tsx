import React from 'react'
import { NavLink } from 'react-router-dom'
import { Heart, MessageCircle, Search, User, Home } from 'lucide-react'

export default function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/discover', icon: Search, label: 'Discover' },
    { to: '/matches', icon: Heart, label: 'Matches' },
    { to: '/chat', icon: MessageCircle, label: 'Chat' },
    { to: '/profile', icon: User, label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-primary bg-red-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }
          >
            <Icon size={24} />
            <span className="text-xs font-medium mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}