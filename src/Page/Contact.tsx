import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: '📍', label: 'Address', value: '123 Cake Street, Addis Abeba' },
    { icon: '📞', label: 'Phone', value: '+1 (234) 567-8900' },
    { icon: '✉️', label: 'Email', value: 'info@cakehouse.com' },
    { icon: '🕐', label: 'Hours', value: 'Mon-Sat: 9:00 AM - 9:00 PM' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-linear-to-br from-pink-50 via-white to-yellow-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-6xl mb-4"
          >
            📬
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-cursive mb-4">
            Contact <span className="text-gradient bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a question or want to place a custom order? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message 💬</h2>
            
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4"
              >
                ✅ Thank you! We'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Custom Cake Order"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your cake needs..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message ✉️'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-linear-to-br from-pink-50 to-yellow-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch 📬</h2>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 mb-4 last:mb-0 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                >
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium text-gray-800">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map / Location */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Visit Us 🗺️</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7c9ed%3A0x3d5c8ba3bb5a3d5c!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1644262070686!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Cake House Location"
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                📍 123 Cake Street, Sweet City, SC 12345
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Follow Us 📱</h3>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-3xl hover:text-pink-500 transition-colors"
                  aria-label="Facebook"
                >
                  📘
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-3xl hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  📸
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-3xl hover:text-pink-500 transition-colors"
                  aria-label="Twitter"
                >
                  🐦
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-3xl hover:text-pink-500 transition-colors"
                  aria-label="YouTube"
                >
                  📹
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-3xl hover:text-pink-500 transition-colors"
                  aria-label="TikTok"
                >
                  🎵
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;