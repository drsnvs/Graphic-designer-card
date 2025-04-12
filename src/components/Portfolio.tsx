import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Complete brand redesign for tech startup",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Web Design",
    description: "E-commerce platform UI/UX design",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Fitness tracking app design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
  }
];

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">My Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};