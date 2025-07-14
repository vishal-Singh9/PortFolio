import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 min-h-[64px] sm:min-h-[72px]">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-all duration-300 flex-shrink-0 group"
          >
            <img 
              src="/VS-Logo.webp" 
              alt="Vishal Singh Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain logo-image transition-all duration-300"
            />
            <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 hidden sm:block ${
              isScrolled 
                ? 'text-primary hover:text-primary-glow' 
                : 'text-white hover:text-gray-200'
            }`}>
              Vishal Singh
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 font-medium text-sm lg:text-base xl:text-lg relative group py-2 px-3 rounded-lg ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary hover:bg-primary/10' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-all duration-300 p-2 rounded-lg flex-shrink-0 ${
              isScrolled 
                ? 'text-foreground hover:text-primary hover:bg-primary/10' 
                : 'text-white hover:text-gray-200 hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 border-t rounded-b-lg transition-all duration-300 ${
            isScrolled 
              ? 'border-border bg-background/95 backdrop-blur-md' 
              : 'border-white/20 bg-black/20 backdrop-blur-md'
          }`}>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 transition-all duration-300 font-medium text-base sm:text-lg rounded-lg mx-2 animate-slide-in ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary hover:bg-primary/10' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;