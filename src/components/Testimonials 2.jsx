import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              Over 2,000 students have shared their experiences with Pragati
            </p>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl xl:text-5xl font-pj">
              Hear what our students have to say about us
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="#"
              title="Check all reviews"
            >
              Check all 2,000+ reviews
            </a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background: 'linear-gradient(90deg, #4c5270 -0.55%, #4c5270 22.86%, #4c5270 48.36%, #4c5270 73.33%, #4c5270 99.34%)',
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1  gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex rounded-xl  border-secondary  hover:rotate-3  flex-col overflow-hidden 
                shadow-xl transition-all duration-300">
                  <div className="flex flex-col justify-between flex-1  p-6 bg-white lg:py-8 lg:px-7
                    transition-all duration-200">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array.from({ length: testimonial.rating }).map((_, idx) => (
                          <svg
                            key={idx}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: 'Aarti Patel',
    position: 'Student',
    quote: '“Pragati helped me find the perfect coaching class for my preparation. The registration process was seamless, and the quality of teaching exceeded my expectations.”',
    avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png',
    rating: 5
  },
  {
    name: 'Ravi Kumar',
    position: 'Student',
    quote: '“The coaching classes offered by Pragati are top-notch. I appreciate how they matched me with the right instructors who were both knowledgeable and supportive.”',
    avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
    rating: 5
  },
  {
    name: 'Neha Sharma',
    position: 'Student',
    quote: '“Pragati made my search for the best coaching classes easy and stress-free. The process was quick, and I’m thrilled with the results.”',
    avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-1.png',
    rating: 5
  },
];

export default Testimonials;
