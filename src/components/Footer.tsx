import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vishalsingh",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vishalsingh",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:vishal.singh@example.com",
      label: "Email"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-muted/50 to-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/VS-Logo.webp" 
                alt="Vishal Singh Logo" 
                className="w-12 h-12 object-contain logo-image"
              />
              <span className="text-xl font-bold text-foreground">Vishal Singh</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Full Stack Developer passionate about creating beautiful, functional, and scalable web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:vishal.singh@example.com"
                  className="text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  vishal.singh@example.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+15551234567"
                  className="text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <span className="text-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Vishal Singh. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Built with React & TypeScript</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-primary transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 