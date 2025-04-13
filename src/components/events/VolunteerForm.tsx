
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Clock, HandHelping } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VolunteerFormProps {
  eventId: number;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
}

const VolunteerForm = ({ eventId, eventTitle, eventDate, eventTime }: VolunteerFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [allowRecognition, setAllowRecognition] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally submit to a backend
    console.log({
      eventId,
      name,
      email,
      phone,
      skills,
      allowRecognition,
    });
    
    toast({
      title: "Thank you for volunteering!",
      description: `We'll contact you soon about "${eventTitle}"`,
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-blue-50 rounded-md text-center">
        <HandHelping className="h-8 w-8 text-blue-500 mx-auto mb-2" />
        <p className="font-medium text-blue-800">Thank you for volunteering!</p>
        <p className="text-sm text-blue-600">We'll be in touch with you shortly.</p>
        <div className="mt-4 text-sm bg-blue-100 p-2 rounded-md flex flex-col items-start">
          <span className="flex items-center mb-1">
            <CalendarIcon className="h-4 w-4 mr-2 text-blue-700" />
            {eventDate}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-blue-700" />
            {eventTime}
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h4 className="font-medium">Volunteer for this event</h4>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input 
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
          />
        </div>
        
        <div>
          <Label htmlFor="skills">Special Skills (optional)</Label>
          <Textarea 
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="List any special skills you have that may be relevant"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="recognition" className="text-sm">
            Allow public recognition of my contribution
          </Label>
          <Switch 
            id="recognition"
            checked={allowRecognition}
            onCheckedChange={setAllowRecognition}
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
        <HandHelping className="h-4 w-4" />
        Sign Up to Volunteer
      </Button>
    </form>
  );
};

export default VolunteerForm;
