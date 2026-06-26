import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // ← Add this import

// Import local images
import natiImage from '../assets/nati.jpg';
import mekdiImage from '../assets/mekdi.jpg';
import sarahImage from '../assets/Ayenu.jpg';
import davidImage from '../assets/david.jpg';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const About: React.FC = () => {
  const navigate = useNavigate();  // ← Add this

  // Navigation Handlers
  const handleOrderNow = () => {
    navigate('/menu');  // ← Navigate to menu page
  };

  const handleContactUs = () => {
    navigate('/contact');  // ← Navigate to contact page (create if needed)
    // OR if you don't have contact page yet:
    // alert('Contact page coming soon! 📞');
    // OR navigate to home:
    // navigate('/');
  };

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Nati",
      role: "Head Baker & Founder",
      bio: "With over 15 years of baking experience, Nati creates magical cakes that delight customers. Trained in Paris and London, he brings world-class expertise to every creation.",
      image: natiImage,
      social: {
        instagram: "@nati_bakes",
        twitter: "@nati_cakes"
      }
    },
    {
      id: 2,
      name: "Mekdi",
      role: "Pastry Chef",
      bio: "Mekdi specializes in creating beautiful and delicious pastries that are almost too pretty to eat. Her attention to detail and passion for perfection is unmatched.",
      image: mekdiImage,
      social: {
        instagram: "@mekdi_pastry",
        twitter: "@mekdi_sweets"
      }
    },
    {
      id: 3,
      name: "Ayenu",
      role: "Cake Designer",
      bio: "Ayenu brings creativity and artistry to every cake, making each one a unique masterpiece. Her designs have been featured in top wedding magazines.",
      image: sarahImage,
      social: {
        instagram: "@ayenu_cakedesign",
        linkedin: "ayenu-designs"
      }
    },
    {
      id: 4,
      name: "David",
      role: "Quality Control",
      bio: "David ensures every cake meets our high standards of quality and taste. With a background in food science, he guarantees excellence in every bite.",
      image: davidImage,
      social: {
        instagram: "@david_qc",
        twitter: "@david_quality"
      }
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence", icon: "🏆" },
    { number: "10K+", label: "Cakes Delivered", icon: "🎂" },
    { number: "500+", label: "Happy Customers", icon: "😊" },
    { number: "50+", label: "Awards Won", icon: "⭐" }
  ];

  const values = [
    {
      title: "Quality",
      description: "We use only the finest ingredients sourced from around the world.",
      icon: "✨"
    },
    {
      title: "Passion",
      description: "Every cake is baked with love and dedication to perfection.",
      icon: "❤️"
    },
    {
      title: "Creativity",
      description: "We push boundaries to create unique and beautiful designs.",
      icon: "🎨"
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond.",
      icon: "😊"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=1920&h=400&fit=crop&crop=center')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-pink-50/80 to-yellow-50/80 z-0"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-6xl mb-6"
            >
              🎂
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cursive mb-6">
              About <span className="text-gradient bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Cake House</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about creating delicious, handcrafted cakes that bring joy to every occasion. 
              From birthdays to weddings, we make every celebration special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-cursive text-pink-500 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to create unforgettable moments through our handcrafted cakes. 
                We believe that every celebration deserves a cake that's as special as the 
                occasion itself. Using only the finest ingredients and traditional baking 
                techniques, we bring joy to our customers one slice at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">👁️</div>
              <h2 className="text-3xl font-cursive text-pink-500 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the most beloved cake house in the city, known for exceptional 
                quality, innovative designs, and unforgettable taste. We envision a world 
                where every celebration is made sweeter with our cakes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-pink-50 to-yellow-50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">📖</div>
                <h2 className="text-3xl font-cursive text-pink-500 mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cake House was founded with a simple dream: to create the most delicious 
                  and beautiful cakes in the city. What started as a small home bakery has 
                  grown into a beloved local institution.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we serve hundreds of happy customers every week, creating custom 
                  cakes for weddings, birthdays, corporate events, and every special moment 
                  in between.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 text-center shadow-md"
                  >
                    <div className="text-3xl mb-1">{item.icon}</div>
                    <div className="text-2xl font-bold text-pink-500">{item.number}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-cursive mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Cake House.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-linear-to-br from-pink-50 to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-cursive mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented people behind our delicious cakes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 bg-linear-to-br from-pink-100 to-purple-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-green-400 rounded-full w-3 h-3 border-2 border-white"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-pink-500 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  
                  {member.social && (
                    <div className="mt-4 flex justify-center gap-3">
                      {member.social.instagram && (
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-xl">
                          📸
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-xl">
                          🐦
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-xl">
                          🔗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - WITH FUNCTIONALITY */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-pink-500 to-red-500 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-cursive mb-4">
              Ready to Order? 🎂
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let us make your next celebration extra special with our delicious cakes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Order Now Button - Navigates to Menu */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOrderNow}  // ← Navigates to /menu
                className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Order Now
              </motion.button>
              
              {/* Contact Us Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactUs}  // ← Navigates to /contact
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;