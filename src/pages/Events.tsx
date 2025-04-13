
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  CalendarIcon, 
  GanttChartIcon, 
  Users, 
  Clock, 
  MapPin, 
  ThumbsUp, 
  MessageCircle, 
  Share2,
  Plus,
  Pencil,
  HandHelping
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectPolling from "@/components/events/ProjectPolling";
import VolunteerForm from "@/components/events/VolunteerForm";
import CrowdfundingWidget from "@/components/events/CrowdfundingWidget";
import CitizenIdea from "@/components/events/CitizenIdea";
import { useLanguage } from "@/contexts/LanguageContext";

const Events = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [dialogContent, setDialogContent] = useState<string>("poll");
  const { t } = useLanguage();
  
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
      currentFunding: 2800000,
      goalFunding: 5200000,
      contributors: 312,
      daysLeft: 120
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
      currentFunding: 850000,
      goalFunding: 2800000,
      contributors: 178,
      daysLeft: 90
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
      currentFunding: 2500000,
      goalFunding: 3700000,
      contributors: 203,
      daysLeft: 45
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
      volunteersNeeded: 5,
      volunteersRegistered: 2
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
      volunteersNeeded: 20,
      volunteersRegistered: 12
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
      volunteersNeeded: 3,
      volunteersRegistered: 1
    },
  ];

  const openDialog = (type: string, projectId?: number, eventId?: number) => {
    setDialogContent(type);
    if (projectId) setActiveProject(projectId);
    if (eventId) setActiveEvent(eventId);
  };

  const getActiveProject = () => {
    return projects.find(p => p.id === activeProject);
  };

  const getActiveEvent = () => {
    return events.find(e => e.id === activeEvent);
  };

  const getDialogTitle = () => {
    switch (dialogContent) {
      case "poll":
        return "Share Your Opinion";
      case "volunteer":
        return "Volunteer Registration";
      case "fund":
        return "Support This Project";
      case "idea":
        return "Share Your Idea";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{t("Events & Projects")}</h1>
      <p className="text-slate-600 mb-8">{t("Stay informed about government projects and upcoming community events.")}</p>
      
      <Tabs defaultValue="projects" className="mb-6">
        <TabsList className="w-full mb-8">
          <TabsTrigger value="projects" className="flex-1">
            <GanttChartIcon className="h-4 w-4 mr-2" /> {t("Government Projects")}
          </TabsTrigger>
          <TabsTrigger value="events" className="flex-1">
            <CalendarIcon className="h-4 w-4 mr-2" /> {t("Community Events")}
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
              <CardFooter className="flex flex-wrap gap-3 justify-between py-3">
                <div className="flex flex-wrap gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => openDialog("poll", project.id)}>
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Poll
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{getDialogTitle()}</DialogTitle>
                        <DialogDescription>
                          We value your opinion on our community projects.
                        </DialogDescription>
                      </DialogHeader>
                      {dialogContent === "poll" && activeProject && (
                        <ProjectPolling 
                          projectId={activeProject} 
                          projectTitle={getActiveProject()?.title || ""}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => openDialog("fund", project.id)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Fund
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{getDialogTitle()}</DialogTitle>
                        <DialogDescription>
                          Help fund this project to make it a reality.
                        </DialogDescription>
                      </DialogHeader>
                      {dialogContent === "fund" && activeProject && getActiveProject() && (
                        <CrowdfundingWidget 
                          projectId={activeProject}
                          projectTitle={getActiveProject()?.title || ""}
                          currentAmount={getActiveProject()?.currentFunding || 0}
                          goalAmount={getActiveProject()?.goalFunding || 0}
                          contributorsCount={getActiveProject()?.contributors || 0}
                          daysLeft={getActiveProject()?.daysLeft || 0}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => openDialog("idea", project.id)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Idea
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{getDialogTitle()}</DialogTitle>
                        <DialogDescription>
                          Share your ideas to improve this project.
                        </DialogDescription>
                      </DialogHeader>
                      {dialogContent === "idea" && activeProject && (
                        <CitizenIdea
                          projectId={activeProject}
                          title={getActiveProject()?.title || "This Project"}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="flex items-center gap-4">
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
                
                {event.volunteersNeeded > 0 && (
                  <div className="mt-4 border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <HandHelping className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="font-medium text-sm">Volunteers</span>
                      </div>
                      <span className="text-sm">{event.volunteersRegistered} of {event.volunteersNeeded} positions filled</span>
                    </div>
                    <Progress value={(event.volunteersRegistered / event.volunteersNeeded) * 100} className="h-2" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-wrap gap-3 justify-between py-3 border-t">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => openDialog("volunteer", undefined, event.id)}>
                        <HandHelping className="h-4 w-4 mr-2" />
                        Volunteer
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{getDialogTitle()}</DialogTitle>
                        <DialogDescription>
                          Sign up to volunteer for this community event.
                        </DialogDescription>
                      </DialogHeader>
                      {dialogContent === "volunteer" && activeEvent && getActiveEvent() && (
                        <VolunteerForm
                          eventId={activeEvent}
                          eventTitle={getActiveEvent()?.title || ""}
                          eventDate={getActiveEvent()?.date || ""}
                          eventTime={getActiveEvent()?.time || ""}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => openDialog("idea", undefined, event.id)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Suggest
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{getDialogTitle()}</DialogTitle>
                        <DialogDescription>
                          Share your ideas about this event.
                        </DialogDescription>
                      </DialogHeader>
                      {dialogContent === "idea" && activeEvent && (
                        <CitizenIdea
                          eventId={activeEvent}
                          title={getActiveEvent()?.title || "This Event"}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
                
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
