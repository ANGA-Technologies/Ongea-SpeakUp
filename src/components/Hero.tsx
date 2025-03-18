import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover transition-custom"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}>
        <span className="w-full h-full absolute opacity-70 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center animate-fadeIn">
            <div className="text-white">
              <h1 className="text-5xl font-semibold leading-tight mb-4 hover-lift">
                Empowering Leaders for a Better Tomorrow
              </h1>
              <p className="mt-4 text-lg opacity-90 hover-lift">
                Join ONGEA Leadership Training to unlock your leadership potential and transform your career.
                Our expert-led programs are designed to nurture confident, effective, and transformational leaders.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button className="button-primary flex items-center">
                  Join a Program
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </button>
                <button className="button-outline">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;