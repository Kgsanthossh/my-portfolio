import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const About = () => {
  const highlights = [
    "Full Stack Development",
    "Embedded Systems & IoT",
    "Modern Web Technologies",
    "Hardware Integration",
    "Firebase & Real-time Systems",
    "Problem Solving",
    "Team Collaboration",
    "Continuous Learning"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting digital solutions with passion and precision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm K.G Santhossh, a passionate full stack developer and embedded systems enthusiast 
              with expertise in both web technologies and IoT solutions. I specialize in creating comprehensive 
              digital experiences that bridge the gap between software and hardware.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from developing modern web applications using React and Node.js to building 
              innovative IoT projects like home automation systems, smart traffic signals, and real-time 
              monitoring solutions using Arduino, Raspberry Pi, and Firebase integration.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in creating solutions that not only solve real-world problems but also provide 
              seamless user experiences. Whether it's a responsive web application or an embedded system 
              monitoring water levels, I approach each project with the same attention to detail and 
              commitment to excellence.
            </p>
          </div>
          
          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">What I Do Best</h3>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight) => (
                  <Badge
                    key={highlight}
                    variant="secondary"
                    className="p-3 text-center justify-center bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;