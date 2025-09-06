import { Building2, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-steel text-construction-steel-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-construction-orange" />
              <div>
                <h3 className="text-xl font-bold">Bricon Building Company Limited</h3>
                <p className="text-sm opacity-90">Building Your Vision, Brick by Brick</p>
              </div>
            </div>
            
            <p className="text-sm opacity-80 mb-6 max-w-md">
              Professional construction services in Makueni and surrounding areas. 
              We deliver quality construction projects with integrity, excellence, and attention to detail.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-construction-orange" />
                <span>0116152971</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-construction-orange" />
                <span>mwinzibrian6@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-construction-orange" />
                <span>Makueni, along Mombasa Road</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>General Contracting</li>
              <li>Finishing Works</li>
              <li>Renovations</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:text-construction-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-construction-orange transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-construction-orange transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-construction-orange transition-colors">Contact</a></li>
              <li><a href="#quote" className="hover:text-construction-orange transition-colors">Get Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Bricon Building Company Limited. All rights reserved. | Building excellence since our founding.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;