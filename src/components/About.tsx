<script lang="ts">
import React from 'react';

const About = () => {
  const values = [
    { title: 'Optimism', description: 'Seeing opportunities in every challenge' },
    { title: 'Nobility', description: 'Leading with integrity and honor' },
    { title: 'Generosity', description: 'Sharing knowledge and uplifting others' },
    { title: 'Excellence', description: 'Striving for the best in all endeavors' },
    { title: 'Assertiveness', description: 'Taking bold action with confidence' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">About Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            We are an assertive innovation to the world, a generous hub of excellence.
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Mission</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              To create a generation of confident, effective, and transformational leaders
              through innovative training programs and personalized development paths.
            </p>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 md:mt-0">Our Vision</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              To be the leading force in leadership development across Africa,
              empowering individuals and organizations to achieve their full potential.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-red-600 dark:text-red-400">{value.title}</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
</script>
