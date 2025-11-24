import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadCapture from "./pages/LeadCapture";
import QuizFunil from "./pages/QuizFunil";
import Home from "./pages/Home";
import ComboVitalicio from "./pages/ComboVitalicio";
import ProdutosIndividuais from "./pages/ProdutosIndividuais";
import Obrigado from "./pages/Obrigado";
import GuiaMaeNinja from "./pages/produto/GuiaMaeNinja";
import EuOdeioSerMae from "./pages/produto/EuOdeioSerMae";
import SonsCalmantes from "./pages/produto/SonsCalmantes";
import CinemaMamae from "./pages/produto/CinemaMamae";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LeadCapture />} />
          <Route path="/quiz" element={<QuizFunil />} />
          <Route path="/produtos" element={<Home />} />
          <Route path="/combo-vitalicio" element={<ComboVitalicio />} />
          <Route path="/produtos-individuais" element={<ProdutosIndividuais />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/produto/guia-mae-ninja" element={<GuiaMaeNinja />} />
          <Route path="/produto/eu-odeio-ser-mae" element={<EuOdeioSerMae />} />
          <Route path="/produto/sons-calmantes" element={<SonsCalmantes />} />
          <Route path="/produto/cinema-mamae" element={<CinemaMamae />} />
          <Route path="/install" element={<Install />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
