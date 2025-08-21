import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Heart, MessageCircle, Sparkles, Users, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: 'Global Connections',
      description: 'Meet singles from around the world who want to date locals',
      color: 'text-primary',
    },
    {
      icon: MessageCircle,
      title: 'Smart Translation',
      description: 'Communicate seamlessly with automatic translation',
      color: 'text-secondary',
    },
    {
      icon: Shield,
      title: 'True Desires Matching',
      description: 'Private compatibility profile for precise matching',
      color: 'text-accent',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Matches',
      description: 'Advanced algorithm considers both public and private preferences',
      color: 'text-warning',
    },
  ]

  const stats = [
    { icon: Users, number: '50K+', label: 'Active Users', color: 'text-primary' },
    { icon: Globe, number: '180+', label: 'Countries', color: 'text-secondary' },
    { icon: Heart, number: '15K+', label: 'Success Stories', color: 'text-accent' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div 
          className="relative z-10 text-center text-white px-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart size={48} className="text-primary" />
            <h1 className="text-5xl font-bold">Rizz</h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Find Love Across Borders
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Connect with singles worldwide who share your passion for cross-cultural romance
          </p>
          
          <Link
            to="/discover"
            className="inline-flex items-center gap-3 bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Start Your Journey
            <Sparkles size={24} />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Rizz?
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 p-8 bg-gray-50 rounded-2xl card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-3 rounded-xl bg-white shadow-md ${feature.color}`}>
                  <feature.icon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Global Community
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gray-50 mb-4 ${stat.color}`}>
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}