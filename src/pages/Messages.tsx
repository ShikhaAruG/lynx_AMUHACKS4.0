
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Lock } from "lucide-react";

const Messages = () => {
  const [message, setMessage] = useState("");

  const contacts = [
    { id: 1, name: "City Hall", role: "Municipal Services", avatar: "/placeholder.svg", initials: "CH", lastMessage: "Thank you for your inquiry about the new park project." },
    { id: 2, name: "Public Works Dept", role: "Infrastructure", avatar: "/placeholder.svg", initials: "PW", lastMessage: "We've scheduled an inspection for the reported pothole." },
    { id: 3, name: "Parks & Recreation", role: "Community Services", avatar: "/placeholder.svg", initials: "PR", lastMessage: "The community garden proposal has been received." },
    { id: 4, name: "Traffic Management", role: "Transportation", avatar: "/placeholder.svg", initials: "TM", lastMessage: "We're reviewing your suggestion for the crosswalk." },
  ];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const messages = [
    { id: 1, sender: "you", text: "Hello, I'd like to inquire about the new park project in the Oak Hill neighborhood.", time: "Yesterday, 2:30 PM" },
    { id: 2, sender: "them", text: "Thank you for your inquiry about the new park project. We're currently in the planning phase and would be happy to share more information.", time: "Yesterday, 3:15 PM" },
    { id: 3, sender: "you", text: "That would be great! I'm particularly interested in the timeline and what recreational facilities will be included.", time: "Yesterday, 3:20 PM" },
    { id: 4, sender: "them", text: "The project is scheduled to begin construction in June and should be completed by early next year. We're planning to include a playground, basketball courts, walking trails, and a picnic area. Would you like to see the preliminary designs?", time: "Yesterday, 4:05 PM" },
    { id: 5, sender: "you", text: "Yes, I would love to see the designs. Also, will there be any public meetings where residents can provide input?", time: "Yesterday, 4:15 PM" },
  ];

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Secure Messages</h1>
      <p className="text-slate-600 mb-8">Communicate directly with government departments through our encrypted messaging system.</p>
      
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Contacts
              <Lock className="h-4 w-4 text-janvoice-secondary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="government" className="mb-4">
              <TabsList className="w-full">
                <TabsTrigger value="government" className="flex-1">Government</TabsTrigger>
                <TabsTrigger value="community" className="flex-1">Community</TabsTrigger>
              </TabsList>
              <TabsContent value="government">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {contacts.map((contact) => (
                      <div 
                        key={contact.id}
                        className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-colors ${
                          selectedContact.id === contact.id ? "bg-slate-100" : ""
                        }`}
                        onClick={() => setSelectedContact(contact)}
                      >
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback className="bg-janvoice-primary text-white">
                            {contact.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="overflow-hidden">
                          <div className="font-medium">{contact.name}</div>
                          <div className="text-xs text-slate-500">{contact.role}</div>
                          <div className="text-sm text-slate-600 truncate">{contact.lastMessage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="community">
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <p className="text-slate-500 mb-2">Community messaging coming soon</p>
                  <p className="text-sm text-slate-400">Connect with community organizations and leaders</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="flex-1">
          <CardHeader className="border-b">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                <AvatarFallback className="bg-janvoice-primary text-white">
                  {selectedContact.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{selectedContact.name}</CardTitle>
                <p className="text-sm text-slate-500">{selectedContact.role}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col h-[500px]">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id}
                      className={`flex ${msg.sender === 'you' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.sender === 'you' 
                            ? 'bg-janvoice-primary text-white rounded-br-none' 
                            : 'bg-slate-100 text-slate-800 rounded-bl-none'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <div 
                          className={`text-xs mt-1 ${
                            msg.sender === 'you' ? 'text-blue-100' : 'text-slate-500'
                          }`}
                        >
                          {msg.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={handleSend} className="bg-janvoice-primary">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Lock className="h-3 w-3 text-janvoice-secondary" />
                  <span className="text-xs text-slate-500">End-to-end encrypted</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
