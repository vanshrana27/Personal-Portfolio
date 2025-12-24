import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'Food Reservation Web App',
    year: '2025',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
    description: 'Full-stack restaurant reservation system with real-time booking, countdown timers, and auto-redirect features. Built with MERN stack and MongoDB Atlas.',
    github: 'https://github.com/vanshrana27',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Veronica – Gemini Clone',
    year: '2025',
    tech: ['ReactJS', 'OpenRouter API', 'AI/ML'],
    description: 'AI-powered chatbot with real-time conversational interface. Integrated with OpenRouter API for advanced language model capabilities.',
    github: 'https://github.com/vanshrana27',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Fashion Store Website',
    year: '2024',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description: 'E-commerce platform with product catalog, user authentication, and shopping cart functionality. Clean and responsive UI design.',
    github: 'https://github.com/vanshrana27',
    color: 'from-pink-500/20 to-purple-500/20',
  },
];

const ProjectsSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-card/30">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
            >
              My Work
            </motion.p>

            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="heading-lg"
            >
              FEATURED{' '}
              <span className="text-primary">PROJECTS</span>
            </motion.h2>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Button variant="outline" asChild>
              <a href="https://github.com/vanshrana27" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative p-8">
                {/* Year Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-primary font-display font-semibold">{project.year}</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-surface rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
