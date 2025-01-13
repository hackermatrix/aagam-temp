import React from 'react';
import { Bed, Utensils, Mountain, ArrowRight, Heart, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import GetawayImage from '../assets/getaway_hero.jpg';

export default function AagamGetaway() {
  const amenities = [
    {
      icon: <Bed className="h-8 w-8 text-orange-600" />,
      title: "Luxury Accommodations",
      description: "Comfortable rooms with modern amenities specifically designed for senior citizens."
    },
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: "Fine Dining",
      description: "Meals tailored to meet the dietary needs of elderly residents."
    },
    {
      icon: <Mountain className="h-8 w-8 text-orange-600" />,
      title: "Recreational Activities",
      description: "Exciting and engaging activities to promote physical and mental well-being."
    }
  ];

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: "24/7 Care",
      description: "Round-the-clock medical supervision and assistance"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Regular Health Monitoring",
      description: "Continuous health checkups and vital monitoring"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Safety First",
      description: "Enhanced security measures for peace of mind"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                Aagam Getaway
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A platform designed to provide safe and comfortable senior living accommodations
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-colors flex items-center gap-2"
              >
                Book Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={GetawayImage} alt="Luxury Senior Living" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Introduction to Aagam Getaway
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Aagam Getaway represents a significant advancement in the field of senior living accommodations, 
              specifically designed to cater to the unique requirements of elderly individuals. This innovative platform 
              focuses on providing safe, comfortable, and age-appropriate living conditions that ensure a dignified lifestyle for senior citizens.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Understanding the emotional challenges families face when caring for aging parents, Aagam Getaway aims to alleviate concerns 
              about safety and comfort while away from home. It provides detailed information about each accommodation, ensuring peace of mind.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-orange-50 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Resort Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-orange-50 rounded-full mb-4">
                    {amenity.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            The Challenge of Senior Living for Foreign Workers
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                In recent years, a significant number of young Nepalis have sought employment abroad, driven by opportunities for better economic stability and career advancement. However, this trend has resulted in a pressing challenge regarding the care of their elderly parents who remain in Nepal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                One of the primary concerns for foreign workers is the emotional stress that arises from the distance. Many young individuals often grapple with guilt over their parents' solitude and the inability to provide immediate support.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Key Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-orange-100 rounded-full">
                      <Heart className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Emotional stress from distance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-orange-100 rounded-full">
                      <Clock className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Communication barriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-orange-100 rounded-full">
                      <Shield className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Lack of reliable support systems</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Phased Approach Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            A Phased Approach to Senior Living
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">Phase 1: Hotel Utilization</h3>
              <p className="text-gray-600 leading-relaxed">
                Currently operating through existing hotels, providing comfortable monthly fee-based accommodations for seniors. This initial phase allows us to serve immediate needs while gathering valuable insights.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">Phase 2: Dedicated Facilities</h3>
              <p className="text-gray-600 leading-relaxed">
                Future development of specialized senior living hotels under the Aagam Group, featuring tailored amenities and programming designed specifically for elderly residents.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
            {/* Health Monitoring Section */}
            <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Health Monitoring and Family Updates
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Aagam Getaway integrates health monitoring features that allow families to receive real-time updates about their elderly relatives' conditions, 
              promoting peace of mind and easing concerns for those working abroad.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
