import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, ShoppingBag, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  const stats = [
    { value: "40,000+", label: "People Served Annually" },
    { value: "100%", label: "Volunteer Operated" },
    { value: "2 Days", label: "Open Weekly" },
    { value: "Free", label: "Always" },
  ];

  const services = [
    {
      icon: ShoppingBag,
      title: "Free Groceries",
      description: "Quality food items and essential groceries for families in need",
    },
    {
      icon: Heart,
      title: "Food of the Month",
      description: "Special monthly programs providing additional nutritional support",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "A welcoming environment where everyone is treated with dignity",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              Welcome to Tangi Food Pantry
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A local, volunteer, non-profit organization providing free groceries to over 40,000 members 
              of our community every year who are in desperate need of food assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              How We Help
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mission is to provide essential food assistance to families and individuals in need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-6">
                Visit Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    Operating Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                      <span>Tuesday: 1:00 PM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                      <span>Thursday: 1:00 PM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Location</h3>
                  <p className="text-muted-foreground mb-4">
                    Town & Country Plaza<br />
                    2410 W. Thomas St.<br />
                    Hammond, LA 70401
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Located in the Winn Dixie shopping center between Anna's Linens and Rent-A-Center
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Get Directions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Make a Difference Today
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Your support helps us provide essential food assistance to thousands of families in our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/donate">
                  Donate Now
                  <Heart className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
