import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import AagamConsultingImage from '../assets/consult_hero.jpg';

export default function AagamConsulting() {
  const services = [
    "Web Development",
    "Digital Marketing",
    "Business Growth Strategy",
    "HR Solutions",
    "Market Research",
    "Business Consulting"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Aagam Consulting
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert solutions in web development, marketing, business growth, and HR. 
                Empowering businesses with tailored strategies for sustainable success.
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
                Get in Touch
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={AagamConsultingImage} alt="Consulting" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-800">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team consists of industry experts with years of experience in their respective fields.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
                <p className="text-gray-600">
                  We create customized strategies that align with your business goals and market requirements.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Our track record speaks for itself with numerous success stories across various industries.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Continuous Support</h3>
                <p className="text-gray-600">
                  We provide ongoing support and adjustments to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 