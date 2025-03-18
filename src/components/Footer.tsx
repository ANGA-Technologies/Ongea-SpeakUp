import React from 'react';
import { Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4">
            <h4 className="text-2xl font-semibold mb-4 text-maroon-500 hover-lift inline-block">ONGEA</h4>
            <p className="text-gray-400 hover-lift">
              Empowering leaders for a better tomorrow through innovative training
              and development programs.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-maroon-500 hover-scale">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-maroon-500 hover-scale">
                <Linkedin size={24} />
              </a>
              <a href="mailto:darlingtonc@diasporakapita.com" className="text-gray-400 hover:text-maroon-500 hover-scale">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 mb-8 md:mb-0">
                <h5 className="text-lg font-semibold mb-4 text-maroon-500">Quick Links</h5>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-white hover-lift inline-block">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white hover-lift inline-block">About Us</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white hover-lift inline-block">Services</a></li>
                  <li><a href="#team" className="text-gray-400 hover:text-white hover-lift inline-block">Our Team</a></li>
                </ul>
              </div>
              
              <div className="w-full md:w-4/12 mb-8 md:mb-0">
                <h5 className="text-lg font-semibold mb-4 text-maroon-500">Programs</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white hover-lift inline-block">Corporate Training</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white hover-lift inline-block">Educational Training</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white hover-lift inline-block">Consultation Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white hover-lift inline-block">Events Management</a></li>
                </ul>
              </div>
              
              <div className="w-full md:w-4/12">
                <h5 className="text-lg font-semibold mb-4 text-maroon-500">Contact</h5>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover-lift">Coach Okeh: +263 775 532 303</li>
                  <li className="text-gray-400 hover-lift">Coach Nick: +263 714 967 515</li>
                  <li className="text-gray-400 hover-lift">Coach PJ: +263 716 302 233</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 hover-lift">
            © {new Date().getFullYear()} ONGEA Leadership Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;