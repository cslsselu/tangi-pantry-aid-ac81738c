import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can receive food from Tangi Food Pantry?",
      answer: "Anyone in need of food assistance is welcome at Tangi Food Pantry. We serve residents of Tangipahoa Parish and surrounding areas. There is no income verification required, and we treat everyone with dignity and respect.",
    },
    {
      question: "What do I need to bring to receive food?",
      answer: "Simply come during our operating hours (Tuesday and Thursday, 1-4 PM). No appointment is necessary. We recommend bringing bags or boxes to carry your groceries home.",
    },
    {
      question: "How often can I visit the food pantry?",
      answer: "You are welcome to visit during each distribution day if you need assistance. We're here to help ensure you and your family have access to nutritious food.",
    },
    {
      question: "What types of food do you provide?",
      answer: "We provide a variety of non-perishable items including canned goods, pasta, rice, cereal, and other staples. When available, we also offer fresh produce, bread, and other perishable items. Our goal is to provide well-rounded groceries that can help prepare complete meals.",
    },
    {
      question: "Are your services really free?",
      answer: "Yes, absolutely! All of our services are completely free. We are a non-profit organization dedicated to helping those in need, and we never charge for food or services.",
    },
    {
      question: "Do you accommodate special dietary needs?",
      answer: "We do our best to accommodate special dietary needs when possible. While we cannot guarantee specific items will always be available, please let our volunteers know about any dietary restrictions, and we'll help as much as we can.",
    },
    {
      question: "How can I volunteer?",
      answer: "We're always looking for volunteers! You can help with food distribution, warehouse organization, or other tasks. Visit our 'Join Us' page or contact us directly to learn more about volunteer opportunities.",
    },
    {
      question: "What items do you need most for donations?",
      answer: "Non-perishable items are always needed, including canned vegetables, canned fruits, soups, pasta, rice, cereal, peanut butter, and canned proteins (tuna, chicken, etc.). Monetary donations are also greatly appreciated as they allow us to purchase food in bulk.",
    },
    {
      question: "Is Tangi Food Pantry a religious organization?",
      answer: "While many of our volunteers are motivated by their faith, Tangi Food Pantry is a non-denominational organization. We serve everyone regardless of religion, race, gender, or any other factor.",
    },
    {
      question: "How is Tangi Food Pantry funded?",
      answer: "We are funded entirely through donations from individuals, businesses, churches, and community organizations. We are a 501(c)(3) non-profit, and all donations are tax-deductible.",
    },
    {
      question: "Can I organize a food drive?",
      answer: "Yes! Food drives are a wonderful way to support our mission. We can provide collection materials and arrange pickup. Visit our 'Donate' page or contact us to learn more about organizing a food drive.",
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We follow all food safety guidelines and handle all food with care. Our facility is clean and well-maintained, and we ensure that all food distributed meets quality and safety standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, eligibility, and how you can help
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Still Have Questions */}
        <Card className="p-8 md:p-12 bg-primary text-primary-foreground text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6 opacity-90">
            We're here to help! Feel free to reach out to us with any questions or concerns.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Phone:</strong> (985) 420-8551
            </p>
            <p>
              <strong>Email:</strong> thetangifoodpantry@yahoo.com
            </p>
            <p>
              <strong>Visit:</strong> Tuesday & Thursday, 1:00 PM - 4:00 PM
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
