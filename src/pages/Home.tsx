import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import DangiRealityLogo from '../assets/dangi_reality_logo.webp';
import AagamAgro from "../assets/aagam_agro.webp";
import AagamInnovation from "../assets/aagam_innovation.webp";
import AagamGetaway from "../assets/aagam_getaway.webp";
import AagamOm from "../assets/aagam_om.webp";
import AagamMedia from "../assets/aagam_media.webp";
import Footer from '../components/Footer';
import HomeHero from "../assets/home_hero.jpg";
import { Link } from 'react-router-dom';

const companies = [
  {
    name: "Dangi Reality",
    logo: <img src={DangiRealityLogo} className="h-20 w-auto object-contain" alt="Dangi Reality" />,
    description: "Revolutionizing the housing market with seamless, all-in-one services. We connect clients to properties that perfectly suit their tastes, needs, and budgets.",
    hyperlink: "https://dangirealtyinternational.com/",
  },
  {
    name: "Aagam Consulting",
    logo: <Briefcase className="h-20 w-20 text-green-600" />,
    description: "Expert solutions in web development, marketing, business growth, and HR. Empowering businesses with tailored strategies for sustainable success.",
    hyperlink: "/aagam-consulting/",
  },
  {
    name: "Aagam Agro",
    logo: <img src={AagamAgro} className="h-20 w-auto object-contain" alt="Aagam Agro" />,
    description: "A digital platform linking farmers, buyers, logistics, and support teams to boost agriculture and drive local economic growth.",
    hyperlink: "/aagam-agro/",
  },
  {
    name: "Aagam Innovation Lab",
    logo: <img src={AagamInnovation} className="h-20 w-auto object-contain" alt="Aagam Innovation Lab" />,
    description: "An R&D hub driving technological innovation and solutions across industries.",
    hyperlink: "/aagam-innovation-lab/",
  },
  {
    name: "Aagam Agro Research Center",
    logo: <img src={AagamAgro} className="h-20 w-auto object-contain" alt="Aagam Agro Research Center" />,
    description: "A research center focused on enhancing sustainable farming practices and crop yields.",
    hyperlink: "/aagam-agro-research-center/",
  },
  {
    name: "Aagam Getaway",
    logo: <img src={AagamGetaway} className="h-20 w-auto object-contain" alt="Aagam Getaway" />,
    description: "A booking platform for hotels and resorts, with special services for senior citizen accommodations.",
    hyperlink: "/aagam-getaway/",
  },
  {
    name: "Aagam Media International",
    logo: <img src={AagamMedia} className="h-20 w-auto object-contain" alt="Aagam Media International" />,
    description: "A media company dedicated to delivering innovative and engaging content across various platforms, promoting global knowledge exchange and digital transformation.",
    hyperlink: "https://aagammediaintl.com/",
  },
  {
    name: "Om Subhamangal",
    logo: <img src={AagamOm} className="h-32 w-auto object-contain" alt="Om Subhamangal" />,
    description: "Book priests in Nepal and the USA, schedule poojas, or join live ceremonies from Nepal. Services include Graha Shanti, Hawan, Rudrabhishek, and more.",
    hyperlink: "/om-subhamangal/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center bg-fixed"
        style={{
          backgroundImage: `url(${HomeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight px-4 py-4">
            Aagam Group
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Building tomorrow's solutions across multiple industries
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center mx-auto group transition-all duration-300"
          >
            Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Companies Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Our Companies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => {
              const isExternal = company.hyperlink?.startsWith('http');
              const Wrapper = isExternal ? 'a' : Link;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="block bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <Wrapper
                    {...(isExternal
                      ? { href: company.hyperlink, target: "_blank", rel: "noopener noreferrer" }
                      : { to: company.hyperlink || '#' })}
                    className="flex flex-col items-center space-y-6"
                  >
                    <div className="flex items-center justify-center mb-4">
                      {company.logo}
                    </div>
                    <h3 className="text-2xl font-semibold text-center mb-3">{company.name}</h3>
                    <p className="text-gray-600 text-center mb-4">{company.description}</p>
                    {company.hyperlink && (
                      <div className="flex items-center text-blue-600 font-medium group">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
