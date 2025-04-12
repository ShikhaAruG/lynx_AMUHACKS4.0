
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, MessageCircle, Share2, Filter, PlusCircle, TrendingUp } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("ideas");
  
  const ideas = [
    {
      id: 1,
      title: "Bike Lane on Oak Street",
      description: "I propose adding a protected bike lane on Oak Street to improve safety for cyclists and encourage more people to bike to work.",
      author: "David Chang",
      authorInitials: "DC",
      avatar: "/placeholder.svg",
      date: "2 days ago",
      upvotes: 42,
      comments: 15,
      category: "Transportation",
    },
    {
      id: 2,
      title: "Community Garden in Washington Park",
      description: "Let's transform the unused area in Washington Park into a community garden where residents can grow their own produce and build community bonds.",
      author: "Elena Rivera",
      authorInitials: "ER",
      avatar: "/placeholder.svg",
      date: "1 week ago",
      upvotes: 78,
      comments: 23,
      category: "Parks",
    },
    {
      id: 3,
      title: "Monthly Neighborhood Clean-Up Event",
      description: "I suggest organizing a monthly neighborhood clean-up event where residents can volunteer to pick up litter and beautify our community spaces.",
      author: "Marcus Johnson",
      authorInitials: "MJ",
      avatar: "/placeholder.svg",
      date: "3 days ago",
      upvotes: 35,
      comments: 8,
      category: "Environment",
    },
    {
      id: 4,
      title: "After-School Program for Underserved Youth",
      description: "We should establish an after-school program that provides tutoring, mentorship, and enrichment activities for underserved youth in our community.",
      author: "Jasmine Williams",
      authorInitials: "JW",
      avatar: "/placeholder.svg",
      date: "5 days ago",
      upvotes: 64,
      comments: 19,
      category: "Education",
    },
  ];

  const discussions = [
    {
      id: 1,
      title: "Traffic Congestion on Main Street",
      description: "I've noticed increasing traffic congestion on Main Street during rush hour. What solutions have worked in other neighborhoods?",
      author: "Thomas Green",
      authorInitials: "TG",
      avatar: "/placeholder.svg",
      date: "1 day ago",
      upvotes: 28,
      comments: 32,
      category: "Transportation",
    },
    {
      id: 2,
      title: "Improving Local School Funding",
      description: "Let's discuss strategies for improving funding for our local schools. What initiatives have been successful elsewhere?",
      author: "Patricia Lee",
      authorInitials: "PL",
      avatar: "/placeholder.svg",
      date: "4 days ago",
      upvotes: 53,
      comments: 27,
      category: "Education",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Community Forum</h1>
          <p className="text-slate-600">Share ideas and collaborate with fellow citizens on community initiatives.</p>
        </div>
        <Button className="bg-janvoice-primary">
          <PlusCircle className="h-4 w-4 mr-2" /> Submit Idea
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Tabs defaultValue="ideas" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="w-full">
              <TabsTrigger value="ideas" className="flex-1">Ideas & Suggestions</TabsTrigger>
              <TabsTrigger value="discussions" className="flex-1">Discussions</TabsTrigger>
              <TabsTrigger value="trending" className="flex-1">
                <TrendingUp className="h-4 w-4 mr-2" /> Trending
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ideas" className="space-y-6 mt-6">
              {ideas.map((idea) => (
                <Card key={idea.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-xl hover:text-janvoice-primary cursor-pointer">
                          {idea.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-slate-500">
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 text-xs font-medium mr-2">
                            {idea.category}
                          </span>
                          <span>{idea.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{idea.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t bg-slate-50 px-6">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={idea.avatar} alt={idea.author} />
                        <AvatarFallback className="bg-janvoice-primary text-white text-xs">
                          {idea.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{idea.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-slate-500 hover:text-janvoice-primary">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">{idea.upvotes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-slate-500 hover:text-janvoice-primary">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{idea.comments}</span>
                      </button>
                      <button className="text-slate-500 hover:text-janvoice-primary">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="discussions" className="space-y-6 mt-6">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-xl hover:text-janvoice-primary cursor-pointer">
                          {discussion.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-slate-500">
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 text-xs font-medium mr-2">
                            {discussion.category}
                          </span>
                          <span>{discussion.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{discussion.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t bg-slate-50 px-6">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={discussion.avatar} alt={discussion.author} />
                        <AvatarFallback className="bg-janvoice-secondary text-white text-xs">
                          {discussion.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{discussion.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-slate-500 hover:text-janvoice-primary">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">{discussion.upvotes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-slate-500 hover:text-janvoice-primary">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{discussion.comments}</span>
                      </button>
                      <button className="text-slate-500 hover:text-janvoice-primary">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="trending" className="mt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="h-12 w-12 text-janvoice-muted mb-4" />
                <h3 className="text-xl font-medium text-slate-700 mb-2">Trending Topics Coming Soon</h3>
                <p className="text-slate-500 max-w-md">
                  We're working on analyzing community activity to identify trending topics and conversations.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Filter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Categories</h4>
                  <div className="space-y-2">
                    {["All", "Transportation", "Environment", "Education", "Parks", "Safety", "Economy"].map((category) => (
                      <div key={category} className="flex items-center">
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded text-janvoice-primary mr-2"
                            defaultChecked={category === "All"}
                          />
                          <span className="text-sm text-slate-700">{category}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-2">Time Period</h4>
                  <div className="space-y-2">
                    {["All Time", "Past Week", "Past Month", "Past Year"].map((time) => (
                      <div key={time} className="flex items-center">
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="radio" 
                            name="time" 
                            className="text-janvoice-primary mr-2"
                            defaultChecked={time === "All Time"}
                          />
                          <span className="text-sm text-slate-700">{time}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Apply Filters</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
