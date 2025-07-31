import { ExternalLink, Github, Star, Calendar, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import windCarImg from "@/assets/project-WindCar.webp";
import mannImg from "@/assets/project-Mann.webp";
import manAndVanImg from "@/assets/project-MaV.webp";
import maidImg from "@/assets/project-Maid.webp";

const Projects = () => {
  const projects = [
    {
      title: "Wind Car",
      description:
        "Wind Car is a platform that provides car rental services to businesses. It is a comprehensive solution for all your car rental needs.",
      image: windCarImg,
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Material-UI",
      ],
      liveUrl: "https://wind-car.vercel.app/",
      githubUrl: "https://github.com/vishal-Singh9/Wind-Car",
      featured: true,
      year: "2024",
      status: "Live",
    },
    {
      title: "Mann HR Consultancy",
      description:
        "Mann HR Consultancy is a platform that provides HR services to businesses. It is a comprehensive solution for all your HR needs.",
      image: mannImg,
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Material-UI",
      ],
      liveUrl: "https://mann-pi.vercel.app/",
      githubUrl: "https://github.com/vishal-Singh9/Mann",
      featured: true,
      year: "2024",
      status: "Live",
    },

    {
      title: "Man And Van",
      description:
        "Man And Van is a UK-based platform offering job and service listings for businesses. The project utilizes React Native, and I am responsible for developing the Admin Panel.",
      image: manAndVanImg,
      technologies: [
        "React Native",
        "React JS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Material-UI",
      ],
      liveUrl: "https://www.manandvan.app/",
      featured: true,
      year: "2017",
      status: "Live",
    },
    {
      title: "Maid The App",
      description:
        "Maid The App is a UK-based platform offering job and service listings for businesses. The project utilizes React Native, and I am responsible for developing the Admin Panel.",
      image: maidImg,
      technologies: [
        "React.js",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Material-UI",
      ],
      liveUrl: "https://www.maid.co.uk/",
      featured: true,
      year: "2022",
      status: "Live",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      image: ecommerceImg,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "Tailwind CSS",
      ],
      // liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/vishalsingh/ecommerce",
      featured: true,
      year: "2024",
      status: "Live",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work and creative solutions that demonstrate
            my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in border-2 hover:border-primary/20 bg-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Star className="w-5 h-5 text-primary" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto shadow-elegant border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                These projects represent just a fraction of what I can build.
                Let's discuss your project and create something amazing
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="https://github.com/vishal-Singh9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Start a Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
