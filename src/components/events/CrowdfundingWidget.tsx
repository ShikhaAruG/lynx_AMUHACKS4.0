
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  CircleDollarSign, 
  Users, 
  Target, 
  HeartHandshake,
  Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CrowdfundingWidgetProps {
  projectId: number;
  projectTitle: string;
  currentAmount: number;
  goalAmount: number;
  contributorsCount: number;
  daysLeft: number;
}

const CrowdfundingWidget = ({ 
  projectId,
  projectTitle,
  currentAmount, 
  goalAmount, 
  contributorsCount,
  daysLeft
}: CrowdfundingWidgetProps) => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [displayOption, setDisplayOption] = useState("public");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const progressPercentage = Math.min(Math.round((currentAmount / goalAmount) * 100), 100);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid contribution amount",
        variant: "destructive",
      });
      return;
    }
    
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
      projectId,
      amount: amountNum,
      name,
      email,
      displayOption
    });
    
    toast({
      title: "Thank you for your contribution!",
      description: `Your donation of $${amountNum} to "${projectTitle}" has been recorded.`,
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-amber-50 rounded-md text-center">
        <HeartHandshake className="h-8 w-8 text-amber-500 mx-auto mb-2" />
        <p className="font-medium text-amber-800">Thank you for your contribution!</p>
        <p className="text-sm text-amber-600">Your support makes a real difference in our community.</p>
        <div className="mt-4">
          <Button 
            variant="outline" 
            onClick={() => setSubmitted(false)}
            className="text-amber-700 border-amber-300 hover:bg-amber-100"
          >
            Make another contribution
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 border rounded-md p-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium flex items-center">
          <Target className="h-4 w-4 mr-2 text-janvoice-primary" />
          Funding Goal: ${goalAmount.toLocaleString()}
        </h4>
        <div className="text-sm text-janvoice-muted">{daysLeft} days left</div>
      </div>
      
      <Progress value={progressPercentage} className="h-3" />
      
      <div className="flex justify-between text-sm">
        <div className="font-medium">${currentAmount.toLocaleString()} raised</div>
        <div className="text-janvoice-muted">{progressPercentage}% of goal</div>
      </div>
      
      <div className="flex items-center gap-1 text-sm text-janvoice-muted">
        <Users className="h-4 w-4" />
        <span>{contributorsCount} contributors</span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t">
        <div>
          <Label htmlFor="amount" className="flex items-center">
            <CircleDollarSign className="h-4 w-4 mr-2 text-green-600" />
            Contribution Amount
          </Label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <Input
              id="amount"
              type="number"
              min="1"
              step="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="pl-7"
              required
            />
          </div>
        </div>
        
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
          <Label className="flex items-center">
            <Award className="h-4 w-4 mr-2 text-amber-600" />
            Recognition Preference
          </Label>
          <RadioGroup className="mt-2" value={displayOption} onValueChange={setDisplayOption}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="public" id="public" />
              <Label htmlFor="public" className="text-sm cursor-pointer">
                Display my name publicly
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="anonymous" id="anonymous" />
              <Label htmlFor="anonymous" className="text-sm cursor-pointer">
                Contribute anonymously
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Support This Project
        </Button>
      </form>
    </div>
  );
};

export default CrowdfundingWidget;
