import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Download, Lock, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPageView, trackBeginCheckout } from "@/lib/analytics";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";

const GuiaMaeNinja = () => {
  useEffect(() => {
    trackPageView('/produto/guia-mae-ninja', 'Guia da Mãe Ninja - MAMAEZEN');
  }, []);

  const features = [
    "7 Segredos Cientificamente Comprovados",
    "Método Passo a Passo Ilustrado",
    "Técnicas para Bebês de 0 a 3 Anos",
    "Áudios de Apoio Inclusos",
    "Garantia de Resultados em 7 Dias",
    "Acesso Imediato após Pagamento",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-amber-500/20 bg-slate-950/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/produtos-individuais">
            <Button variant="ghost" className="hover:bg-amber-500/10 text-amber-100">
              ← Voltar
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="space-y-6">
            <img 
              src={guiaMaeNinja} 
              alt="Guia da Mãe Ninja 2.0"
              className="w-full rounded-3xl shadow-2xl shadow-amber-500/20 border border-amber-500/30"
            />
            <Card className="p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-amber-500/30 backdrop-blur">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-amber-100">Conteúdo Exclusivo</h3>
                  <p className="text-slate-300">
                    Método desenvolvido por especialistas em sono infantil com mais de 10 anos de experiência.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-1.5 rounded-full mb-4 border border-amber-500/30">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-semibold text-amber-400">MAIS VENDIDO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-amber-300 to-red-400 bg-clip-text text-transparent">
              Guia da Mãe Ninja 2.0
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Descubra os 7 segredos para fazer o bebê dormir em apenas 2 minutos. 
              Método comprovado que já ajudou mais de 10.000 mães.
            </p>

            <div className="bg-slate-900/50 rounded-xl p-6 mb-8 border border-amber-500/20">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-100">
                <Check className="w-5 h-5 text-amber-500" />
                O que você vai receber:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-amber-500/20 border-amber-500/30 mb-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl text-slate-400 line-through">R$ 97,00</span>
                <span className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  R$ 67,00
                </span>
              </div>
              <a href="https://pay.kirvano.com/2e5bf977-fda2-4ae5-904f-f8e8588a40d2" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 border-0 group text-slate-950 font-bold"
                >
                  <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                  Comprar Agora
                  <Sparkles className="ml-2 group-hover:scale-125 transition-transform duration-300" />
                </Button>
              </a>
            </Card>

            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30 text-center">
              <p className="text-sm text-red-300">
                <Crown className="w-4 h-4 inline mr-1" />
                Ou economize R$ 100 no <Link to="/combo-vitalicio" className="font-bold underline text-red-400">Combo Vitalício</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaMaeNinja;
