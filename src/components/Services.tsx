import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Corporate Training',
      description: 'Leadership & Team Building, Public Speaking & Debate Skills, HR & Workforce Development',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Educational Training',
      description: 'School Leadership Training, Youth Empowerment Workshops, Student Development Programs',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Consultation Services',
      description: 'HR Consultations, Organizational Leadership Assessments, Strategic Planning',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="services" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white hover-lift">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 hover-lift">
            Comprehensive leadership development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden card-shadow hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-maroon-600 dark:group-hover:text-maroon-400 transition-custom">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-custom">
                  {service.description}
                </p>
                <button className="mt-4 text-maroon-600 dark:text-maroon-400 font-semibold hover:text-maroon-800 dark:hover:text-maroon-300 transition-custom flex items-center">
                  Learn More 
                  <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;