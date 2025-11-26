import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Download, Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPageView, trackBeginCheckout } from "@/lib/analytics";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";

const EuOdeioSerMae = () => {
  useEffect(() => {
    trackPageView('/produto/eu-odeio-ser-mae', 'Eu Odeio Ser Mãe - MAMAEZEN');
  }, []);

  const features = [
    "Abordagem Honesta e Sem Julgamentos",
    "Histórias Reais de Mães",
    "Técnicas de Gerenciamento Emocional",
    "Exercícios Práticos de Autocuidado",
    "Formato PDF de Fácil Leitura",
    "Acesso Imediato no Dispositivo",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-red-500/30 bg-slate-950/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/produtos-individuais">
            <Button variant="ghost" className="hover:bg-red-500/10 text-slate-100">
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
              src={euOdeioSerMae} 
              alt="Eu Odeio Ser Mãe"
              className="w-full rounded-3xl shadow-2xl shadow-red-500/20 border border-red-500/30"
            />
            <Card className="p-6 bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-red-500/30 backdrop-blur">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-red-100">Verdade Sem Filtros</h3>
                  <p className="text-slate-300">
                    O livro que aborda os desafios reais da maternidade que ninguém fala, mas todas sentem.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-1.5 rounded-full mb-4 border border-red-500/30">
              <Star className="w-4 h-4 text-red-400 fill-red-400" />
              <span className="text-sm font-semibold text-red-400">NOVO LANÇAMENTO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
              Eu Odeio Ser Mãe
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              O livro que nenhuma mãe admite, mas que precisam ler. Uma jornada honesta 
              pelos desafios emocionais da maternidade moderna.
            </p>

            <div className="bg-slate-900/50 rounded-xl p-6 mb-8 border border-red-500/20">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-100">
                <Check className="w-5 h-5 text-red-400" />
                O que você encontrará:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-red-500/20 border-red-500/30 mb-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl text-slate-400 line-through">R$ 79,00</span>
                <span className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  R$ 49,00
                </span>
              </div>
              <a href="https://pay.kirvano.com/f4879641-b6b4-452b-b2f9-0e60b36c6aaf" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 group text-white font-bold"
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

export default EuOdeioSerMae;
