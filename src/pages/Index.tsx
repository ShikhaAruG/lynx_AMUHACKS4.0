
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";

const Index = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      
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
      
      <CTA />
    </div>
  );
};

export default Index;
