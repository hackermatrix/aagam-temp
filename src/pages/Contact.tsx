import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-white pt-16">
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto px-4"
          >
            <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Contact Us
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                >
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Head Office</h3>
                    <p className="text-gray-600">
                    125 Western Ave,<br/>  
                    Boston,  <br/>
                    MA 02164<br/>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                >
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1-617-642-6799</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                >
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@aagamagroup.com</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
                        transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
                        transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
                        transition-colors outline-none resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 
                      transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}