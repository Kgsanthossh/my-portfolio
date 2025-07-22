import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            K.G Santhossh
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Embedded Systems Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Creating innovative digital solutions from web applications to IoT systems. 
            Bridging the gap between software and hardware with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
              onClick={() => scrollToSection('about')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/Kgsanthossh', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/santhossh-k-g-a0bb47349/', label: 'LinkedIn' },
              { icon: Mail, href: 'kgsanthossh2307@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover-lift"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="w-5 h-5 mb-1" />
            <span className="text-sm">Scroll Down</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;