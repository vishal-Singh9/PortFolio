import { Code, Coffee, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "5+ Years Experience",
      description: "Building web applications with modern technologies"
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborate effectively with designers and developers"
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Always staying up-to-date with the latest tech trends"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating innovative web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated full-stack developer with over 5 years of experience creating 
              web applications that combine beautiful design with robust functionality. My 
              journey in tech started with a curiosity about how websites work, and it has 
              evolved into a passion for building digital experiences that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge through tech meetups and mentoring. 
              I believe in writing clean, maintainable code and creating user experiences 
              that delight and inspire.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                React Enthusiast
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                Node.js Expert
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                UI/UX Advocate
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;