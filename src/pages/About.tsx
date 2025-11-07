import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every individual with dignity, respect, and kindness",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're powered by volunteers who care deeply about our neighbors",
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Focused on eliminating hunger and food insecurity in Tangipahoa Parish",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing quality service and nutritious food options",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            About Tangi Food Pantry
          </h1>
          <p className="text-lg text-muted-foreground">
            Serving our community with compassion and dignity since our founding
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-primary/5 to-secondary/10">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Tangi Food Pantry is a local, volunteer, non-profit organization dedicated to providing 
            free groceries to members of our community who are experiencing food insecurity. We serve over 
            40,000 individuals annually, ensuring that no one in our community goes hungry.
          </p>
        </Card>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl text-center mb-8">Our Story</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
            <p>
              Founded by compassionate community members who recognized the growing need for food assistance 
              in Tangipahoa Parish, Tangi Food Pantry has grown from a small operation to one of the region's 
              most trusted sources of food support.
            </p>
            <p>
              Our warehouse and distribution site is located in Hammond in the Town & Country Plaza, easily 
              accessible to those who need our services. We operate entirely through the dedication of 
              volunteers who believe in making a difference in their neighbors' lives.
            </p>
            <p>
              Every Tuesday and Thursday, we open our doors from 1:00 PM to 4:00 PM, welcoming families 
              and individuals who need nutritious food. We're proud to be a 501(c)(3) non-profit organization, 
              ensuring that donations go directly to serving those in need.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-soft transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
          <h2 className="font-display font-bold text-3xl text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">40,000+</div>
              <div className="text-sm opacity-90">People Served Annually</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Volunteer Powered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2 Days</div>
              <div className="text-sm opacity-90">Weekly Distribution</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
