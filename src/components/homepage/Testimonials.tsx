// src/components/homepage/Testimonials.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  image?: string;
  date?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Customers Say",
  subtitle = "Real reviews from real people who love our cakes"
}) => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      comment: "The best cakes in town! Always fresh and delicious. My family loves their chocolate cake! I've been ordering from Cake House for over 2 years now and they never disappoint.",
      rating: 5,
      avatar: "👩",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Birthday Party Planner",
      comment: "Ordered 3 custom cakes for events. Each one was a masterpiece! Highly recommend their custom cake service. The attention to detail is incredible.",
      rating: 5,
      avatar: "👨",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Food Blogger",
      comment: "I've tried cakes all over the city, and Cake House is definitely #1! The presentation is stunning and the taste is even better. A must-try for all cake lovers!",
      rating: 5,
      avatar: "👩",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Wedding Planner",
      comment: "The wedding cake was absolutely gorgeous! Our clients were thrilled. The team at Cake House went above and beyond to make sure everything was perfect.",
      rating: 5,
      avatar: "👨",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Loyal Customer",
      comment: "Every cake I've ordered from Cake House has been exceptional. Their attention to detail and quality ingredients make all the difference. Highly recommended!",
      rating: 5,
      avatar: "👩",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Corporate Event Manager",
      comment: "We've used Cake House for multiple corporate events and they always deliver. Professional service and delicious cakes that impress our clients.",
      rating: 5,
      avatar: "👨",
      date: "3 months ago"
    }
  ];

  // Calculate average rating
  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  return (
    <section className="py-20 px-4 bg-linear-to-br from-pink-50 via-white to-yellow-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block text-5xl mb-4"
          >
            ⭐
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-cursive mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>

          {/* Overall Rating */}
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-pink-500">{averageRating.toFixed(1)}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
            <span className="text-gray-500">({testimonials.length} reviews)</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-6xl opacity-10 text-pink-500">
                ❝
              </div>

              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-linear-to-r from-pink-400 to-red-400 flex items-center justify-center text-3xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-400 rounded-full w-4 h-4 border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-pink-500 font-medium">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-xl ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                  >
                    ⭐
                  </span>
                ))}
                {testimonial.date && (
                  <span className="text-xs text-gray-400 ml-2">{testimonial.date}</span>
                )}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed relative z-10">
                "{testimonial.comment}"
              </p>

              {/* Hover Effect - Verified Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute bottom-4 right-4"
              >
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <span>✓</span> Verified
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: '⭐', label: '5-Star Rating', value: '4.9/5' },
            { icon: '😊', label: 'Happy Customers', value: '500+' },
            { icon: '🏆', label: 'Awards Won', value: '12' },
            { icon: '❤️', label: 'Customer Love', value: '98%' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md"
            >
              <div className="text-3xl mb-1">{badge.icon}</div>
              <div className="text-xl font-bold text-pink-500">{badge.value}</div>
              <div className="text-xs text-gray-500">{badge.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Join our happy customers today!</p>
          <button className="px-8 py-3 bg-linear-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Leave a Review ⭐
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;