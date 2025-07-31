import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React JS",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Redux Toolkit",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Material-UI",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "GraphQL", "RESTful APIs"],
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "MySQL",
        "Firebase",
        "Supabase",
        "GraphQL",
        "Prisma",
        "Postman",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "GitLab", "CI/CD", "GitHub Actions"],
    },

    {
      title: "Other",
      skills: [
        "Team Collaboration",
        "RESTful APIs",
        "WebSockets",
        "Progressive Web Apps",
        "SEO",
        "Analytics",
      ],
    },
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
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-10">
              {/* Frontend */}
              <div className="flex-1 flex flex-col items-center bg-primary/5 rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-extrabold text-primary">
                      95%
                    </span>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-primary/30 blur-sm opacity-60"></div>
                </div>
                <h4 className="font-semibold text-xl mb-2 text-foreground">
                  Frontend Development
                </h4>
                <p className="text-muted-foreground text-base text-center">
                  React, JavaScript, Modern CSS
                </p>
              </div>
              {/* Backend */}
              <div className="flex-1 flex flex-col items-center bg-primary/5 rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-extrabold text-primary">
                      80%
                    </span>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-primary/30 blur-sm opacity-60"></div>
                </div>
                <h4 className="font-semibold text-xl mb-2 text-foreground">
                  Backend Development
                </h4>
                <p className="text-muted-foreground text-base text-center">
                  Node.js, APIs, Databases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
