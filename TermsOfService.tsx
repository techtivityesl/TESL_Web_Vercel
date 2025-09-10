import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Techtivity Enterprise Solutions LLP website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Techtivity provides IT infrastructure, networking, endpoint security, and audio-visual solutions. Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IT Infrastructure Setup and Management</li>
                <li>Network and Security Solutions</li>
                <li>Endpoint Services and Management</li>
                <li>Audio-Visual Solutions</li>
                <li>Consultation and Support Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Agreements</h2>
              <p className="text-gray-700 mb-4">
                Specific terms for services will be outlined in separate service agreements or statements of work. These documents will detail:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and conditions</li>
                <li>Support and maintenance terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional charges</li>
                <li>Services may be suspended for non-payment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including text, graphics, logos, and software, is the property of Techtivity Enterprise Solutions LLP and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Techtivity's liability for any claim arising from our services shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate service agreements with appropriate notice as specified in the individual agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Techtivity Enterprise Solutions LLP</strong><br />
                  Email: hello@techtivity.co.in<br />
                  Phone: +91 6355442668<br />
                  Address: 403, B Wing, Meghansh, Near DMart, TV9 Road, Jivraj Park, Ahmedabad - 380051
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;