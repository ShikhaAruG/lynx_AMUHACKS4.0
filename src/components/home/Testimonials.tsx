
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Organizer",
      quote: "JanVoice has revolutionized how we communicate with our local government. It's never been easier to get our ideas heard and implemented.",
      avatar: "/placeholder.svg",
      initials: "SJ",
    },
    {
      name: "Michael Rodriguez",
      role: "City Resident",
      quote: "I reported a pothole through JanVoice and it was fixed within a week! The transparency and follow-up from officials is incredible.",
      avatar: "/placeholder.svg",
      initials: "MR",
    },
    {
      name: "Lisa Thompson",
      role: "Neighborhood Association President",
      quote: "The community forums have helped us build consensus on important local issues. Our neighborhood has never been more connected.",
      avatar: "/placeholder.svg",
      initials: "LT",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
          What People Are Saying
        </h2>
        <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
          JanVoice is helping citizens and governments work together to build better communities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-janvoice-primary text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-slate-700 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
