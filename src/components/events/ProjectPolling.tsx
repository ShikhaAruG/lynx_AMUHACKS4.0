
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ThumbsUp, ThumbsDown, AlertCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectPollingProps {
  projectId: number;
  projectTitle: string;
}

const ProjectPolling = ({ projectId, projectTitle }: ProjectPollingProps) => {
  const [vote, setVote] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!vote) {
      toast({
        title: "Please select an option",
        description: "You need to select your opinion about this project",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally submit to a backend
    console.log({
      projectId,
      vote,
      feedback,
    });
    
    toast({
      title: "Thank you for your input!",
      description: `Your feedback on "${projectTitle}" has been recorded.`,
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-50 rounded-md text-center">
        <ThumbsUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
        <p className="font-medium text-green-800">Thank you for your feedback!</p>
        <p className="text-sm text-green-600">Your input helps shape our community.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h4 className="font-medium mb-2">What do you think about this project?</h4>
        <RadioGroup className="flex flex-col space-y-2" value={vote || ""} onValueChange={setVote}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="support" id="support" />
            <Label htmlFor="support" className="flex items-center cursor-pointer">
              <ThumbsUp className="h-4 w-4 mr-2 text-green-600" />
              Support this project
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oppose" id="oppose" />
            <Label htmlFor="oppose" className="flex items-center cursor-pointer">
              <ThumbsDown className="h-4 w-4 mr-2 text-red-600" />
              Opposed to this project
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="changes" id="changes" />
            <Label htmlFor="changes" className="flex items-center cursor-pointer">
              <AlertCircle className="h-4 w-4 mr-2 text-amber-600" />
              Suggest changes
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <Label htmlFor="feedback" className="block mb-2">
          Your feedback (optional)
        </Label>
        <Textarea 
          id="feedback"
          placeholder="Share your thoughts or suggestions..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full"
        />
      </div>
      
      <Button type="submit" className="w-full flex items-center justify-center gap-2">
        <Send className="h-4 w-4" />
        Submit Feedback
      </Button>
    </form>
  );
};

export default ProjectPolling;
