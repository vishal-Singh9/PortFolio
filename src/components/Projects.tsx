import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and offline capabilities.",
      image: weatherImg,
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "PWA"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/alexjohnson/weather-app",
      featured: true
    },
    {
      title: "Project Management Tool",
      description: "Comprehensive project management solution with team collaboration, task tracking, and real-time updates. Includes kanban boards, time tracking, and reporting features.",
      image: dashboardImg,
      technologies: ["Next.js", "PostgreSQL", "Prisma", "WebSockets", "Material-UI"],
      liveUrl: "https://project-manager-demo.com",
      githubUrl: "https://github.com/alexjohnson/project-manager",
      featured: true
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media performance tracking with data visualization and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "D3.js", "Redis"],
      liveUrl: "https://social-analytics-demo.com",
      githubUrl: "https://github.com/alexjohnson/social-analytics",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, student progress tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC", "Docker"],
      liveUrl: "https://lms-demo.com",
      githubUrl: "https://github.com/alexjohnson/lms",
      featured: false
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management and market analysis tools.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "CoinGecko API", "Redux", "Expo"],
      liveUrl: "https://crypto-tracker-demo.com",
      githubUrl: "https://github.com/alexjohnson/crypto-tracker",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-foreground mb-4">
            Other Notable Projects
          </h3>
          <p className="text-muted-foreground">
            Additional projects showcasing diverse skills and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-4 space-y-3">
                <h4 className="font-semibold text-foreground">{project.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
