import React from 'react';
import { Heart, Users, Gift, Star, Globe, BookOpen, Flame, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import OmHero from "../assets/om_hero.jpg"

export default function OmSubhamangal() {
  const services = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Community Support",
      description: "Supporting local communities through various initiatives"
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Education Programs",
      description: "Providing educational opportunities to underprivileged children"
    },
    {
      icon: <Gift className="h-8 w-8 text-red-600" />,
      title: "Charitable Activities",
      description: "Organizing charitable events and donation drives"
    }
  ];

  const priestServices = [
    {
      icon: <Globe className="h-8 w-8 text-red-600" />,
      title: "Global Accessibility",
      description: "Connect with authentic priests from Nepal and USA"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      title: "Traditional Rituals",
      description: "Expert guidance in graha shanti and rudrabhishek"
    },
    {
      icon: <Flame className="h-8 w-8 text-red-600" />,
      title: "Live Ceremonies",
      description: "Participate in sacred rituals from anywhere in the world"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 bg-gradient-to-br from-red-50 via-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                Om Subhamangal
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering communities through social initiatives and spiritual connections
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors flex items-center gap-2"
              >
                Join Our Cause
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <motion.div 
              className="flex-1 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={OmHero} alt="Om" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Priest Booking Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-red-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Why Choose Our Priest Booking Services?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            In today's fast-paced world, we bridge the gap between tradition and modern life, bringing authentic spiritual services to you wherever you are.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {priestServices.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-red-50 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Live Pooja Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Live Pooja Ceremonies: Connecting with Tradition
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              For those living abroad, maintaining cultural and spiritual ties can be difficult. Our live pooja ceremonies 
              offered from Nepal enable you to participate in your rituals from anywhere in the world. With our expert priests, 
              you can witness and partake in ancient traditions that foster peace and harmony.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Our Community Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-red-50 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 