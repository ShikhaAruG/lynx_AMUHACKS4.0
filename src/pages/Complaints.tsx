
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, CheckCircle2, Upload, MapPin, Camera } from "lucide-react";

const Complaints = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Complaint Submitted",
        description: "Your complaint has been successfully submitted. You will receive updates via email.",
        variant: "default",
      });
    }, 1500);
  };

  const recentComplaints = [
    {
      id: 1,
      title: "Pothole on Maple Avenue",
      category: "Roads & Infrastructure",
      status: "In Progress",
      date: "April 10, 2025",
      location: "Maple Ave & 5th St",
      description: "Large pothole causing damage to vehicles.",
    },
    {
      id: 2,
      title: "Street Light Outage",
      category: "Public Utilities",
      status: "Resolved",
      date: "April 8, 2025",
      location: "Pine Street, Block 300",
      description: "Street light has been out for several days creating safety concerns.",
    },
    {
      id: 3,
      title: "Illegal Dumping",
      category: "Sanitation",
      status: "Assigned",
      date: "April 5, 2025",
      location: "Riverside Park, East Entrance",
      description: "Someone has dumped construction waste near the park entrance.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Complaints & Reports</h1>
      <p className="text-slate-600 mb-8">Submit and track complaints about your surroundings to the appropriate authorities.</p>
      
      <Tabs defaultValue="submit" className="mb-6">
        <TabsList className="w-full mb-8">
          <TabsTrigger value="submit" className="flex-1">
            <AlertTriangle className="h-4 w-4 mr-2" /> Submit Complaint
          </TabsTrigger>
          <TabsTrigger value="track" className="flex-1">
            <CheckCircle2 className="h-4 w-4 mr-2" /> Track Complaints
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="submit">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Report an Issue</CardTitle>
                <CardDescription>
                  Submit details about a problem in your community that needs attention.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Brief description of the issue" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                        <SelectItem value="utilities">Public Utilities</SelectItem>
                        <SelectItem value="sanitation">Sanitation & Garbage</SelectItem>
                        <SelectItem value="parks">Parks & Recreation</SelectItem>
                        <SelectItem value="noise">Noise Complaints</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="flex gap-2">
                      <Input id="location" placeholder="Address or location description" className="flex-1" required />
                      <Button type="button" variant="outline" size="icon">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">Enter address or use pin button to mark on map</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Please provide details about the issue..." 
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center">
                      <div className="flex flex-col items-center">
                        <Camera className="h-8 w-8 text-slate-400 mb-2" />
                        <p className="text-sm text-slate-500 mb-2">Drag & drop or click to upload</p>
                        <p className="text-xs text-slate-400">Up to 3 photos (Max 5MB each)</p>
                        <Button type="button" variant="outline" size="sm" className="mt-4">
                          <Upload className="h-4 w-4 mr-2" /> Choose Files
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Email</Label>
                    <Input id="contact" type="email" placeholder="Your email for updates" required />
                    <p className="text-xs text-slate-500">We'll send you updates on your complaint status</p>
                  </div>
                  
                  <CardFooter className="px-0 pt-2">
                    <Button type="submit" className="w-full bg-janvoice-primary" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Complaint"}
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-janvoice-primary text-white flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="font-medium">Submit Your Complaint</h3>
                        <p className="text-sm text-slate-600">Provide details about the issue, location, and supporting photos.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-janvoice-primary text-white flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="font-medium">Verification & Assignment</h3>
                        <p className="text-sm text-slate-600">Your complaint is verified and assigned to the appropriate department.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-janvoice-primary text-white flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="font-medium">Investigation & Action</h3>
                        <p className="text-sm text-slate-600">Officials investigate the issue and take necessary action to resolve it.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-janvoice-primary text-white flex items-center justify-center font-bold">4</div>
                      <div>
                        <h3 className="font-medium">Resolution & Feedback</h3>
                        <p className="text-sm text-slate-600">You receive updates and can provide feedback once the issue is resolved.</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Complaint Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-janvoice-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Be specific about the location, including nearby landmarks or intersections.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-janvoice-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Include clear photographs showing the issue from multiple angles when possible.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-janvoice-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Provide contact information so officials can reach you if they need more details.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-janvoice-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">For urgent safety issues, please call emergency services directly at 911.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="track">
          <Card>
            <CardHeader>
              <CardTitle>Your Recent Complaints</CardTitle>
              <CardDescription>
                Track the status and updates of your submitted complaints.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentComplaints.length > 0 ? (
                  recentComplaints.map((complaint) => (
                    <div key={complaint.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-slate-50 p-4 border-b">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <h3 className="font-medium">{complaint.title}</h3>
                            <p className="text-sm text-slate-500">
                              {complaint.category} • {complaint.date}
                            </p>
                          </div>
                          <div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              complaint.status === "Resolved"
                                ? "bg-green-100 text-green-800"
                                : complaint.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-amber-100 text-amber-800"
                            }`}>
                              {complaint.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <MapPin className="h-4 w-4 text-slate-500 flex-shrink-0 mt-1" />
                          <p className="text-sm">{complaint.location}</p>
                        </div>
                        <p className="text-sm text-slate-600">{complaint.description}</p>
                        
                        <div className="flex justify-end gap-2 mt-4">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button size="sm" className="bg-janvoice-primary">Track Updates</Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-700 mb-1">No complaints yet</h3>
                    <p className="text-slate-500">You haven't submitted any complaints yet.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Complaints;
