import { Code, Coffee, Heart, Users, Award, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "1+ Years Experience",
      description: "Building web applications with modern technologies and best practices"
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative and efficient solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborate effectively with cross-functional teams and stakeholders"
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Always staying up-to-date with the latest tech trends and innovations"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to delivering high-quality code and exceptional user experiences"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focus on achieving business goals through technical excellence"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate full-stack developer with a love for creating innovative and scalable web solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Building Digital Experiences That Matter
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated full-stack developer with over 5 years of experience creating 
                web applications that combine beautiful design with robust functionality. My 
                journey in tech started with a curiosity about how websites work, and it has 
                evolved into a passion for building digital experiences that make a real difference.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                My Approach
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences 
                that delight and inspire. When I'm not coding, you can find me exploring new 
                technologies, contributing to open-source projects, or sharing knowledge through 
                tech meetups and mentoring.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {["React Enthusiast", "Node.js Expert", "UI/UX Advocate", "Open Source Contributor", "Tech Mentor"].map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm md:text-base hover:bg-primary/20 transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto shadow-elegant border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate with passionate teams. 
                Whether you need a complete web application or want to discuss your next big idea, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start a Conversation
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;