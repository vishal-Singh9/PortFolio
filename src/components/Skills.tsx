import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Sass", "Vue.js", "Angular", "Material-UI", "Chakra UI"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express.js", "Python", "Django", "FastAPI", "PHP",
        "Laravel", "Ruby on Rails", "Go", "Java", "C#", ".NET"
      ]
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Firebase",
        "Supabase", "DynamoDB", "Elasticsearch", "GraphQL", "Prisma"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud",
        "CI/CD", "Jenkins", "GitHub Actions", "Webpack", "Vite", "Jest"
      ]
    },
    {
      title: "Design & UI/UX",
      skills: [
        "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator",
        "User Research", "Wireframing", "Prototyping", "Design Systems"
      ]
    },
    {
      title: "Other",
      skills: [
        "Agile", "Scrum", "RESTful APIs", "Microservices", "WebSockets",
        "Progressive Web Apps", "Mobile Development", "SEO", "Analytics"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Proficiency Levels
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Frontend Development</h4>
                <p className="text-muted-foreground">React, TypeScript, Modern CSS</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">90%</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Backend Development</h4>
                <p className="text-muted-foreground">Node.js, APIs, Databases</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">85%</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">DevOps & Cloud</h4>
                <p className="text-muted-foreground">AWS, Docker, CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;