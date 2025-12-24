import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vanshrana27', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vanshrana27', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vanshrana7600@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="inline-block font-display text-2xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-foreground">VANSH</span>
              <span className="text-primary"> RANA</span>
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full-Stack Developer crafting beautiful digital experiences with modern technologies and clean code.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Surat, Gujarat, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:vanshrana7600@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                vanshrana7600@gmail.com
              </a>
              <a
                href="tel:+917046248737"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +91 7046248737
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-surface-hover transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Vansh Rana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
