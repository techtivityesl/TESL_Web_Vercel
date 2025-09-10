import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'CTO',
      position: 'Fastest Growing Start-Up',
      quote: 'From consultation to implementation and ongoing support, Techtivity has been an invaluable IT partner. Their proactive approach ensures our systems remain efficient, secure, and scalable for future growth.',
      rating: 5
    },
    {
      name: 'Operation Manager',
      position: 'Global IT Consulting Firm',
      quote: 'We needed a reliable AV solution for our conference rooms and large-scale corporate events. Techtivity delivered high-quality setups that enhanced our experience. Their team was professional, efficient, and extremely knowledgeable.',
      rating: 5
    },
    {
      name: 'IT Head',
      position: 'Leading Manufacturing Firm',
      quote: 'Techtivity transformed our IT infrastructure, ensuring a seamless and secure setup across all our offices. Their expertise in endpoint security and network solutions has significantly improved our operations. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Quote className="h-8 w-8 text-green-500 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;