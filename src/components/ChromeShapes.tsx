import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const ChromeShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for fluid movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Different parallax intensities for depth effect
  const x1 = useTransform(smoothX, [-1, 1], [-30, 30]);
  const y1 = useTransform(smoothY, [-1, 1], [-30, 30]);
  
  const x2 = useTransform(smoothX, [-1, 1], [20, -20]);
  const y2 = useTransform(smoothY, [-1, 1], [20, -20]);
  
  const x3 = useTransform(smoothX, [-1, 1], [-15, 15]);
  const y3 = useTransform(smoothY, [-1, 1], [-15, 15]);
  
  const x4 = useTransform(smoothX, [-1, 1], [10, -10]);
  const y4 = useTransform(smoothY, [-1, 1], [10, -10]);

  const rotate1 = useTransform(smoothX, [-1, 1], [-10, 10]);
  const rotate2 = useTransform(smoothY, [-1, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize to -1 to 1 range
      const normalizedX = (clientX / innerWidth) * 2 - 1;
      const normalizedY = (clientY / innerHeight) * 2 - 1;
      
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Chrome Torus - Top Right - 3D tilted ring effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ x: x1, y: y1 }}
        className="absolute -top-20 -right-20 lg:top-10 lg:right-10"
      >
        <motion.div
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 180],
          }}
          style={{ 
            rotateZ: rotate1,
            perspective: 1000,
            transformStyle: 'preserve-3d',
          }}
          transition={{ 
            rotateX: { duration: 12, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 12, repeat: Infinity, ease: 'linear' },
          }}
          className="w-48 h-48 lg:w-72 lg:h-72 relative"
        >
          {/* Outer chrome ring with 3D depth */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                conic-gradient(
                  from 180deg,
                  #f8f8f8 0deg,
                  #e0e0e0 30deg,
                  #a0a0a0 60deg,
                  #606060 90deg,
                  #404040 120deg,
                  #606060 150deg,
                  #909090 180deg,
                  #c8c8c8 210deg,
                  #e8e8e8 240deg,
                  #f8f8f8 270deg,
                  #e0e0e0 300deg,
                  #b0b0b0 330deg,
                  #f8f8f8 360deg
                )
              `,
              boxShadow: `
                inset 0 0 80px rgba(255,255,255,0.6),
                inset 15px 15px 40px rgba(0,0,0,0.15),
                inset -15px -15px 40px rgba(255,255,255,0.4),
                0 20px 60px rgba(0,0,0,0.25),
                0 0 80px rgba(200,200,200,0.3)
              `,
              border: '2px solid rgba(255,255,255,0.5)',
            }}
          />
          {/* Animated reflection sweep */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: `
                conic-gradient(
                  from 0deg,
                  transparent 0deg,
                  transparent 150deg,
                  rgba(255,255,255,0.4) 170deg,
                  rgba(255,255,255,0.6) 180deg,
                  rgba(255,255,255,0.4) 190deg,
                  transparent 210deg,
                  transparent 360deg
                )
              `,
            }}
          />
          {/* Inner cutout with shadow depth */}
          <div 
            className="absolute inset-12 lg:inset-20 rounded-full bg-background"
            style={{
              boxShadow: `
                inset 0 0 40px rgba(0,0,0,0.4),
                inset 5px 5px 20px rgba(0,0,0,0.3),
                0 0 20px rgba(0,0,0,0.2)
              `,
            }}
          />
          {/* Highlight ring for extra 3D effect */}
          <div 
            className="absolute inset-1 rounded-full pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.4) 0%,
                  transparent 30%,
                  transparent 70%,
                  rgba(0,0,0,0.1) 100%
                )
              `,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Chrome Sphere - Bottom Left with realistic metallic shading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        style={{ x: x2 }}
        className="absolute bottom-20 -left-16 lg:bottom-40 lg:left-20"
      >
        <motion.div
          animate={{ 
            y: [0, -30, 0],
          }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full relative"
          style={{
            rotateZ: rotate2,
          }}
        >
          {/* Base chrome gradient */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 120% 120% at 30% 20%, rgba(255,255,255,1) 0%, transparent 35%),
                radial-gradient(ellipse 100% 100% at 70% 80%, rgba(40,40,40,0.9) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, 
                  #e8e8e8 0%,
                  #d0d0d0 20%,
                  #a0a0a0 40%,
                  #707070 60%,
                  #505050 80%,
                  #404040 100%
                )
              `,
              boxShadow: `
                inset -15px -15px 40px rgba(0,0,0,0.4),
                inset 15px 15px 40px rgba(255,255,255,0.6),
                0 25px 80px rgba(0,0,0,0.35),
                0 0 60px rgba(180,180,180,0.25)
              `,
            }}
          />
          {/* Animated environment reflection */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '200% 200%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundSize: '200% 200%',
              background: `
                linear-gradient(
                  135deg,
                  transparent 0%,
                  transparent 40%,
                  rgba(255,255,255,0.15) 45%,
                  rgba(255,255,255,0.25) 50%,
                  rgba(255,255,255,0.15) 55%,
                  transparent 60%,
                  transparent 100%
                )
              `,
            }}
          />
          {/* Top highlight for 3D effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 60% 40% at 35% 25%, rgba(255,255,255,0.9) 0%, transparent 50%),
                radial-gradient(ellipse 30% 20% at 30% 20%, rgba(255,255,255,1) 0%, transparent 50%)
              `,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Chrome Abstract Hexagon - Mid Right with metallic facets */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        style={{ x: x3, y: y3 }}
        className="absolute top-1/2 -right-10 lg:right-40 hidden md:block"
      >
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 180, 360],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="w-24 h-24 lg:w-36 lg:h-36 relative"
          style={{
            perspective: 800,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `
                conic-gradient(
                  from 0deg,
                  #f8f8f8 0deg,
                  #b0b0b0 60deg,
                  #505050 120deg,
                  #808080 180deg,
                  #c0c0c0 240deg,
                  #e8e8e8 300deg,
                  #f8f8f8 360deg
                )
              `,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              boxShadow: `
                0 10px 40px rgba(0,0,0,0.3),
                0 0 60px rgba(200,200,200,0.2)
              `,
            }}
          />
          {/* Animated reflection for hexagon */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-2"
            style={{
              background: `
                linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%)
              `,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Chrome Pill with realistic 3D shading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        style={{ x: x4, y: y4 }}
        className="absolute top-1/3 left-1/4 hidden lg:block"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateZ: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1,
          }}
          className="w-20 h-10 rounded-full relative overflow-hidden"
          style={{
            background: `
              linear-gradient(180deg, 
                #f8f8f8 0%, 
                #e0e0e0 20%,
                #a0a0a0 50%, 
                #606060 80%,
                #404040 100%
              )
            `,
            boxShadow: `
              inset 0 -4px 12px rgba(0,0,0,0.3),
              inset 0 4px 12px rgba(255,255,255,0.9),
              0 8px 30px rgba(0,0,0,0.25)
            `,
          }}
        >
          {/* Top highlight */}
          <div
            className="absolute inset-x-0 top-0 h-1/3 rounded-t-full"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)',
            }}
          />
          {/* Animated reflection sweep */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 3,
            }}
            className="absolute inset-y-0 w-1/3"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Chrome Ring - Top Left with thick 3D appearance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ x: x2, y: y1 }}
        className="absolute top-40 left-10 hidden lg:block"
      >
        <motion.div
          animate={{ 
            rotateZ: [0, 360],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="w-24 h-24 rounded-full relative"
          style={{
            background: `
              conic-gradient(
                from 45deg,
                #ffffff 0deg,
                #d0d0d0 45deg,
                #808080 90deg,
                #505050 135deg,
                #707070 180deg,
                #a0a0a0 225deg,
                #d0d0d0 270deg,
                #f0f0f0 315deg,
                #ffffff 360deg
              )
            `,
            boxShadow: `
              0 10px 40px rgba(0,0,0,0.25),
              inset 0 0 20px rgba(255,255,255,0.5),
              0 0 30px rgba(180,180,180,0.2)
            `,
          }}
        >
          {/* Animated reflection ring */}
          <motion.div
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                conic-gradient(
                  from 0deg,
                  transparent 0deg,
                  transparent 160deg,
                  rgba(255,255,255,0.5) 175deg,
                  rgba(255,255,255,0.7) 180deg,
                  rgba(255,255,255,0.5) 185deg,
                  transparent 200deg,
                  transparent 360deg
                )
              `,
            }}
          />
          <div 
            className="absolute inset-4 rounded-full bg-background"
            style={{
              boxShadow: 'inset 0 0 25px rgba(0,0,0,0.35)',
            }}
          />
          {/* Highlight arc */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 40%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Chrome Dots with metallic shine */}
      <motion.div
        style={{ x: x4, y: y4 }}
        className="absolute hidden lg:block"
      >
        {[
          { top: '20%', left: '10%', delay: 0, size: 14 },
          { top: '35%', left: '28%', delay: 0.2, size: 10 },
          { top: '50%', left: '46%', delay: 0.4, size: 16 },
          { top: '65%', left: '64%', delay: 0.6, size: 12 },
          { top: '80%', left: '82%', delay: 0.8, size: 8 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8, y: [0, -15, 0], scale: [1, 1.15, 1] }}
            transition={{ 
              opacity: { delay: 1 + dot.delay, duration: 1 },
              y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
              scale: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
            }}
            className="rounded-full absolute overflow-hidden"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              background: `
                radial-gradient(ellipse 80% 60% at 30% 25%, 
                  rgba(255,255,255,1) 0%,
                  rgba(255,255,255,0.6) 30%,
                  transparent 60%
                ),
                radial-gradient(circle at 50% 50%, 
                  #e0e0e0 0%, 
                  #a0a0a0 40%, 
                  #606060 100%
                )
              `,
              boxShadow: `
                0 3px 15px rgba(0,0,0,0.35),
                inset 0 1px 3px rgba(255,255,255,0.9)
              `,
            }}
          >
            {/* Micro reflection on dots */}
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 50%)',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ChromeShapes;