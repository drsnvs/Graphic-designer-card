import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { Cube } from './ThreeD/Cube';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set('.gsap-text', { opacity: 0, y: 100 });
      
      gsap.to('.gsap-text', {
        duration: 1.5,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Float
            speed={4}
            rotationIntensity={1}
            floatIntensity={2}
          >
            <Cube />
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      
      <div className="relative z-10 flex h-full items-center justify-center text-white px-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse" />
          </motion.div>
          <motion.h1 
            className="gsap-text text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Jane Designer
          </motion.h1>
          <motion.p 
            className="gsap-text text-lg sm:text-xl text-purple-200 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Director & Digital Artist
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Explore My Work
            </button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full p-1">
          <div className="w-1.5 h-3 bg-purple-300 rounded-full animate-bounce mx-auto" />
        </div>
      </motion.div>
    </div>
  );
};