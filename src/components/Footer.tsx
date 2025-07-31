import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Resume from "@/assets/VishalSingh_Resume.pdf";

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
      href: "https://github.com/vishal-Singh9/",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-singh-1b6914223/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:vishal.sng9@gmail.com",
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
              Crafting seamless digital experiences with React—turning ideas into interactive, high-performance web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks?.map((social, index) => (
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
                  href="mailto:vishal.sng9@gmail.com"
                  className="text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  vishal.sng9@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+919956414364"
                  className="text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  +91 9956414364
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <span className="text-foreground">Varanasi, Uttar Pradesh, India</span>
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
                onClick={() => window.open(Resume, '_blank')}
              >
               Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Vishal Singh</span>
          </div>
          <div className="flex items-center space-x-6 text-sm mb-0 sm:mb-0 pb-4 sm:pb-0">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 transition-all duration-300 shadow-lg border border-primary/30 hover:border-primary text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 relative overflow-hidden"
              aria-label="Back to Top"
            >
              <span className="absolute left-0 top-0 w-full h-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              <ArrowUp className="w-5 h-5 mr-1 group-hover:animate-bounce text-primary drop-shadow" />
              <span className="hidden sm:inline-block group-hover:underline tracking-wide font-medium">
                Back to Top
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 