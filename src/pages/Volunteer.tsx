import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Clock, Heart, CheckCircle2, Mail } from "lucide-react";

const Volunteer = () => {
  const opportunities = [
    {
      title: "Food Distribution",
      description: "Help distribute groceries to families during our operating hours",
      time: "Tuesday & Thursday, 1-4 PM",
    },
    {
      title: "Warehouse Organization",
      description: "Assist with sorting, organizing, and stocking food items",
      time: "Flexible scheduling available",
    },
    {
      title: "Client Services",
      description: "Welcome and assist clients with a friendly, compassionate approach",
      time: "Tuesday & Thursday, 1-4 PM",
    },
    {
      title: "Transportation",
      description: "Help transport food donations from collection sites to our warehouse",
      time: "As needed",
    },
  ];

  const benefits = [
    "Make a direct impact in your community",
    "Meet like-minded, caring individuals",
    "Flexible scheduling options",
    "Gain valuable experience",
    "Help fight food insecurity",
    "Be part of something meaningful",
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Join Our Volunteer Team
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of a compassionate community making a real difference. We're 100% volunteer-powered, 
            and we couldn't serve our community without dedicated people like you.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              <Mail className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
          </Button>
        </div>

        {/* Why Volunteer */}
        <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-3xl text-center mb-6">
              Why Volunteer With Us?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Volunteering at Tangi Food Pantry is more than just giving your time—it's about being 
              part of a community that cares. Every hour you contribute directly helps families put 
              food on their tables.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
                <h3 className="font-display font-semibold text-xl mb-3">{opportunity.title}</h3>
                <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                <div className="flex items-center text-sm text-primary">
                  <Clock className="w-4 h-4 mr-2" />
                  {opportunity.time}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <Card className="p-8 mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl text-center mb-6">
              Volunteer Requirements
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary text-sm font-semibold">1</span>
                </div>
                <p>Must be at least 16 years old (younger volunteers welcome with parent/guardian)</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary text-sm font-semibold">2</span>
                </div>
                <p>Ability to lift and carry boxes (typically 10-30 lbs)</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary text-sm font-semibold">3</span>
                </div>
                <p>Compassionate, respectful attitude toward all clients and fellow volunteers</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary text-sm font-semibold">4</span>
                </div>
                <p>Commitment to maintaining client confidentiality</p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 md:p-12 bg-primary text-primary-foreground text-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and help us serve our community. 
            Contact us today to get started!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contact Us
                <Mail className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Volunteer;
