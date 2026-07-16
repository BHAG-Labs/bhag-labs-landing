import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import Index from "./pages/Index.tsx";
import Sigint from "./pages/Sigint.tsx";
import LegalPage from "./pages/LegalPage.tsx";
import NotFound from "./pages/NotFound.tsx";

// 2026-07-05: the site is single-product now — the BHAG Labs pitch-deck app
// (seven answers in, an investor-ready deck out). The old multi-product
// landing and the other product pages live in src/unreleased/ (not routed, so
// not bundled) until they're ready to ship. To resurrect one, move it back
// under src/pages and restore its route below.
//
// import Hissa from "./unreleased/pages/Hissa.tsx";
// import Pitchwala from "./unreleased/pages/Pitchwala.tsx";
// import Yantra from "./unreleased/pages/Yantra.tsx";
// import IndexAllProducts from "./unreleased/pages/IndexAllProducts.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* SIGINT keeps its door: /sigint redirects to sigint.bhaglabs.com */}
            <Route path="/sigint" element={<Sigint />} />
            <Route path="/bazaar" element={<Sigint />} />
            {/* Unreleased products (parked in src/unreleased/, not routed):
            <Route path="/hissa" element={<Hissa />} />
            <Route path="/pitchwala" element={<Pitchwala />} />
            <Route path="/yantra" element={<Yantra />} />
            <Route path="/vyapaar" element={<Yantra />} />
            */}
            <Route path="/privacy" element={<LegalPage kind="privacy" />} />
            <Route path="/terms" element={<LegalPage kind="terms" />} />
            <Route path="/grievance" element={<LegalPage kind="grievance" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
