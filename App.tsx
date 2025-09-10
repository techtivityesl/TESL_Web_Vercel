import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ITInfraPage from './pages/services/ITInfraPage';
import NetworkSecurityPage from './pages/services/NetworkSecurityPage';
import EndpointServicesPage from './pages/services/EndpointServicesPage';
import AudioVisualsPage from './pages/services/AudioVisualsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          
          {/* Service Pages */}
          <Route path="/services/it-infrastructure" element={
            <>
              <Header />
              <ITInfraPage />
              <Footer />
            </>
          } />
          
          <Route path="/services/network-security" element={
            <>
              <Header />
              <NetworkSecurityPage />
              <Footer />
            </>
          } />
          
          <Route path="/services/endpoint-services" element={
            <>
              <Header />
              <EndpointServicesPage />
              <Footer />
            </>
          } />
          
          <Route path="/services/audio-visuals" element={
            <>
              <Header />
              <AudioVisualsPage />
              <Footer />
            </>
          } />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;