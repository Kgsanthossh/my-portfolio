import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const embeddedProjects = [
    {
      title: "SmartHaus - IoT-Based Home Automation",
      description: "Developed a web-enabled system for remote control of lights, fans, and appliances using Blynk and NodeMCU. Enabled real-time energy monitoring and automation for improved efficiency. Implemented secure cloud integration for data storage and control.",
      technologies: ["NodeMCU", "Blynk", "Firebase", "Mobile App", "Cloud Integration"],
      period: "2023",
      type: "IoT Project",
      features: ["Remote Control", "Energy Monitoring", "Secure Cloud Integration", "Mobile Dashboard", "Real-time Automation"]
    },
    {
      title: "SmartAqua - IoT Water Tank Monitoring System",
      description: "Built ultrasonic sensor-based water level monitoring with alerts via Blynk and Firebase. Reduced manual water checks and improved water resource management. Integrated automatic pump logic to maintain water levels with 95% accuracy in level detection.",
      technologies: ["ESP32", "Ultrasonic Sensors", "Blynk", "Firebase", "Mobile App"],
      period: "2023",
      type: "IoT Monitoring",
      features: ["Water Level Monitoring", "Automatic Pump Control", "SMS & App Alerts", "95% Accuracy", "Resource Management"]
    },
    {
      title: "SmartSignal - STM32-Based Traffic Light System",
      description: "Developed a traffic light system with object detection using STM32F103C8. Implemented emergency vehicle stop logic with STM32 HAL libraries and GPIO control. Simulated in Proteus to ensure reliability before hardware deployment.",
      technologies: ["STM32F103C8", "HAL Libraries", "GPIO Control", "Proteus", "Object Detection"],
      period: "2023",
      type: "Smart City",
      features: ["Object Detection", "Emergency Vehicle Priority", "Hardware Simulation", "Real-time Control", "Reliable Operation"]
    }
  ];

  const coreProjects = [
    {
      title: "Smart Farming Ocean Water Into Sustainable Energy",
      description: "A revolutionary energy storage system utilizes seawater and sand boilers to generate electricity sustainably. The system harnesses the natural salt content in seawater, converts it into steam, and drives turbines to produce electricity. Reducing dependence on fossil fuels and combating climate change.",
      technologies: ["Energy Storage", "Seawater Processing", "Steam Turbines", "Sustainable Energy"],
      period: "2023",
      type: "Core Project",
      features: ["Sustainable Energy", "Ocean Water Processing", "Steam Generation", "Eco-friendly Solution", "Climate Change Mitigation"]
    },
    {
      title: "Electricity Production by Kinetic Energy",
      description: "Fast-track kinetic energy harvesting railway turbines. This design offers an innovative and sustainable solution for train power needs. The system works by embedding piezoelectric materials, hydraulic mechanisms, or mechanical components in railway infrastructure to capture kinetic energy.",
      technologies: ["Kinetic Energy", "Piezoelectric Materials", "Railway Infrastructure", "Energy Harvesting"],
      period: "2023",
      type: "Core Project",
      features: ["Kinetic Energy Harvesting", "Railway Integration", "Sustainable Power", "Innovative Design", "Infrastructure Enhancement"]
    }
  ];

  const fullStackProjects = [
    {
      title: "COVID Online Vaccination Booking Platform",
      description: "The Online COVID-19 Vaccine Booking System is a web-based platform designed to facilitate the appointment booking process for individuals seeking to receive a COVID-19 vaccine. The system allows users to easily schedule their vaccination appointments and receive necessary reminders and notifications regarding their vaccination schedule.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Authentication"],
      period: "2023",
      type: "Full Stack Project",
      features: ["Appointment Booking", "User Authentication", "Vaccination Reminders", "Admin Dashboard", "Notification System"]
    },
    {
      title: "LOFOO - Online Food Delivery App for Street Vendors",
      description: "LOFOO is a mobile-based application designed to connect street food vendors with customers who wish to order food online. The app provides a platform for local street vendors to showcase their food offerings, accept orders, and deliver meals directly to customers. The app aims to modernize the street food experience and improve vendor visibility.",
      technologies: ["React Native", "Firebase", "Node.js", "Express", "Payment Gateway"],
      period: "2023",
      type: "Full Stack Project",
      features: ["Mobile Platform", "Vendor Management", "Order Processing", "Payment Integration", "Real-time Tracking"]
    },
    {
      title: "Pet Grooming and Boarding Management System",
      description: "The objective of the Pet Grooming and Boarding Management System is to streamline and automate scheduling, improve customer service, and centralize data management for pet grooming and boarding services. This system allows pet owners to book appointments, track resources, manage pet records, and maintain accurate information.",
      technologies: ["React", "MySQL", "Node.js", "Express", "Booking System"],
      period: "2023",
      type: "Full Stack Project",
      features: ["Appointment Scheduling", "Pet Record Management", "Service Tracking", "Customer Management", "Automated Notifications"]
    }
  ];

  const certifications = [
    "Html and CSS for beginners | Udemy",
    "C Basics From Simplilearn | Simplilearn", 
    "Java",
    "9 hours hackathon certificate",
    "Business plan Hackathon held at NIT Trichy",
    "FIESTA HACKATHON held at KPR Institute of Engineering and Technology"
  ];

  const programmingAchievements = [
    "Built Multiple IoT Projects Using Embedded C and ESP8266",
    "Developed a Smart Traffic Light System using STM32F103C8",
    "Created 'LOFOO' - Online Food Delivery App for Street Vendors",
    "Proficient in Embedded C, Arduino, and Real-Time Sensor Integration",
    "Consistently Ranked Among Top 10 in College Hackathons and Coding Events"
  ];


  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience & Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my professional journey and creative projects
          </p>
        </div>
        
        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Programming Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">Programming Achievements</h3>
          <div className="space-y-4">
            {programmingAchievements.map((achievement, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Projects Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center gradient-text">Featured Projects</h3>
          
          {/* Full Stack Projects */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-primary">Full Stack Projects</h4>
            <div className="grid md:grid-cols-3 gap-6 stagger-animation">
              {fullStackProjects.map((project, index) => (
                <Card key={index} className="glass-card hover-lift group border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/30">
                      {project.type}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Features:</p>
                        <div className="space-y-1">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-xs">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Projects */}
          <div className="mb-12">
  <h4 className="text-2xl font-semibold mb-6 text-emerald-400">Core Projects</h4>

  <div className="grid md:grid-cols-2 gap-6 stagger-animation">
    {coreProjects.map((project, index) => (
      <Card key={index} className="glass-card hover-lift group border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-lg text-green-400 group-hover:text-green-300 transition-colors font-bold">
            {project.title}
          </CardTitle>
          <Badge className="w-fit bg-green-900/20 text-green-400 border-green-400/30">
            {project.type}
          </Badge>
        </CardHeader>

        <CardContent>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            {project.description}
          </p>

          <div className="space-y-3">
            {/* Technologies */}
            <div>
              <p className="text-sm font-medium mb-2 text-white">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="text-xs border-green-400 text-green-300 bg-green-900/10">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="text-sm font-medium mb-2 text-white">Features:</p>
              <div className="space-y-1">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-xs text-gray-200">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

          
          {/* Embedded Systems Projects */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-accent">Embedded Systems & IoT Projects</h4>
            <div className="grid md:grid-cols-3 gap-6 stagger-animation">
              {embeddedProjects.map((project, index) => (
                <Card key={index} className="glass-card hover-lift group border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent group-hover:text-accent/80 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit bg-accent/10 text-accent border-accent/30">
                      {project.type}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-accent/30 text-accent">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Features:</p>
                        <div className="space-y-1">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-xs">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;