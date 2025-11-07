import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const Calendar = () => {
  const upcomingEvents = [
    {
      title: "Food Distribution",
      date: "Every Tuesday",
      time: "1:00 PM - 4:00 PM",
      location: "Town & Country Plaza, Hammond",
      description: "Regular food distribution for community members in need",
    },
    {
      title: "Food Distribution",
      date: "Every Thursday",
      time: "1:00 PM - 4:00 PM",
      location: "Town & Country Plaza, Hammond",
      description: "Regular food distribution for community members in need",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <CalendarIcon className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Our Calendar
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay informed about our distribution schedule and upcoming events
          </p>
        </div>

        {/* Regular Schedule */}
        <Card className="p-8 md:p-12 mb-16 max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/20">
          <h2 className="font-display font-bold text-3xl text-center mb-8">
            Regular Distribution Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-card">
              <div className="text-center mb-4">
                <div className="inline-block bg-primary/10 rounded-full px-6 py-2">
                  <p className="font-display font-bold text-2xl text-primary">Tuesday</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <span>1:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-start text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                  <span>Town & Country Plaza<br />2410 W. Thomas St.<br />Hammond, LA 70401</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <div className="text-center mb-4">
                <div className="inline-block bg-primary/10 rounded-full px-6 py-2">
                  <p className="font-display font-bold text-2xl text-primary">Thursday</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <span>1:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-start text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                  <span>Town & Country Plaza<br />2410 W. Thomas St.<br />Hammond, LA 70401</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            No appointment necessary • All are welcome • Free services
          </p>
        </Card>

        {/* Upcoming Events */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl text-center mb-8">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <CalendarIcon className="w-4 h-4 text-primary mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground md:text-right">
                    <MapPin className="w-4 h-4 text-primary mr-2 md:hidden" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Food of the Month */}
        <Card className="p-8 max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-2xl text-center mb-4">
            Food of the Month Program
          </h2>
          <p className="text-muted-foreground text-center mb-4">
            Each month, we feature a special "Food of the Month" program, highlighting specific nutritious 
            items and providing additional support to families in need.
          </p>
          <p className="text-sm text-center text-muted-foreground">
            Visit us during distribution hours or check our social media for details about this month's featured items.
          </p>
        </Card>

        {/* Newsletter Archive */}
        <Card className="p-8 max-w-3xl mx-auto bg-secondary/30">
          <h2 className="font-display font-bold text-2xl text-center mb-6">
            Newsletter Archive
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Read our past newsletters to learn more about our activities and impact in the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/newsletters/2012.pdf"
              className="inline-block px-6 py-3 bg-card rounded-lg text-center hover:shadow-card transition-shadow"
            >
              <span className="font-semibold text-primary">2012 Newsletter</span>
            </a>
            <a
              href="/newsletters/2011.pdf"
              className="inline-block px-6 py-3 bg-card rounded-lg text-center hover:shadow-card transition-shadow"
            >
              <span className="font-semibold text-primary">2011 Newsletter</span>
            </a>
            <a
              href="/newsletters/2010.pdf"
              className="inline-block px-6 py-3 bg-card rounded-lg text-center hover:shadow-card transition-shadow"
            >
              <span className="font-semibold text-primary">2010 Newsletter</span>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
