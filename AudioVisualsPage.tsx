import React from 'react';
import { Volume2, Video, Mic, Monitor, Camera, Speaker, Headphones, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudioVisualsPage = () => {
  const services = [
    {
      icon: Video,
      title: 'Conference Room Solutions',
      description: 'Complete audio-visual setups for modern conference rooms and meeting spaces.',
      features: [
        'Video conferencing systems',
        'Interactive displays & projectors',
        'Audio systems & microphones',
        'Room automation & control'
      ]
    },
    {
      icon: Monitor,
      title: 'Digital Signage & Video Walls',
      description: 'Dynamic digital displays and video wall solutions for impactful visual communication.',
      features: [
        'LED video walls',
        'Digital signage displays',
        'Content management systems',
        'Interactive kiosks'
      ]
    },
    {
      icon: Camera,
      title: 'Live Streaming Solutions',
      description: 'Professional live streaming setups for events, webinars, and corporate communications.',
      features: [
        'Multi-camera setups',
        'Streaming equipment',
        'Production software',
        'Remote broadcasting'
      ]
    },
    {
      icon: Speaker,
      title: 'Acoustics & Soundproofing Solutions',
      description: 'Professional acoustic treatment and soundproofing for optimal audio environments.',
      features: [
        'Acoustic panel installation',
        'Sound isolation solutions',
        'Audio system calibration',
        'Noise reduction systems'
      ]
    }
  ];

  const applications = [
    {
      icon: Volume2,
      title: 'Corporate Meetings',
      description: 'Enhanced meeting experiences with crystal-clear audio and video'
    },
    {
      icon: Mic,
      title: 'Training & Education',
      description: 'Interactive learning environments with advanced AV technology'
    },
    {
      icon: Monitor,
      title: 'Events & Presentations',
      description: 'Professional event production with high-impact visual displays'
    },
    {
      icon: Headphones,
      title: 'Broadcasting & Media',
      description: 'Professional-grade equipment for content creation and broadcasting'
    }
  ];

  const features = [
    'Custom Design & Installation',
    'Professional Calibration',
    'User Training & Support',
    'Maintenance & Service',
    'Remote Monitoring',
    'Warranty & Support'
  ];

  const technologies = [
    'Sony Professional',
    'Epson Projectors',
    'Crestron Control',
    'Shure Audio',
    'Samsung Displays',
    'Logitech Video'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Audio Visual
                <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your workspace with professional audio-visual solutions. From conference 
                rooms to large-scale events, we deliver cutting-edge AV technology that enhances 
                communication and creates memorable experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '/#contact'}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get AV Consultation</span>
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
                  src="/AV.png"
                  alt="Audio Visual Conference Room Solutions"
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
              Our Audio Visual Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AV solutions designed to enhance communication and create impactful experiences
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

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AV Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile audio-visual solutions for various business needs and environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <app.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Service Features
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Technology Partners
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100">
                    <Settings className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AV Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional audio-visual experiences
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your AV requirements and objectives' },
              { step: '02', title: 'Design', desc: 'Custom AV system design and equipment selection' },
              { step: '03', title: 'Installation', desc: 'Professional installation and system integration' },
              { step: '04', title: 'Calibration', desc: 'Fine-tuning for optimal audio and video performance' },
              { step: '05', title: 'Support', desc: 'Ongoing maintenance and technical support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your AV Experience?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Let our AV experts design and implement a solution that transforms your communication 
            and presentation capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Schedule AV Consultation
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

export default AudioVisualsPage;