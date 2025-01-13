import React from 'react';
import { Beaker, Trees, TestTube, ArrowRight, Leaf, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ResearchCenterImage from '../assets/agro_research_hero.jpg';

export default function AagamAgroResearchCenter() {
  const researchAreas = [
    {
      icon: <Trees className="h-8 w-8 text-emerald-600" />,
      title: "Crop Development",
      description: "Research on high-yield, disease-resistant crop varieties"
    },
    {
      icon: <Beaker className="h-8 w-8 text-emerald-600" />,
      title: "Soil Analysis",
      description: "Advanced soil testing and improvement techniques"
    },
    {
      icon: <TestTube className="h-8 w-8 text-emerald-600" />,
      title: "Bio-Technology",
      description: "Innovative biotechnology solutions for agriculture"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 bg-gradient-to-br from-emerald-50 via-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
                Aagam Agro Research Center
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Advancing sustainable farming practices and improving crop yields in Nepal
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors flex items-center gap-2"
              >
                Explore Research
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={ResearchCenterImage} alt="Research Center" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
            About Aagam Agro Research Center
          </h2>
          <p className="text-xl text-gray-600 text-center leading-relaxed">
            Aagam Agro Research Center is dedicated to advancing sustainable farming practices and improving crop yields in Nepal. This center plays a pivotal role in research and development, focusing on methods that support both environmental stewardship and agricultural productivity. By addressing local agricultural challenges, the center seeks to provide innovative solutions tailored to the needs of Nepalese farmers.
          </p>
        </motion.div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
            Research Initiatives
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center mb-12"
          >
            The core mission of Aagam Agro Research Center is to enhance agricultural sustainability through various research initiatives. These initiatives explore different aspects of farming, from soil health and pest management to advanced irrigation techniques.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-emerald-50 rounded-full mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
            Impact on Local Farming Communities
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-xl shadow-md"
            >
              <Leaf className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Sustainable Practices</h3>
              <p className="text-gray-600">
                Promoting organic farming methods and efficient resource management techniques that benefit both farmers and the environment.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-xl shadow-md"
            >
              <Sprout className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Community Development</h3>
              <p className="text-gray-600">
                Empowering local farming communities through education, training, and access to modern agricultural technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
