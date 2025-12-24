import { motion } from 'framer-motion';
import { GraduationCap, Target, Code } from 'lucide-react';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
  };

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
            >
              About Me
            </motion.p>

            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="heading-lg mb-6"
            >
              I DELIVER{' '}
              <span className="text-primary">EXCEPTIONAL</span>
              <br />
              USER EXPERIENCES
              <br />
              ACROSS PLATFORMS.
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              I'm a Computer Science student at AMTICS with a strong interest in building 
              full-stack web applications, crafting clean UI/UX designs, and exploring 
              cybersecurity. My passion lies in creating digital products that not only 
              look great but also deliver seamless user experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary mb-1">3+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary mb-1">5+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary mb-1">2027</p>
                <p className="text-sm text-muted-foreground">Graduation</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Education</h3>
                  <p className="text-foreground font-medium">B.Tech Computer Science & Technology</p>
                  <p className="text-muted-foreground text-sm">Asha M. Tarsadia Institute of Computer Science & Technology (AMTICS)</p>
                  <p className="text-primary text-sm mt-1">Expected Graduation: 2027</p>
                </div>
              </div>
            </motion.div>

            {/* Goal Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Career Goal</h3>
                  <p className="text-muted-foreground">
                    To become a skilled and impactful full-stack developer, creating innovative 
                    solutions while continuously expanding my expertise in cybersecurity and modern technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Focus Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Current Focus</h3>
                  <p className="text-muted-foreground">
                    Building full-stack applications with MERN stack, learning advanced React patterns, 
                    and exploring security best practices in web development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
