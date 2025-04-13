
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Info } from "lucide-react";

const Index = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <div className="bg-janvoice-background py-12 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold rounded-full bg-janvoice-primary/10 text-janvoice-primary">
            For Designers
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Design with Figma</h2>
          <p className="max-w-2xl mx-auto mb-6 text-slate-600">
            Check out our design system page to learn how to embed your Figma designs and to see the color palette and component references.
          </p>
          <Button asChild variant="outline">
            <Link to="/design">Go to Design System</Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-white to-slate-50 py-12 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
            Learn More
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Our Community</h2>
          <p className="max-w-2xl mx-auto mb-6 text-slate-600">
            Discover our team, previous projects, and impact. View images of our community initiatives and track our progress through complaint resolution metrics.
          </p>
          <Button asChild variant="outline" className="flex gap-2 items-center">
            <Link to="/about">
              <Info className="h-4 w-4" />
              About JanVoice
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold rounded-full bg-green-100 text-green-700">
            Mobile App
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">JanVoice on Mobile</h2>
          <p className="max-w-2xl mx-auto mb-6 text-slate-600">
            Learn how to convert this web application into a native mobile app for iOS and Android using Capacitor.
          </p>
          <Button asChild variant="outline" className="flex gap-2 items-center">
            <Link to="/mobile-app">
              <Smartphone className="h-4 w-4" />
              Mobile App Setup
            </Link>
          </Button>
        </div>
      </div>
      
      <CTA />
    </div>
  );
};

export default Index;
