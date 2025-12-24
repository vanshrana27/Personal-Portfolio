import { motion } from 'framer-motion';
import { Globe, Code2, Palette, Zap, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Clean, modern, and responsive website designs that capture your brand essence and engage visitors.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web applications using the MERN stack with robust backend APIs and beautiful frontends.',
  },
  {
    icon: Globe,
    title: 'UI/UX Design',
    description: 'Attractive and user-friendly interfaces designed in Figma with focus on usability and aesthetics.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Faster load times, lightweight assets, and optimized code for the best user experience.',
  },
  {
    icon: Smartphone,
    title: 'Flutter App Basics',
    description: 'Simple cross-platform mobile applications for Android and iOS using Flutter framework.',
  },
];

const ServicesSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
  };

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            What I Do
          </motion.p>

          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="heading-lg mb-6"
          >
            SERVICES I{' '}
            <span className="text-primary">OFFER</span>
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to deployment, I provide comprehensive solutions to bring your digital ideas to life.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...fadeInUp}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
