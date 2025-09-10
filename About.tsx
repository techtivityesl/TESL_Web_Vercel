import React from 'react';
import { Award, Users, Smartphone, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, number: '50+', label: 'Team Members' },
    { icon: Award, number: '20+', label: 'Certified Resources' },
    { icon: Smartphone, number: '25000+', label: 'Devices Deployed' },
    { icon: TrendingUp, number: '97.23%', label: 'Customer Retention Rate' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that future-proof your business.'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensure every solution meets the highest standards of excellence.'
    },
    {
      title: 'Continuous Support',
      description: 'Our commitment doesn\'t end at deployment. We provide ongoing support to ensure optimal performance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Techtivity</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Techtivity Enterprise Solutions LLP, we provide end-to-end IT solutions to help businesses stay secure, efficient, and future-ready.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              From IT infrastructure and endpoint security to networking and audio-visual solutions, we ensure seamless technology integration with expert support.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With a consultative approach and customer-first mindset, we deliver scalable, secure, and reliable solutions tailored to your business needs.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Partner with us to transform your IT infrastructure and drive success.
            </p>
            <p className="text-xl font-semibold text-green-600 mb-8">
              Techtivity – Powering Businesses with Smart IT Solutions!
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-2xl">
              <img 
                src="/About_US.png"
                alt="IT Team Working on Infrastructure Solutions"
                className="w-full h-80 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                <achievement.icon className="h-8 w-8 text-green-500 mb-3 mx-auto" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                <div className="text-gray-600 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;