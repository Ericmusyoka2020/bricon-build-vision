import { CheckCircle, Users, Award, Clock } from "lucide-react";
import teamImage from "@/assets/team-construction.jpg";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: CheckCircle, label: "Projects Completed", value: "150+" },
    { icon: Clock, label: "On-Time Delivery", value: "98%" },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              About Bricon Building Company Limited
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Established as a leading construction company in Makueni, we specialize in delivering 
              high-quality residential and commercial construction projects. Our commitment to excellence, 
              attention to detail, and client satisfaction has made us the trusted choice for building dreams.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Located along Mombasa Road in Makueni, we serve the entire region with professional 
              construction services, from initial planning to final delivery. Our experienced team 
              ensures every project meets the highest standards of quality and safety.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-construction-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Bricon Building Company construction team"
                className="rounded-lg shadow-construction w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;