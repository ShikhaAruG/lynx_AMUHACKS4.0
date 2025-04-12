
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">JanVoice</h3>
            <p className="text-slate-300 text-sm">
              Empowering citizens to connect with their government and contribute to their communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link to="/messages" className="hover:text-janvoice-secondary transition-colors">Secure Messaging</Link></li>
              <li><Link to="/community" className="hover:text-janvoice-secondary transition-colors">Community Forums</Link></li>
              <li><Link to="/events" className="hover:text-janvoice-secondary transition-colors">Government Projects</Link></li>
              <li><Link to="/complaints" className="hover:text-janvoice-secondary transition-colors">Complaint Submission</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link to="/about" className="hover:text-janvoice-secondary transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-janvoice-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-janvoice-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-janvoice-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>support@janvoice.org</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Civic Center Plaza</li>
              <li>Anytown, ST 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} JanVoice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
