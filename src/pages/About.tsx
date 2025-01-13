import React, { useState } from 'react';
import { Users, MapPin, Lightbulb, Shield, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import KumarDangi from "../assets/team_images/kumar_singh_dangi.jpg"
import RajendraSalve from "../assets/team_images/rajendra_salve.jpeg"
import SamruddhiSalve from "../assets/team_images/samruddhi_salve.jpg"
import PrachiSalve from "../assets/team_images/prachi_salve.jpg"
import GajendraThapaliya from "../assets/team_images/gajendra_thapaliya.jpg"
import SulochanaDhakal from "../assets/team_images/sulochana_dhakal.jpg"
import KumarPrasadOjha from "../assets/team_images/kumar_prasad_ojha.jpg"
import ShikshyaThapaliya from "../assets/team_images/shikshya_thapaliya.jpg"


const teams = {
  india: [
    {
      name: "Samruddhi Salve",
      designation: "Co-founder & CEO",
      image: SamruddhiSalve
    },
    {
      name: "Prachi Salve",
      designation: "Co-founder & CTO",
      image: PrachiSalve
    },
    {
      name: "Rajendra Salve",
      designation: "Co-founder & COO",
      image: RajendraSalve
    },

    {
      name: "Kumar Singh Dangi",
      designation: "Co-founder",
      image: KumarDangi
    }
  ],

  
  nepal: [
    {
      name: "Kumar Singh Dangi",
      designation: "Co-founder & CEO",
      image: KumarDangi
    },
    {
      name: "Gajendra Thapaliya",
      designation: "Co-founder & COO",
      image: GajendraThapaliya
    },
    {
      name: "Sulochana Dhakal",
      designation: " Co-founder & CFO ",
      image: SulochanaDhakal
    },
    {
      name: "Kumar Prasad Ojha",
      designation: "Co-founder & Public Relations",
      image: KumarPrasadOjha
    },
    {
      name: "Shikshya Thapaliya",
      designation: "Co-founder & VP Innovation ",
      image: ShikshyaThapaliya
    }
  ],
  USA: [
    {
      name: "Kumar Singh Dangi",
      designation: "Co-founder & CEO",
      image: KumarDangi
    },

    {
      name: "Prachi Salve",
      designation: "Co-founder & CTO",
      image: PrachiSalve
    },
    {
      name: "Rajendra Salve",
      designation: "Co-founder & COO",
      image: RajendraSalve
    },
    {
      name: "Samruddhi Salve",
      designation: "Co-founder",
      image: SamruddhiSalve
    },
    
  ]
};

export default function About() {
  const [activeRegion, setActiveRegion] = useState('india');

  const philosophyItems = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "We believe in pushing boundaries and embracing new technologies to create solutions that shape the future."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Integrity",
      description: "Trust and transparency are at the core of everything we do, ensuring lasting relationships with our stakeholders."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for excellence in every endeavor, maintaining the highest standards across all our operations."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="max-w-6xl mx-auto px-4 py-20 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 pb-8">
                About Aagam Group
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building a better future through innovation, integrity, and excellence across India, Nepal, and the USA.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Philosophy Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Our Philosophy
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {philosophyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-blue-50 rounded-full w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Our Leadership Teams
            </motion.h2>
            
            {/* Region Selection */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {['india', 'nepal', 'USA'].map((region) => (
                <motion.button
                  key={region}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveRegion(region)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activeRegion === region
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Aagam {region.charAt(0).toUpperCase() + region.slice(1)}
                </motion.button>
              ))}
            </motion.div>

            {/* Team Members Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teams[activeRegion].map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.designation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}