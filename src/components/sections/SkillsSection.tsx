import { motion } from 'framer-motion';

const skills = {
  'Programming Languages': ['C', 'Java', 'Python'],
  'Frontend': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'ReactJS', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Express.js', 'PHP', 'MongoDB', 'MySQL'],
  'Tools & Design': ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
  'Concepts': ['REST APIs', 'MERN Stack', 'Responsive Design', 'UI/UX Basics', 'Cybersecurity Basics', 'Flutter Basics'],
};

const SkillsSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
  };

  return (
    <section id="skills" className="relative overflow-hidden bg-card/30">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            My Skills
          </motion.p>

          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="heading-lg"
          >
            TECHNOLOGIES I{' '}
            <span className="text-primary">WORK WITH</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              {...fadeInUp}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group"
            >
              <h3 className="font-display font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-sm bg-surface rounded-lg text-muted-foreground hover:text-primary hover:bg-surface-hover transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
