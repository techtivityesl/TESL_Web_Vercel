import React from 'react';
import { Monitor, Smartphone, Shield, Users, Settings, Lock, Eye, Database, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EndpointServicesPage = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Device Procurement & Deployment',
      description: 'End-to-end device lifecycle management from procurement to deployment across your organization.',
      features: [
        'Device sourcing & procurement',
        'Bulk deployment services',
        'Configuration management',
        'Asset tracking & inventory'
      ]
    },
    {
      icon: Settings,
      title: 'Endpoint Management',
      description: 'Comprehensive endpoint management solutions for seamless device administration and control.',
      features: [
        'Mobile Device Management (MDM)',
        'Unified Endpoint Management (UEM)',
        'Remote device configuration',
        'Software deployment & updates'
      ]
    },
    {
      icon: Shield,
      title: 'Endpoint Security & Compliance',
      description: 'Advanced security measures to protect endpoints and ensure regulatory compliance.',
      features: [
        'Endpoint protection platforms',
        'Compliance monitoring',
        'Security policy enforcement',
        'Threat detection & response'
      ]
    },
    {
      icon: Users,
      title: 'Identity & Access Management (IAM)',
      description: 'Secure identity management and access control for all your endpoints and users.',
      features: [
        'Single Sign-On (SSO)',
        'Multi-factor authentication',
        'Role-based access control',
        'Identity governance'
      ]
    }
  ];

  const deviceTypes = [
    {
      icon: Monitor,
      name: 'Desktops & Workstations',
      description: 'Enterprise desktops and high-performance workstations'
    },
    {
      icon: Smartphone,
      name: 'Mobile Devices',
      description: 'Smartphones, tablets, and mobile computing devices'
    },
    {
      icon: Database,
      name: 'Servers & Infrastructure',
      description: 'Server endpoints and infrastructure components'
    },
    {
      icon: Eye,
      name: 'IoT Devices',
      description: 'Internet of Things devices and smart endpoints'
    }
  ];

  const benefits = [
    'Centralized Device Management',
    'Enhanced Security Posture',
    'Improved Compliance',
    'Reduced IT Overhead',
    'Better User Experience',
    'Cost Optimization'
  ];

  const compliance = [
    'GDPR Compliance',
    'HIPAA Requirements',
    'SOX Compliance',
    'ISO 27001',
    'PCI DSS',
    'Industry Standards'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Endpoint Services &
                <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive endpoint management solutions that ensure secure, compliant, and 
                efficiently managed devices across your organization. From procurement to 
                retirement, we handle the complete device lifecycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '/#contact'}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Endpoint Assessment</span>
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
                  src="/Endpoint.png"
                  alt="Endpoint Management and Device Security"
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
              Our Endpoint Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete endpoint lifecycle management with advanced security and compliance features
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

      {/* Device Types Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Devices We Manage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive management for all types of endpoints in your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deviceTypes.map((device, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <device.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{device.name}</h3>
                <p className="text-gray-600 text-sm">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Compliance & Standards
              </h2>
              <div className="space-y-4">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100">
                    <Lock className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Endpoint Management Impact
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25,000+</div>
              <div className="text-green-100">Devices Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-green-100">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Endpoint Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let us help you streamline your endpoint management processes and enhance security across all devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+916355442668'}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all duration-200"
            >
              Call Now: +91 6355442668
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EndpointServicesPage;