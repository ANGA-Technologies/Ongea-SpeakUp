import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Corporate Training', href: '#services' },
      { name: 'Leadership Programs', href: '#programs' },
      { name: 'Consultation', href: '#services' },
      { name: 'Events', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Testimonials', href: '#clients' },
      { name: 'FAQs', href: '#faqs' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
    ],
  };

  return (
    <footer className="bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">
              ON<span className="text-maroon-500">GEA</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Empowering future leaders through comprehensive training and development programs.
              Join us in creating a generation of confident and effective leaders.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ONGEA Leadership Training. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-maroon-500 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-maroon-500 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
