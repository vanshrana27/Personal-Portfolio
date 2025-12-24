import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
  };

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            Experience
          </motion.p>

          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="heading-lg"
          >
            MY{' '}
            <span className="text-primary">JOURNEY</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Card */}
            <div className="relative pl-20">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background glow-box"
              />

              <motion.div
                whileHover={{ x: 8 }}
                className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-1">
                      Intern – Development
                    </h3>
                    <p className="text-primary font-medium">GWSF Ventures Pvt. Ltd.</p>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>July 2025 – January 2026</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gained hands-on experience in development and real-world project exposure. 
                  Worked on building and maintaining web applications, collaborating with team 
                  members, and learning industry best practices for software development.
                </p>

                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Internship</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
