import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alex.johnson@example.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold text-primary-glow hover:text-white transition-colors duration-300 mb-4 block"
            >
              Alex Johnson
            </button>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-primary-glow transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-300">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Alex Johnson
            </p>
            <p className="text-gray-300">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>
              Built with React, TypeScript, Tailwind CSS, and Vite. 
              Deployed with love and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;