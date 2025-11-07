import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, ShoppingBag, Truck, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Donate = () => {
  const donationTypes = [
    {
      icon: DollarSign,
      title: "Monetary Donations",
      description: "Financial contributions allow us to purchase food in bulk and maintain our operations",
      details: [
        "100% tax-deductible",
        "Secure online or mail-in options",
        "One-time or recurring donations",
        "Every dollar goes directly to feeding families",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Food Donations",
      description: "Non-perishable food items are always needed and greatly appreciated",
      details: [
        "Canned goods (vegetables, fruits, soups)",
        "Pasta, rice, and grains",
        "Peanut butter and jelly",
        "Cereal and breakfast items",
      ],
    },
    {
      icon: Truck,
      title: "Food Drives",
      description: "Organize a food drive at your workplace, school, or community group",
      details: [
        "We provide collection materials",
        "Pickup can be arranged",
        "Great for team building",
        "Makes a significant impact",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Support Our Mission
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your generous donations help us provide free groceries to over 40,000 community members 
            every year. Every contribution makes a real difference in someone's life.
          </p>
        </div>

        {/* Impact Stats */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
          <h2 className="font-display font-bold text-2xl text-center mb-8">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$25</div>
              <div className="text-sm text-muted-foreground">Provides a week's worth of groceries for a family of 4</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50</div>
              <div className="text-sm text-muted-foreground">Supplies fresh produce and proteins for multiple families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$100</div>
              <div className="text-sm text-muted-foreground">Helps stock our pantry for a full distribution day</div>
            </div>
          </div>
        </Card>

        {/* Donation Types */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            Ways to Give
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Heart className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mail-in Donation Info */}
        <Card className="p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl mb-4">
              Mail Your Donation
            </h2>
            <p className="text-muted-foreground mb-6">
              Make checks payable to "Tangi Food Pantry" and mail to:
            </p>
            <div className="bg-secondary/30 rounded-lg p-6 inline-block">
              <p className="font-semibold text-foreground">Tangi Food Pantry</p>
              <p className="text-muted-foreground">Town & Country Plaza</p>
              <p className="text-muted-foreground">2410 W. Thomas St.</p>
              <p className="text-muted-foreground">Hammond, LA 70401</p>
            </div>
            <p className="text-sm text-muted-foreground mt-6 italic">
              Tangi Food Pantry is a 501(c)(3) non-profit organization. All donations are tax-deductible.
            </p>
          </div>
        </Card>

        {/* Drop-off Information */}
        <Card className="p-8 mb-16">
          <h2 className="font-display font-bold text-2xl text-center mb-6">
            Drop Off Food Donations
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
            <p className="text-center">
              You can drop off food donations at our warehouse during operating hours:
            </p>
            <div className="bg-secondary/30 rounded-lg p-6 text-center">
              <p className="font-semibold text-foreground mb-2">Tuesday & Thursday</p>
              <p>1:00 PM - 4:00 PM</p>
              <p className="text-sm mt-4">Town & Country Plaza, 2410 W. Thomas St., Hammond, LA 70401</p>
            </div>
            <p className="text-sm text-center">
              For large donations or to arrange special drop-off times, please contact us in advance.
            </p>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 md:p-12 bg-primary text-primary-foreground text-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Every Gift Makes a Difference
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Thank you for considering a donation to Tangi Food Pantry. Your generosity helps us 
            continue our mission of feeding families in need.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Contact Us About Donating
              <Heart className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Donate;
