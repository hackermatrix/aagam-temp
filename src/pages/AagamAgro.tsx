import React from 'react';
import { Sprout, Leaf, Sun, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import AagamAgroImage from '../assets/agro_hero.jpg';

export default function AagamAgro() {   
  const features = [
    {
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      title: "Direct Farmer Connection",
      description: "Connect directly with farmers, eliminating middlemen and ensuring fair prices."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Quality Produce",
      description: "Access to fresh, high-quality agricultural products."
    },
    {
      icon: <Sun className="h-8 w-8 text-green-600" />,
      title: "Sustainable Practices",
      description: "Promoting environmentally conscious farming methods."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                Aagam Agro
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bridging the gap between farmers and buyers through innovative digital solutions.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors flex items-center gap-2"
              >
                Explore Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={AagamAgroImage} alt="Agriculture" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Introduction to Aagam Agro</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aagam Agro emerges as a transformative platform dedicated to empowering farmers by enhancing their access to markets. Recognizing the challenges faced by agricultural producers in connecting with buyers, Aagam Agro serves as an innovative solution aimed at bridging these gaps. By leveraging technology, this application facilitates interactions among various stakeholders in the agricultural ecosystem, fostering a more efficient marketplace.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Platform Features
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-green-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Connecting Farmers to Markets: How It Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Aagam Agro operates on a revolutionary model designed to connect farmers directly with buyers, streamlining transactions and enhancing market access. Initially, the platform used a village-to-village delivery model with bicycles for transporting goods. This grassroots approach ensured even remote producers could engage with markets.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The app includes an intuitive interface for listing produce, logistics management for timely deliveries, and seamless payment transactions, ensuring transparency and empowering farmers.
          </p>
        </motion.div>
      </section>

      {/* Seasonal Migrant Workers Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Supporting Seasonal Migrant Workers</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aagam Agro provides a comprehensive solution for seasonal migrant workers, streamlining remittances and enabling access to essential goods. Workers can send funds home instantly and ensure their families receive timely financial support and groceries. This dual benefit creates a supportive environment, empowering both workers and their communities.
          </p>
        </div>
      </section>

      {/* Future Prospects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Future Prospects</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aagam Agro’s potential for growth includes advanced data analytics, enhanced logistics, and tailored advisory services to boost farmer productivity. By fostering cooperative synergies among farmers and embedding principles of equity and sustainability, Aagam Agro aims to uplift local communities and ensure long-term socio-economic benefits for the agricultural sector.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
