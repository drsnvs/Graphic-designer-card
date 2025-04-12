import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Let's Work Together</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold">Get in Touch</h3>
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">hello@janedesigner.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">San Francisco, CA</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 sm:px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};