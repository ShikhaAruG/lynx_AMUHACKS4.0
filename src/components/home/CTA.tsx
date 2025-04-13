
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-janvoice-lapis to-janvoice-indigo text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make a Difference in Your Community?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Join thousands of citizens who are making their voices heard and creating positive change through JanVoice.
        </p>
        <Button asChild size="lg" className="bg-janvoice-mindaro text-janvoice-indigo hover:bg-janvoice-lightgreen transition-all">
          <Link to="/signup">Join JanVoice Today</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
