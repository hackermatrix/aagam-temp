import React from 'react';
import { Lightbulb, Code, Brain, Rocket, ArrowRight, Beaker, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import AagamInnovationLabImage from '../assets/innovation_hero.jpg';

export default function AagamInnovationLab() {
  const innovations = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions"
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: "Software Development",
      description: "Custom software solutions for complex business challenges"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Future Tech",
      description: "Research and development in emerging technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Aagam Innovation Lab
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Pioneering technological solutions that shape the future of industries
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors flex items-center gap-2"
              >
                Discover Innovations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={AagamInnovationLabImage} alt="Innovation Lab" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 text-center leading-relaxed">
            At Aagam Innovation Lab, our mission is clear: to cultivate an environment where inventive ideas can flourish. We are dedicated to aiding startups, researchers, and organizations in their quest for groundbreaking advancements. By employing cutting-edge technology and expert knowledge, our team works collaboratively to turn visionary concepts into reality.
          </p>
        </motion.div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Key Areas of Focus
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center mb-12"
          >
            The lab primarily engages in a multitude of research domains, including artificial intelligence, sustainable technology, and digital transformation.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {['Artificial Intelligence', 'Sustainable Technology', 'Digital Transformation'].map((area, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  {index === 0 && <Brain className="h-12 w-12 text-purple-600 mb-4" />}
                  {index === 1 && <Beaker className="h-12 w-12 text-purple-600 mb-4" />}
                  {index === 2 && <Cpu className="h-12 w-12 text-purple-600 mb-4" />}
                  <h3 className="text-xl font-semibold text-center mb-4">{area}</h3>
                  <p className="text-gray-600 text-center">
                    {index === 0 && "Revolutionizing industries with intelligent systems and predictive analytics."}
                    {index === 1 && "Pioneering eco-friendly solutions that balance innovation and environmental stewardship."}
                    {index === 2 && "Empowering businesses and communities through digitalization for a connected future."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Innovations Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Research Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-purple-50 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Latest Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Analytics",
                description: "Advanced analytics platform using machine learning for predictive insights",
                icon: <Brain className="h-8 w-8 text-purple-600" />
              },
              {
                title: "IoT Solutions",
                description: "Smart device integration for industrial automation and monitoring",
                icon: <Cpu className="h-8 w-8 text-purple-600" />
              }
            ].map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-purple-50 rounded-full w-fit mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
