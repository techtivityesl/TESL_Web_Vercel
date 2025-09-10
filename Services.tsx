import React from 'react';
import { Server, Shield, Monitor, Volume2, ArrowRight, CheckCircle, Settings, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'IT Infra Setup',
      description: 'Complete IT infrastructure solutions from enterprise workstations to cloud deployment and disaster recovery.',
      features: ['Enterprise Workstations & Servers', 'Network Design & Implementation', 'Cloud & On-Premise Infrastructure', 'Data Backup & Disaster Recovery'],
      link: '/services/it-infrastructure'
    },
    {
      icon: Shield,
      title: 'Network & Security',
      description: 'Comprehensive network infrastructure and security solutions to protect your business from modern threats.',
      features: ['Enterprise Network Infrastructure', 'Firewall & IPS', 'Zero Trust Security', 'Secure Cloud & Data Protection'],
      link: '/services/network-security'
    },
    {
      icon: Monitor,
      title: 'Endpoint Services',
      description: 'End-to-end endpoint management solutions ensuring secure, compliant, and efficiently managed devices.',
      features: ['Device Procurement & Deployment', 'Endpoint Management', 'Endpoint Security & Compliance', 'Identity & Access Management (IAM)'],
      link: '/services/endpoint-services'
    },
    {
      icon: Volume2,
      title: 'Audio Visuals',
      description: 'Professional audio-visual solutions for modern workplaces, from conference rooms to live streaming setups.',
      features: ['Conference Room Solutions', 'Digital Signage & Video Walls', 'Live Streaming Solutions', 'Acoustics & Soundproofing Solutions'],
      link: '/services/audio-visuals'
    }
  ];

  const whyTechtivity = [
    {
      icon: CheckCircle,
      title: 'Consultation',
      description: 'We understand your needs and suggest the best solutions.'
    },
    {
      icon: Settings,
      title: 'Implementation',
      description: 'Deployment, configuration, and setup with expert precision.'
    },
    {
      icon: Headphones,
      title: 'Post-Sales Support',
      description: 'Reliable maintenance, troubleshooting, and upgrades to keep your systems running smoothly.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to={service.link}
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Techtivity Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Techtivity?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that truly make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyTechtivity.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;