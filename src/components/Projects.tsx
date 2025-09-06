import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Building } from "lucide-react";
import projectImage from "@/assets/project-apartments.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Kyambeke Apartments",
      location: "Makueni Town",
      completionDate: "December 2023",
      description: "Modern 3-story residential apartment complex with 12 units, featuring contemporary design and quality finishes.",
      type: "Residential",
      image: projectImage
    },
    {
      name: "Makueni Commercial Plaza",
      location: "Mombasa Road, Makueni",
      completionDate: "August 2023",
      description: "Multi-purpose commercial building with retail spaces and offices, built to modern standards.",
      type: "Commercial",
      image: projectImage
    },
    {
      name: "Wote Housing Estate",
      location: "Wote, Makueni",
      completionDate: "March 2024",
      description: "Affordable housing project featuring 20 family homes with modern amenities and infrastructure.",
      type: "Residential",
      image: projectImage
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our commitment to quality construction and client satisfaction 
            through successful project completions across Makueni region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-construction transition-smooth animate-slide-up overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-construction-orange text-construction-orange-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-construction-orange" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-construction-orange" />
                    Completed: {project.completionDate}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Building className="h-4 w-4 mr-2 text-construction-orange" />
                    {project.type} Construction
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;