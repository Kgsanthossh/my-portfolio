import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Sri Eshwar College of Engineering",
      degree: "Bachelor of Engineering",
      field: "Electrical & Electronics Engineering",
      period: "2023 - 2027",
      cgpa: "7.6",
      location: "Coimbatore, Tamil Nadu",
      type: "college",
      description: "Pursuing degree in Electrical & Electronics Engineering with focus on embedded systems, IoT technologies, and power electronics. Developing expertise in circuit design, microcontrollers, and automation systems.",
      highlights: [
        "Embedded Systems & IoT Projects",
        "Power Electronics & Control Systems",
        "Microcontroller Programming",
        "Circuit Theory & Design"
      ]
    },
    {
      institution: "Little Scholars Matric Higher Secondary School",
      degree: "Higher Secondary Certificate",
      field: "Science",
      period: "2022 - 2023",
      percentage: "90%",
      location: "Tamil Nadu",
      type: "school",
      description: "Completed higher secondary education with excellent performance, securing 90% marks with focus on Mathematics, Physics, Chemistry, and Computer Science.",
      highlights: [
        "90% Academic Performance",
        "Mathematics & Science Excellence",
        "Physics & Chemistry Specialization",
        "Computer Science Foundation"
      ]
    },
    {
      institution: "Morning Star Matriculation School",
      degree: "Secondary School Leaving Certificate",
      field: "General Studies",
      period: "2020 - 2021",
      result: "Pass",
      location: "Tamil Nadu",
      type: "school",
      description: "Completed secondary education building strong foundation in core subjects and developing fundamental academic skills.",
      highlights: [
        "Strong Academic Foundation",
        "Mathematics & Science",
        "Language Skills",
        "General Knowledge"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving abilities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        edu.type === 'college' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <GraduationCap className={`w-6 h-6 ${
                          edu.type === 'college' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{edu.institution}</h3>
                        <p className={`text-lg font-medium mb-1 ${
                          edu.type === 'college' ? 'text-primary' : 'text-accent'
                        }`}>
                          {edu.degree}
                        </p>
                        {edu.field && (
                          <p className="text-muted-foreground mb-3">{edu.field}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            edu.type === 'college' ? 'bg-primary' : 'bg-accent'
                          }`}></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                    <div className="space-y-4">
                    <Badge 
                      variant="outline" 
                      className={`w-fit ${
                        edu.type === 'college' 
                          ? 'border-primary/30 text-primary' 
                          : 'border-accent/30 text-accent'
                      }`}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </Badge>
                    
                    {(edu.cgpa || edu.percentage || edu.result) && (
                      <Badge 
                        variant="secondary" 
                        className="w-fit bg-green-500/10 text-green-600 border-green-500/20"
                      >
                        {edu.cgpa && `CGPA: ${edu.cgpa}`}
                        {edu.percentage && `${edu.percentage}`}
                        {edu.result && !edu.cgpa && !edu.percentage && edu.result}
                      </Badge>
                    )}
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className={`w-fit ${
                        edu.type === 'college' 
                          ? 'bg-primary/10 text-primary border-primary/20' 
                          : 'bg-accent/10 text-accent border-accent/20'
                      }`}
                    >
                      {edu.type === 'college' ? 'Engineering' : 'School'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Academic Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Academic Focus</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Database Systems",
              "Computer Networks",
              "Software Engineering",
              "Embedded Systems",
              "IoT Development",
              "Web Technologies",
              "Mobile Computing",
              "Machine Learning Basics"
            ].map((subject) => (
              <Badge
                key={subject}
                variant="outline"
                className="px-4 py-2 text-sm border-muted-foreground/30 hover:bg-muted/50 transition-all duration-300"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;