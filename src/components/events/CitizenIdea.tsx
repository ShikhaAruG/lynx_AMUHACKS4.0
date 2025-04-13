
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { LightbulbIcon, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CitizenIdeaProps {
  eventId?: number;
  projectId?: number;
  title: string;
}

const CitizenIdea = ({ eventId, projectId, title }: CitizenIdeaProps) => {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!ideaTitle || !description || !category) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally submit to a backend
    console.log({
      eventId,
      projectId,
      ideaTitle,
      description,
      category,
      name,
      email,
    });
    
    toast({
      title: "Idea submitted successfully!",
      description: "Thank you for sharing your idea with the community.",
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-purple-50 rounded-md text-center">
        <LightbulbIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
        <p className="font-medium text-purple-800">Your idea has been submitted!</p>
        <p className="text-sm text-purple-600">We'll review your suggestion and get back to you soon.</p>
        <div className="mt-4">
          <Button 
            variant="outline" 
            onClick={() => setSubmitted(false)}
            className="text-purple-700 border-purple-300 hover:bg-purple-100"
          >
            Submit another idea
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <LightbulbIcon className="h-5 w-5 text-amber-500" />
        <h4 className="font-medium">Share Your Idea for {title}</h4>
      </div>
      
      <div>
        <Label htmlFor="idea-title">Idea Title *</Label>
        <Input 
          id="idea-title"
          value={ideaTitle}
          onChange={(e) => setIdeaTitle(e.target.value)}
          placeholder="A brief title for your idea"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="category">Category *</Label>
        <Select value={category} onValueChange={setCategory} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="environment">Environment</SelectItem>
            <SelectItem value="infrastructure">Infrastructure</SelectItem>
            <SelectItem value="safety">Safety & Security</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="culture">Art & Culture</SelectItem>
            <SelectItem value="health">Health & Wellness</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="description">Description *</Label>
        <Textarea 
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your idea in detail. What problem does it solve? How can it be implemented?"
          className="min-h-[120px]"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Your Name (optional)</Label>
          <Input 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <Label htmlFor="email">Your Email (optional)</Label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="To receive updates on your idea"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full flex items-center justify-center gap-2">
        <Send className="h-4 w-4" />
        Submit Idea
      </Button>
    </form>
  );
};

export default CitizenIdea;
