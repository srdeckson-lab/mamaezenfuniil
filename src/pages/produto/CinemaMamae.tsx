import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Film, Popcorn, Sparkles, Star, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPageView, trackBeginCheckout } from "@/lib/analytics";
import cinemaMamae from "@/assets/cinema-mamae.jpg";

const CinemaMamae = () => {
  useEffect(() => {
    trackPageView('/produto/cinema-mamae', 'Cinema da Mamãe - MAMAEZEN');
  }, []);

  const features = [
    "Streaming Sem Anúncios",
    "Filmes e Séries Ilimitados",
    "Qualidade HD e 4K",
    "Perfis Múltiplos",
    "Download para Assistir Offline",
    "Conteúdo Atualizado Semanalmente",
    "Compatível com Todos Dispositivos",
    "Suporte 24/7",
  ];

  const categories = [
    { icon: "🎬", name: "Dramas e Comédias" },
    { icon: "💕", name: "Romances" },
    { icon: "📚", name: "Documentários" },
    { icon: "🎭", name: "Séries Completas" },
    { icon: "🌟", name: "Lançamentos" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900">
      <header className="border-b border-pink-400/30 bg-pink-950/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-pink-400/10 text-pink-100">
              ← Voltar para Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={cinemaMamae} 
                alt="Cinema da Mamãe"
                className="w-full rounded-3xl shadow-2xl shadow-pink-500/20 border border-pink-400/30"
              />
              <div className="absolute top-4 right-4 bg-pink-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                BÔNUS EXCLUSIVO
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-pink-800/90 to-pink-700/90 border-pink-400/30 backdrop-blur">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-pink-100">
                <Film className="w-5 h-5 text-pink-300" />
                Categorias Disponíveis
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <div key={index} className="p-3 bg-pink-900/50 rounded-lg text-center hover:bg-pink-900/70 transition-colors duration-300 border border-pink-400/20">
                    <span className="text-2xl block mb-1">{category.icon}</span>
                    <span className="text-sm font-medium text-pink-100">{category.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-pink-800/90 to-pink-700/90 border-pink-400/30 backdrop-blur">
              <div className="flex items-start gap-4">
                <Popcorn className="w-6 h-6 text-pink-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-pink-100">Seu Momento de Relaxar</h3>
                  <p className="text-pink-200">
                    Streaming premium sem anúncios para você aproveitar seus momentos livres. 
                    Entretenimento de qualidade quando você precisar.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-400/20 px-4 py-1.5 rounded-full mb-4 border border-pink-400/30">
              <Tv className="w-4 h-4 text-pink-300" />
              <span className="text-sm font-semibold text-pink-300">STREAMING PREMIUM</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-pink-300 to-rose-400 bg-clip-text text-transparent">
              Cinema da Mamãe
            </h1>
            
            <p className="text-xl text-pink-100 mb-6 leading-relaxed">
              Seu serviço de streaming premium sem anúncios. Filmes, séries e documentários 
              ilimitados para relaxar nos momentos livres.
            </p>

            <div className="bg-pink-900/50 rounded-xl p-6 mb-8 border border-pink-400/20">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-pink-100">
                <Check className="w-5 h-5 text-pink-300" />
                Recursos Premium:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-pink-300 flex-shrink-0 mt-0.5" />
                    <span className="text-pink-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <Card className="p-6 bg-gradient-to-br from-pink-800 to-pink-700 shadow-2xl shadow-pink-500/30 border-pink-400/40 mb-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-pink-400/20 px-4 py-2 rounded-full mb-3 border border-pink-300/30">
                  <Star className="w-5 h-5 text-pink-300 fill-current" />
                  <span className="font-bold text-pink-100">BÔNUS NO COMBO VITALÍCIO</span>
                </div>
                <p className="text-lg text-pink-200 mb-4">
                  Este serviço está disponível GRATUITAMENTE no Combo Vitalício
                </p>
                <div className="text-5xl font-bold mb-4 text-pink-100">
                  GRÁTIS
                </div>
                <p className="text-sm text-pink-300">
                  (Valor individual: R$ 49,90/mês)
                </p>
              </div>
            </Card>

            <Link to="/combo-vitalicio">
              <Button 
                size="lg" 
                className="w-full text-lg py-6 rounded-xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 border-0 group text-white font-bold"
              >
                <Crown className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Ver Combo Vitalício
                <Sparkles className="ml-2 group-hover:scale-125 transition-transform duration-300" />
              </Button>
            </Link>

            <p className="text-center text-sm text-pink-300 mt-4">
              Disponível exclusivamente no pacote completo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaMamae;
