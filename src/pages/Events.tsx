
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CalendarIcon, GanttChartIcon, Users, Clock, MapPin, ThumbsUp, MessageCircle, Share2 } from "lucide-react";

const Events = () => {
  const projects = [
    {
      id: 1,
      title: "Downtown Revitalization Project",
      description: "Comprehensive initiative to revitalize the downtown area with new streetscaping, business incentives, and public spaces.",
      status: "In Progress",
      progress: 45,
      startDate: "Mar 2025",
      endDate: "Aug 2026",
      location: "Downtown District",
      department: "Urban Development",
      budget: "$5.2M",
      updates: 12,
    },
    {
      id: 2,
      title: "Green Valley Park Expansion",
      description: "Expanding Green Valley Park with new recreational facilities, walking trails, and environmental conservation areas.",
      status: "Planning",
      progress: 15,
      startDate: "Jun 2025",
      endDate: "Dec 2026",
      location: "Green Valley",
      department: "Parks & Recreation",
      budget: "$2.8M",
      updates: 5,
    },
    {
      id: 3,
      title: "Smart Traffic Management System",
      description: "Implementation of AI-powered traffic lights and sensors to optimize traffic flow and reduce congestion.",
      status: "In Progress",
      progress: 65,
      startDate: "Jan 2025",
      endDate: "Nov 2025",
      location: "Citywide",
      department: "Transportation",
      budget: "$3.7M",
      updates: 18,
    },
  ];

  const events = [
    {
      id: 1,
      title: "Town Hall Meeting: Infrastructure Plans",
      description: "Join city officials to discuss upcoming infrastructure projects and provide your feedback.",
      date: "April 25, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "City Hall, Main Auditorium",
      organizer: "Mayor's Office",
      attendees: 43,
    },
    {
      id: 2,
      title: "Community Clean-Up Day",
      description: "Volunteer to help clean up our parks and public spaces. Equipment and refreshments provided.",
      date: "May 2, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Riverside Park (Meeting at Main Entrance)",
      organizer: "Environmental Services",
      attendees: 76,
    },
    {
      id: 3,
      title: "Public Budget Hearing",
      description: "Opportunity for citizens to review and comment on the proposed city budget for the upcoming fiscal year.",
      date: "May 15, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Community Center, Room 204",
      organizer: "Finance Department",
      attendees: 28,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Events & Projects</h1>
      <p className="text-slate-600 mb-8">Stay informed about government projects and upcoming community events.</p>
      
      <Tabs defaultValue="projects" className="mb-6">
        <TabsList className="w-full mb-8">
          <TabsTrigger value="projects" className="flex-1">
            <GanttChartIcon className="h-4 w-4 mr-2" /> Government Projects
          </TabsTrigger>
          <TabsTrigger value="events" className="flex-1">
            <CalendarIcon className="h-4 w-4 mr-2" /> Community Events
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <CardTitle className="text-xl hover:text-janvoice-primary cursor-pointer mb-1">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className="bg-slate-200 text-slate-700 hover:bg-slate-200">
                        {project.department}
                      </Badge>
                      <Badge className={`${
                        project.status === "In Progress" 
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100" 
                          : project.status === "Planning" 
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          : "bg-green-100 text-green-800 hover:bg-green-100"
                      }`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Budget: {project.budget}</div>
                    <div className="text-sm text-slate-500">
                      {project.startDate} - {project.endDate}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div>Project Updates: {project.updates}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="border-t border-b py-3">
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Project Progress</span>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between py-3">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex items-center gap-4">
                  <button className="text-slate-500 hover:text-janvoice-primary">
                    <ThumbsUp className="h-4 w-4" />
                  </button>
                  <button className="text-slate-500 hover:text-janvoice-primary">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                  <button className="text-slate-500 hover:text-janvoice-primary">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="events" className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl hover:text-janvoice-primary cursor-pointer mb-1">
                      {event.title}
                    </CardTitle>
                    <div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-2">
                        {event.organizer}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700">{event.description}</p>
              </CardHeader>
              <CardContent className="border-t pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-slate-700">
                    <CalendarIcon className="h-4 w-4 mr-2 text-janvoice-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Clock className="h-4 w-4 mr-2 text-janvoice-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <MapPin className="h-4 w-4 mr-2 text-janvoice-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Users className="h-4 w-4 mr-2 text-janvoice-primary" />
                    <span>{event.attendees} people attending</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between py-3 border-t">
                <Button variant="outline" size="sm">
                  Add to Calendar
                </Button>
                <Button className="bg-janvoice-primary">
                  RSVP
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;
