import React from 'react';
import { Server, Cloud, HardDrive, Shield, Database, Cpu, Network, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITInfraPage = () => {
  const services = [
    {
      icon: Server,
      title: 'Enterprise Workstations & Servers',
      description: 'High-performance workstations and robust server solutions tailored to your business needs.',
      features: [
        'Custom workstation configurations',
        'Enterprise-grade servers',
        'Virtualization solutions',
        'Performance optimization'
      ]
    },
    {
      icon: Network,
      title: 'Network Design & Implementation',
      description: 'Comprehensive network architecture designed for scalability, security, and performance.',
      features: [
        'Network topology design',
        'LAN/WAN implementation',
        'Wireless infrastructure',
        'Network monitoring & management'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & On-Premise Infrastructure',
      description: 'Hybrid cloud solutions that combine the best of cloud flexibility with on-premise control.',
      features: [
        'Cloud migration strategies',
        'Hybrid cloud deployment',
        'Private cloud setup',
        'Multi-cloud management'
      ]
    },
    {
      icon: HardDrive,
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Business continuity solutions',
        'Data archiving & retention'
      ]
    }
  ];

  const benefits = [
    {
      icon: Cpu,
      title: 'Enhanced Performance',
      description: 'Optimized infrastructure that delivers superior performance and reliability for your business operations.'
    },
    {
      icon: Shield,
      title: 'Robust Security',
      description: 'Multi-layered security approach protecting your infrastructure from various threats and vulnerabilities.'
    },
    {
      icon: Database,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business, ensuring long-term value and adaptability.'
    },
    {
      icon: Settings,
      title: 'Expert Management',
      description: 'Professional management and maintenance services to keep your infrastructure running smoothly.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive evaluation of your current infrastructure and future requirements.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Custom infrastructure design tailored to your specific business needs and goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional deployment with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization to ensure optimal functionality.'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support and proactive maintenance to ensure peak performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IT Infrastructure
                <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Setup & Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build a robust, scalable, and secure IT infrastructure that powers your business growth. 
                From enterprise workstations to cloud deployment, we provide comprehensive solutions 
                tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '/#contact'}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <Link 
                  to="/"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all duration-200 text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-2xl">
                <img 
                  src="/IT_Infra.png"
                  alt="Server Room and IT Infrastructure"
                  className="w-full h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions designed to support your business operations and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Infrastructure Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of a professionally designed and managed IT infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring successful infrastructure deployment with minimal disruption
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Let's discuss how our IT infrastructure solutions can support your business growth and digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Schedule Free Consultation
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+916355442668'}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              Call Now: +91 6355442668
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITInfraPage;