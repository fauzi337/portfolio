import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CileuksaVillage from "./components/portfolio/detail-project/CileuksaVillage";
import HRIS from "./components/portfolio/detail-project/HRIS";
import TimelineApp from "./components/portfolio/detail-project/TimelineApp";
import ReservasiSim from "./components/portfolio/detail-project/ReservasiSim";
import SimKesMas from "./components/portfolio/detail-project/SimKesMas";
import ProjectManagement from "./components/portfolio/detail-project/ProjectManagement";
import Fatmawati from "./components/portfolio/detail-project/Fatmawati";
import Bekasi from "./components/portfolio/detail-project/Bekasi";
import Ciawi from "./components/portfolio/detail-project/Ciawi";
import Mangusada from "./components/portfolio/detail-project/Mangusada";
import AMC from "./components/portfolio/detail-project/AMC";
import Medan from "./components/portfolio/detail-project/Medan";
import Grhasia from "./components/portfolio/detail-project/Grhasia";
import Ternate from "./components/portfolio/detail-project/Ternate";
import Cibinong from "./components/portfolio/detail-project/Cibinong";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/projects/cileuksa-village" element={<CileuksaVillage />} />
          <Route path="/projects/hris" element={<HRIS />} />
          <Route path="/projects/timeline-app" element={<TimelineApp />} />
          <Route path="/projects/reservasi-app" element={<ReservasiSim />} />
          <Route path="/projects/simkesmas" element={<SimKesMas />} />
          <Route path="/projects/project-management" element={<ProjectManagement />} />
          <Route path="/projects/project-fatmawati" element={<Fatmawati />} />
          <Route path="/projects/project-bekasi" element={<Bekasi />} />
          <Route path="/projects/project-ciawi" element={<Ciawi />} />
          <Route path="/projects/project-mangusada" element={<Mangusada />} />
          <Route path="/projects/project-amc" element={<AMC />} />
          <Route path="/projects/project-royal-prima" element={<Medan />} />
          <Route path="/projects/project-grhasia" element={<Grhasia />} />
          <Route path="/projects/project-ternate" element={<Ternate />} />
          <Route path="/projects/project-cibinong" element={<Cibinong />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
