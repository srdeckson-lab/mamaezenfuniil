import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { trackBeginCheckout } from "@/lib/analytics";

const FixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Não mostrar o CTA na página inicial (quiz) ou na página do combo
  if (location.pathname === "/" || location.pathname === "/combo-vitalicio") {
    return null;
  }

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in px-4 w-full max-w-md">
      <div className="relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full p-1.5 hover:bg-slate-800 transition-colors shadow-lg z-10"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
        <Link to="/combo-vitalicio" className="block">
          <Button 
            size="lg" 
            onClick={trackBeginCheckout}
            className="w-full h-auto py-4 px-6 rounded-2xl shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 group text-white font-bold text-base"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500 flex-shrink-0" />
            <span className="mx-3">Combo Vitalício - R$ 197,90</span>
            <span className="bg-white/20 px-2 py-1 rounded-lg text-xs font-bold">-34%</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FixedCTA;
