
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-janvoice-lightgreen/30 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-janvoice-indigo mb-6">
            Your Voice Matters in Your Community
          </h1>
          <p className="text-xl text-janvoice-lapis mb-8">
            Connect with your local government, share ideas, and make a real impact 
            on the issues that matter most to your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-janvoice-bondiblue hover:bg-janvoice-cerulean">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-janvoice-keppel text-janvoice-keppel hover:bg-janvoice-keppel/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
