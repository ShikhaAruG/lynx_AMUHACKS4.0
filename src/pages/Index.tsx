
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <CTA />
    </div>
  );
};

export default Index;
