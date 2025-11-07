import { Card } from "@/components/ui/card";
import { ShoppingBag, Apple, Heart, Package, Users, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Free Grocery Distribution",
      description: "We provide a variety of essential groceries including non-perishable items, fresh produce when available, and household necessities.",
      features: [
        "No income verification required",
        "Respectful and dignified service",
        "Quality food items",
        "Sufficient quantities for families",
      ],
    },
    {
      icon: Apple,
      title: "Food of the Month Program",
      description: "Our special monthly program highlights specific nutritious foods, providing additional support to families in need.",
      features: [
        "Fresh seasonal produce",
        "Nutritional information provided",
        "Recipe suggestions",
        "Special dietary considerations",
      ],
    },
    {
      icon: Package,
      title: "Emergency Food Assistance",
      description: "For families facing immediate food crises, we provide emergency food packages to help bridge the gap.",
      features: [
        "Same-day assistance available",
        "No appointment necessary",
        "Comprehensive food packages",
        "Compassionate service",
      ],
    },
  ];

  const eligibility = [
    "Residents of Tangipahoa Parish and surrounding areas",
    "Individuals and families experiencing food insecurity",
    "No income verification required",
    "All are welcome - we serve with dignity and respect",
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Providing essential food assistance to our community with compassion and dignity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-soft transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Heart className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Operating Hours */}
        <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-secondary/20 to-background">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-3xl text-center mb-6">
              Distribution Hours
            </h2>
            <div className="text-center space-y-4">
              <div className="inline-block bg-card rounded-lg p-6 shadow-card">
                <p className="text-2xl font-semibold text-primary mb-2">Tuesday & Thursday</p>
                <p className="text-xl text-foreground">1:00 PM - 4:00 PM</p>
              </div>
              <p className="text-muted-foreground mt-4">
                Please arrive during operating hours. No appointment necessary.
              </p>
            </div>
          </div>
        </Card>

        {/* Eligibility */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl text-center mb-6">
              Who Can Receive Assistance?
            </h2>
            <ul className="space-y-3">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary text-sm font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              We believe everyone deserves access to nutritious food. No one will be turned away.
            </p>
          </Card>
        </div>

        {/* Location */}
        <Card className="p-8 bg-primary text-primary-foreground text-center">
          <h2 className="font-display font-bold text-2xl mb-4">Visit Us</h2>
          <p className="text-lg mb-2">Town & Country Plaza</p>
          <p className="mb-2">2410 W. Thomas St., Hammond, LA 70401</p>
          <p className="text-sm opacity-90">
            Located in the Winn Dixie shopping center between Anna's Linens and Rent-A-Center
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Services;
