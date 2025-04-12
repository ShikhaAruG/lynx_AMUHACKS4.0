
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageSquare, Users, Calendar, FileText, AlertTriangle, Menu } from "lucide-react";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: <FileText className="h-4 w-4 mr-2" /> },
    { to: "/messages", label: "Messages", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
    { to: "/community", label: "Community", icon: <Users className="h-4 w-4 mr-2" /> },
    { to: "/events", label: "Events", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { to: "/complaints", label: "Complaints", icon: <AlertTriangle className="h-4 w-4 mr-2" /> },
  ];

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const renderNavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
      {navLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className="flex items-center text-slate-700 hover:text-janvoice-primary transition-colors duration-200"
            onClick={handleNavClick}
          >
            {link.icon}
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-janvoice-primary">Jan<span className="text-janvoice-secondary">Voice</span></span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              {renderNavLinks()}
            </SheetContent>
          </Sheet>
        ) : (
          renderNavLinks()
        )}
      </div>
    </nav>
  );
};

export default Navigation;
