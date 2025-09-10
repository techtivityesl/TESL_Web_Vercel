import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                IT Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're your trusted IT System Integration partner, delivering cutting-edge solutions 
              that drive digital transformation and business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToServices}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all duration-200"
              >
                Request Free Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">25000+</div>
                <div className="text-gray-600 text-sm">Devices Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">20+</div>
                <div className="text-gray-600 text-sm">Certified Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">97.23%</div>
                <div className="text-gray-600 text-sm">Customer Retention</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mb-6">
                <img 
                  src="/Hero_Image.png"
                  alt="IT Infrastructure and Network Solutions"
                  className="w-full h-80 object-contain"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <Shield className="h-8 w-8 text-green-500 mb-2" />
                <div className="text-sm font-semibold">Secure</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <Zap className="h-8 w-8 text-emerald-600 mb-2" />
                <div className="text-sm font-semibold">Fast</div>
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-4 shadow-lg">
                <Users className="h-8 w-8 text-green-500 mb-2" />
                <div className="text-sm font-semibold">Reliable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;