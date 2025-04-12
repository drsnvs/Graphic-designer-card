import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Code, Lightbulb } from 'lucide-react';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div style={{ y }} className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600">
              I'm a passionate designer with over 8 years of experience in creating
              digital experiences that leave lasting impressions. My approach combines
              creativity with strategic thinking to deliver solutions that not only look
              beautiful but also solve real problems.
            </p>
            <div className="flex flex-col space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                <span className="text-base sm:text-lg">Visual Design</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <span className="text-base sm:text-lg">UI Development</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                <span className="text-base sm:text-lg">Creative Direction</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden mt-8 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="Designer workspace"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};