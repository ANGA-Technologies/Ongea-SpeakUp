import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white hover-lift">Contact Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 hover-lift">
            Get in touch with our team for inquiries and consultations
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 card-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-maroon-600 dark:text-maroon-400">Send us a message</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-custom"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-custom"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-custom h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  className="button-primary w-full flex items-center justify-center group"
                  type="submit"
                >
                  Send Message
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 card-shadow h-full">
              <h3 className="text-2xl font-semibold mb-6 text-maroon-600 dark:text-maroon-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start group hover-lift">
                  <Phone className="text-maroon-600 dark:text-maroon-400 mr-4 group-hover:scale-110 transition-custom" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Phone Numbers</p>
                    <p className="text-gray-600 dark:text-gray-300">Coach Okeh: +263 775 532 303</p>
                    <p className="text-gray-600 dark:text-gray-300">Coach Nick: +263 714 967 515</p>
                    <p className="text-gray-600 dark:text-gray-300">Coach PJ: +263 716 302 233</p>
                  </div>
                </div>
                <div className="flex items-start group hover-lift">
                  <Mail className="text-maroon-600 dark:text-maroon-400 mr-4 group-hover:scale-110 transition-custom" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">darlingtonc@diasporakapita.com</p>
                  </div>
                </div>
                <div className="flex items-start group hover-lift">
                  <MapPin className="text-maroon-600 dark:text-maroon-400 mr-4 group-hover:scale-110 transition-custom" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Office Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;