import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'Coach Okeh',
      role: 'Leadership Development Specialist',
      contact: '+263 775 532 303',
      email: 'darlingtonc@diasporakapita.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Coach Nick',
      role: 'Communication & Public Speaking Expert',
      contact: '+263 714 967 515',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Coach PJ',
      role: 'HR & Performance Management Trainer',
      contact: '+263 716 302 233',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white hover-lift">Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 hover-lift">
            Meet our expert trainers and facilitators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden card-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-maroon-600 dark:group-hover:text-maroon-400 transition-custom">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{member.contact}</p>
                {member.email && (
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{member.email}</p>
                )}
                <button className="mt-4 text-maroon-600 dark:text-maroon-400 font-semibold group-hover:text-maroon-800 dark:group-hover:text-maroon-300 transition-custom flex items-center">
                  View Profile 
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

export default Team;