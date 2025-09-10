import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Network, Server, Wifi, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkSecurityPage = () => {
  const services = [
    {
      icon: Network,
      title: 'Enterprise Network Infrastructure',
      description: 'Robust network architecture designed for performance, scalability, and security.',
      features: [
        'Network design & planning',
        'LAN/WAN implementation',
        'Wireless network setup',
        'Network performance optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Firewall & IPS',
      description: 'Advanced firewall solutions and intrusion prevention systems to protect your network.',
      features: [
        'Next-generation firewalls',
        'Intrusion prevention systems',
        'Network access control',
        'Traffic monitoring & analysis'
      ]
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Implement zero trust architecture to secure your network from internal and external threats.',
      features: [
        'Identity verification',
        'Device authentication',
        'Micro-segmentation',
        'Continuous monitoring'
      ]
    },
    {
      icon: Server,
      title: 'Secure Cloud & Data Protection',
      description: 'Comprehensive cloud security and data protection solutions for your business.',
      features: [
        'Cloud security assessment',
        'Data encryption',
        'Backup & recovery',
        'Compliance management'
      ]
    }
  ];

  const threats = [
    {
      icon: AlertTriangle,
      title: 'Cyber Attacks',
      description: 'Protection against malware, ransomware, and advanced persistent threats.'
    },
    {
      icon: Eye,
      title: 'Data Breaches',
      description: 'Prevent unauthorized access to sensitive business and customer data.'
    },
    {
      icon: Wifi,
      title: 'Network Intrusions',
      description: 'Secure your network perimeter from unauthorized access attempts.'
    },
    {
      icon: Settings,
      title: 'System Vulnerabilities',
      description: 'Regular security assessments and vulnerability management.'
    }
  ];

  const benefits = [
    '24/7 Network Monitoring',
    'Advanced Threat Detection',
    'Compliance Management',
    'Incident Response',
    'Security Training',
    'Regular Security Audits'
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Education',
    'Government',
    'Retail & E-commerce'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Network & Security
                <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your business with comprehensive network security solutions. From firewall 
                implementation to zero trust architecture, we ensure your network is secure, 
                compliant, and resilient against modern threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '/#contact'}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Security Assessment</span>
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
                  src="/Network_Security.png"
                  alt="Network Security and Cybersecurity Solutions"
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
              Our Network Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your network infrastructure and data
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

      {/* Threats Protection Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Protect Against Modern Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our security solutions defend against a wide range of cyber threats and vulnerabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <threat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{threat.title}</h3>
                <p className="text-gray-600 text-sm">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Security Benefits
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Network Today
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Don't wait for a security breach. Let our experts assess your current security posture 
            and implement robust protection measures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get Free Security Assessment
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

export default NetworkSecurityPage;