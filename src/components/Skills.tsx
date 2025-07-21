import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Electrical & Electronics",
      skills: [
        { name: "Power Electronics", level: 85 },
        { name: "Circuit Theory", level: 90 },
        { name: "Control Systems", level: 80 },
        { name: "Electrical Machines", level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Embedded C", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 90 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Embedded Systems & IoT",
      skills: [
        { name: "Arduino", level: 90 },
        { name: "Raspberry Pi", level: 85 },
        { name: "ESP32/ESP8266", level: 85 },
        { name: "Sensors & Actuators", level: 80 }
      ]
    },
    {
      title: "Platforms & Tools",
      skills: [
        { name: "Blynk", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "ThingSpeak", level: 80 },
        { name: "STM32CubeIDE", level: 85 },
        { name: "Arduino IDE", level: 90 },
        { name: "Proteus", level: 85 }
      ]
    }
  ];

  const technologies = [
    "Embedded C", "Arduino", "ESP8266", "ESP32", "STM32F103C8", "NodeMCU",
    "Raspberry Pi", "Sensor Integration", "Microcontrollers", "Python", "C",
    "Java", "JavaScript", "HTML", "CSS", "Firebase", "Blynk", "ThingSpeak",
    "STM32CubeIDE", "Arduino IDE", "Proteus", "Figma", "Power Electronics",
    "Circuit Design", "Control Systems", "IoT", "Embedded Systems", "HAL Libraries"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-animation">
          {skillCategories.map((category) => (
            <Card key={category.title} className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="text-center text-xl gradient-text">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover-lift"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;