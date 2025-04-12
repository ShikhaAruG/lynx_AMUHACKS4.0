
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-janvoice-background">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 flex gap-2">
        <a 
          href="/mobile-app" 
          className="bg-black/10 hover:bg-black/20 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
        >
          Mobile App
        </a>
        <a 
          href="/design" 
          className="bg-black/10 hover:bg-black/20 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
        >
          Design System
        </a>
      </div>
    </div>
  );
};

export default Layout;
