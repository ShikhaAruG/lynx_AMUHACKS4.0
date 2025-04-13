
import { MessageSquare, Users, Calendar, AlertTriangle, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Secure Messaging",
      description: "Communicate directly with government officials through our encrypted messaging system.",
      icon: <MessageSquare className="h-12 w-12 text-janvoice-bondiblue" />,
      bgColor: "bg-janvoice-bondiblue/10",
    },
    {
      title: "Community Forums",
      description: "Share ideas and collaborate with fellow citizens on community initiatives.",
      icon: <Users className="h-12 w-12 text-janvoice-keppel" />,
      bgColor: "bg-janvoice-keppel/10",
    },
    {
      title: "Events & Projects",
      description: "Stay updated on local government projects and community events.",
      icon: <Calendar className="h-12 w-12 text-janvoice-emerald" />,
      bgColor: "bg-janvoice-emerald/10",
    },
    {
      title: "Complaint Submission",
      description: "Report issues in your area directly to the relevant government departments.",
      icon: <AlertTriangle className="h-12 w-12 text-janvoice-verdigris" />,
      bgColor: "bg-janvoice-verdigris/10",
    },
    {
      title: "Privacy & Security",
      description: "Your data is protected with enterprise-grade security measures.",
      icon: <Shield className="h-12 w-12 text-janvoice-lapis" />,
      bgColor: "bg-janvoice-lapis/10",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-janvoice-indigo mb-4">
          Key Features
        </h2>
        <p className="text-xl text-center text-janvoice-cerulean mb-16 max-w-3xl mx-auto">
          Everything you need to engage with your local government and make your voice heard.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${feature.bgColor}`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-janvoice-indigo">{feature.title}</h3>
              <p className="text-janvoice-lapis">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
