import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Wrench, PaintBucket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential building projects designed to your specifications.",
      features: ["Custom Home Design", "Home Renovations", "Extensions & Additions"]
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities built to professional standards.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses"]
    },
    {
      icon: Wrench,
      title: "General Contracting",
      description: "Complete project management from planning to completion with quality assurance.",
      features: ["Project Management", "Quality Control", "Timeline Management"]
    },
    {
      icon: PaintBucket,
      title: "Finishing Works",
      description: "Interior and exterior finishing services to bring your project to perfection.",
      features: ["Interior Finishing", "Exterior Work", "Painting & Decoration"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction services to meet all your building needs, 
            from residential homes to commercial projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-construction transition-smooth animate-slide-up">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-construction-orange mx-auto" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-construction-orange rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;