import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Intelligent from "./pages/Intelligent";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import About from "./pages/About";
import News from "./pages/News";
import CaseStudies from "./pages/CaseStudies";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import Locations from "./pages/Locations";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

// Industry Pages
import FinancialServices from "./pages/FinancialServices";
import Government from "./pages/Government";
import Manufacturing from "./pages/Manufacturing";
import Education from "./pages/Education";
import Retail from "./pages/Retail";
import Telecom from "./pages/Telecom";
import Healthcare from "./pages/Healthcare";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intelligent" element={<Intelligent />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/newslisting" element={<News />} />
              <Route path="/case-studies-listing" element={<CaseStudies />} />
              <Route path="/our-partners" element={<Partners />} />
              <Route path="/career" element={<Careers />} />
              <Route path="/findlocation" element={<Locations />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/contactus" element={<Contact />} />
              
              {/* Industry Pages */}
              <Route path="/financialservices" element={<FinancialServices />} />
              <Route path="/government" element={<Government />} />
              <Route path="/manufacture" element={<Manufacturing />} />
              <Route path="/education" element={<Education />} />
              <Route path="/retail" element={<Retail />} />
              <Route path="/telecom" element={<Telecom />} />
              <Route path="/healthcare" element={<Healthcare />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
