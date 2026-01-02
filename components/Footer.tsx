
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start text-left gap-10">

          <div className="mb-8 lg:mb-0 max-w-sm">
            <div className="flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="Drepto Biodevices Pvt. Ltd. Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-teal-100/80 text-sm leading-relaxed max-w-xs">
              SINE, Rahul Bajaj BLDG<br />
              IIT Bombay, Powai<br />
              Mumbai 400076
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 w-full lg:w-auto">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-white text-lg mb-1">Services</h4>
              <a href="#" className="text-teal-100/80 hover:text-white text-sm transition-colors">Consultations</a>
              <a href="#" className="text-teal-100/80 hover:text-white text-sm transition-colors">Pharmacy</a>
              <a href="#" className="text-teal-100/80 hover:text-white text-sm transition-colors">Lab Tests</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-white text-lg mb-1">Company</h4>
              <a href="#" className="text-teal-100/80 hover:text-white text-sm transition-colors">About Us</a>
              <a href="#" className="text-teal-100/80 hover:text-white text-sm transition-colors">Contact</a>
              <a href="#" className="text-teal-100/80 hover:text-white text-sm transition-colors">Careers</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-white text-lg mb-1">Legal</h4>
              <Link to="/privacy-policy" className="text-teal-100/80 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-teal-100/80 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/refund-policy" className="text-teal-100/80 hover:text-white text-sm transition-colors">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-teal-100/80 hover:text-white text-sm transition-colors">Shipping Policy</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-teal-700/50 mt-10 pt-6 text-center text-teal-200 text-xs">
          &copy; {new Date().getFullYear()} Drepto Biodevices Pvt.Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
