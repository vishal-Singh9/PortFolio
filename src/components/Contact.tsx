import { useState } from "react";
import { Mail, MapPin, Phone, Send, Download, MessageSquare, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Resume from "@/assets/VishalSingh_Resume.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vishal.sng9@gmail.com",
      link: "mailto:vishal.sng9@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9956414364",
      link: "tel:+919956414364",
      description: "Call me for quick chats"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Varanasi, Uttar Pradesh, India",
      link: "https://maps.google.com/?q=Varanasi,+Uttar+Pradesh,+India",
      description: "Where I'm based"
    }
  ];

  const quickStats = [
    { icon: MessageSquare, label: "Response Time", value: "< 24 hours" },
    { icon: Clock, label: "Availability", value: "24/7 hours" },
    { icon: Globe, label: "Remote Work", value: "Available worldwide" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden shadow-elegant border-2 border-primary/10">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
                <CardTitle className="text-2xl font-bold text-center">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-primary font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="shadow-elegant border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Download className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Download Resume
                  </h3>
                  <p className="text-muted-foreground">
                    Get a comprehensive overview of my experience, skills, and achievements.
                  </p>
                  <Button onClick={() => window.open(Resume, '_blank')} variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <Card className="shadow-elegant border-2 border-primary/10">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-2 border-border focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-2 border-border focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-2 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                      rows={6}
                      className="border-2 border-border focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;