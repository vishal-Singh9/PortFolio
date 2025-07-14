import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import back from "@/assets/Back.webp";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className="animate-fade-in max-w-6xl mx-auto py-8 sm:py-12 lg:py-16">
          {/* Main Heading */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight hero-title">
              <span className="block text-white mb-2 sm:mb-3">
                Hi, I'm
              </span>
              <span className="block text-white leading-tight">
                Vishal Singh
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 lg:mb-12 text-gray-200 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed font-light px-2 sm:px-4 hero-subtitle">
              Full Stack Developer passionate about creating beautiful,
              functional, and scalable web experiences that make a difference.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 btn-hover-lift focus-ring"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-black hover:bg-white hover:text-black font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 btn-hover-lift"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 btn-hover-lift focus-ring"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-4 sm:mb-8 lg:mb-8">
            <a
              href="https://github.com/vishalsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub Profile"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:text-primary-glow transition-colors duration-300" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/vishalsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn Profile"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:text-primary-glow transition-colors duration-300" />
              </div>
            </a>
            <a 
              href="mailto:vishal.singh@example.com" 
              className="group"
              aria-label="Email Contact"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:text-primary-glow transition-colors duration-300" />
              </div>
            </a>
          </div>

          {/* Professional Tagline */}
          <div className=" sm:block mb-6 sm:mb-4 lg:mb-8">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
              Specializing in React, Node.js, and modern web technologies to
              build exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
