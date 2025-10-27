import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setDate(undefined);
    
    setIsSubmitting(false);
    
    // Show success message
    toast({
      title: "Consultation Booked Successfully! 🎊",
      description: "We've received your request and will contact you within 2 hours to confirm your consultation time.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book a Consultation
            </h1>
            <p className="font-poppins text-lg text-muted-foreground">
              Let's discuss your celebration and bring your vision to life
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 shadow-elegant animate-scale-in">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <Select required>
                  <SelectTrigger id="eventType">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="mehendi">Mehendi/Haldi</SelectItem>
                    <SelectItem value="baby">Baby Shower/Naming</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="festival">Festival Celebration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Preferred Event Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="guests">Expected Number of Guests</Label>
                <Input id="guests" type="number" placeholder="e.g., 200" />
              </div>

              <div>
                <Label htmlFor="budget">Estimated Budget (₹)</Label>
                <Select>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Under ₹5 Lakhs</SelectItem>
                    <SelectItem value="2">₹5-10 Lakhs</SelectItem>
                    <SelectItem value="3">₹10-20 Lakhs</SelectItem>
                    <SelectItem value="4">₹20-50 Lakhs</SelectItem>
                    <SelectItem value="5">Above ₹50 Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your event *</Label>
                <Textarea
                  id="message"
                  placeholder="Share your vision, traditions you'd like to include, any specific requirements..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="festive" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking Consultation..." : "Submit Consultation Request"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Consultation;
