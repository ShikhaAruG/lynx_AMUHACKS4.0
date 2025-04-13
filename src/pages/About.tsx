
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer, CartesianGrid, Legend, Tooltip, LineChart, Line } from "recharts";
import { User, Building, Award, Image, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const [activeTab, setActiveTab] = useState("team");

  const teamMembers = [
    { id: 1, name: "Alex Johnson", role: "Community Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 2, name: "Sarah Williams", role: "Project Manager", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 3, name: "Michael Chen", role: "Developer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 4, name: "Priya Patel", role: "Community Coordinator", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 5, name: "David Rodriguez", role: "Marketing Specialist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
  ];

  const projects = [
    { id: 1, name: "Neighborhood Cleanup", date: "March 2024", image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 2, name: "Community Garden", date: "January 2024", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 3, name: "Tech Workshop", date: "November 2023", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 4, name: "Fundraising Gala", date: "September 2023", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=300" },
  ];

  const monthlyData = [
    { name: "Jan", received: 65, resolved: 42 },
    { name: "Feb", received: 59, resolved: 51 },
    { name: "Mar", received: 80, resolved: 72 },
    { name: "Apr", received: 81, resolved: 73 },
    { name: "May", received: 56, resolved: 50 },
    { name: "Jun", received: 55, resolved: 48 },
    { name: "Jul", received: 40, resolved: 37 },
    { name: "Aug", received: 45, resolved: 40 },
    { name: "Sep", received: 62, resolved: 55 },
    { name: "Oct", received: 48, resolved: 46 },
    { name: "Nov", received: 51, resolved: 49 },
    { name: "Dec", received: 47, resolved: 43 },
  ];

  const yearlyData = [
    { year: "2020", received: 450, resolved: 410 },
    { year: "2021", received: 520, resolved: 480 },
    { year: "2022", received: 610, resolved: 550 },
    { year: "2023", received: 680, resolved: 650 },
    { year: "2024", received: 310, resolved: 270 },
  ];

  const chartConfig = {
    received: {
      label: "Complaints Received",
      color: "#4f46e5",
    },
    resolved: {
      label: "Complaints Resolved",
      color: "#22c55e",
    },
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About JanVoice</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We're a dedicated platform empowering communities to voice their concerns and collaborate on solutions. 
          Learn about our team, projects, and the impact we're making together.
        </p>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="team" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Our Team</span>
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Projects</span>
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span>Impact</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="team" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {member.name}
                  </CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="projects" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Image className="h-4 w-4" />
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="stats" className="mt-6">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Complaints (2024)</CardTitle>
                <CardDescription>
                  Tracking complaints received and resolved each month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="received" name="Received" fill="#4f46e5" />
                      <Bar dataKey="resolved" name="Resolved" fill="#22c55e" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Yearly Complaints</CardTitle>
                <CardDescription>
                  Annual complaint trends over the past five years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={yearlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line type="monotone" dataKey="received" name="Received" stroke="#4f46e5" strokeWidth={2} />
                      <Line type="monotone" dataKey="resolved" name="Resolved" stroke="#22c55e" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resolution Statistics</CardTitle>
                <CardDescription>
                  Complaint resolution rates by year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>Yearly complaint resolution data</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>Received</TableHead>
                      <TableHead>Resolved</TableHead>
                      <TableHead className="text-right">Resolution Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {yearlyData.map((item) => (
                      <TableRow key={item.year}>
                        <TableCell className="font-medium">{item.year}</TableCell>
                        <TableCell>{item.received}</TableCell>
                        <TableCell>{item.resolved}</TableCell>
                        <TableCell className="text-right">
                          {Math.round((item.resolved / item.received) * 100)}%
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default About;
