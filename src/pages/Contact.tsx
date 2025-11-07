import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            We're here to help. Reach out with questions, to volunteer, or to learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Tangi Food Pantry<br />
                    Town & Country Plaza<br />
                    2410 W. Thomas St.<br />
                    Hammond, LA 70401
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Located in the Winn Dixie shopping center between Anna's Linens and Rent-A-Center
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Operating Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium text-foreground">Distribution Days:</p>
                    <p>Tuesday: 1:00 PM - 4:00 PM</p>
                    <p>Thursday: 1:00 PM - 4:00 PM</p>
                    <p className="text-sm mt-2">No appointment necessary</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a 
                    href="tel:985-420-8551" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (985) 420-8551
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:thetangifoodpantry@yahoo.com" 
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    thetangifoodpantry@yahoo.com
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Map & Social Media */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Find Us</h3>
              <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.8!2d-90.4614!3d30.5044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMwJzE1LjgiTiA5MMKwMjcnNDEuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tangi Food Pantry Location"
                />
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2410+W+Thomas+St,+Hammond,+LA+70401"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center text-sm text-primary hover:underline"
              >
                Get Directions →
              </a>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <p className="text-muted-foreground mb-4">
                Follow us on social media to stay updated on our activities, special programs, and ways to get involved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/20">
              <h3 className="font-semibold text-lg mb-2">Questions About Our Services?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check out our FAQ page for answers to common questions about eligibility, 
                what to expect, and how we can help.
              </p>
              <a 
                href="/faq" 
                className="text-primary hover:underline text-sm font-medium"
              >
                Visit FAQ Page →
              </a>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-primary text-primary-foreground text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-4">
            We're Here to Help
          </h2>
          <p className="mb-2">
            Whether you need food assistance, want to volunteer, or have questions about our services, 
            don't hesitate to reach out.
          </p>
          <p className="text-sm opacity-90">
            We look forward to hearing from you!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
