import { motion, type Easing } from 'framer-motion';
import { Github, Linkedin, Sparkles, Download } from 'lucide-react';
import { Button } from '../ui/button';
import profileImage from '@/assets/prof-pic.jpg';
import ChromeShapes from '../ChromeShapes';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const easeOut: Easing = [0.16, 1, 0.3, 1];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Chrome 3D Shapes */}
      <ChromeShapes />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-tl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding w-full relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-primary font-semibold mb-3 tracking-widest uppercase text-sm flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Hi, I'm Vansh!
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="heading-xl mb-6 leading-[0.95]"
            >
              <span className="block">BUILDING</span>
              <span className="block text-primary glow-text relative">
                INTUITIVE
                <motion.span 
                  className="absolute -right-2 top-0 text-2xl"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.span>
              </span>
              <span className="block">& ENGAGING</span>
              <span className="block text-muted-foreground text-[0.7em]">DIGITAL PRODUCTS</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed"
            >
              Full-Stack Developer | UI/UX Designer | Cybersecurity Enthusiast — crafting modern web applications with clean code and beautiful interfaces.
            </motion.p>

            {/* Enhanced Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-8 mb-10 py-6 border-y border-border/50"
            >
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Technologies</p>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary">2027</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Graduation</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button variant="glow" size="lg" className="group" asChild>
                <a href="#projects">
                  View Projects
                  <motion.span
                    className="inline-block ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Download className="h-4 w-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>

            {/* Social Links - Enhanced */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <span className="text-sm text-muted-foreground font-medium">Connect with me</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-border to-transparent" />
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/vanshrana27"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vanshrana27"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Animated Border */}
              <motion.div
                aria-hidden="true"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-sm group-hover:opacity-50 transition-opacity duration-500"
              />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20"
              >
                <img
                  src={profileImage}
                  alt="Vansh Rana - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              
              {/* Floating Tags */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 top-1/4 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border shadow-xl"
              >
                <span className="text-xs font-medium text-primary">React & Node.js</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 top-2/3 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border shadow-xl"
              >
                <span className="text-xs font-medium text-foreground">UI/UX Designer</span>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -right-8 w-28 h-28 border-2 border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -left-10 w-36 h-36 border-2 border-dashed border-primary/20 rounded-full"
              />
              
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-primary/30 blur-[100px] rounded-full scale-75" />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Explore</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5"
            >
              <motion.div 
                animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-current"
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
