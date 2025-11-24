import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Gift, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import cinemaMamae from "@/assets/cinema-mamae.jpg";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";
import UrgencyBar from "@/components/UrgencyBar";
import SocialProofNotifications from "@/components/SocialProofNotifications";

const ComboVitalicio = () => {
  const benefits = [
    "Guia da Mãe Ninja 2.0 - Completo",
    "Eu Odeio Ser Mãe - Livro Digital",
    "Sons Calmantes Premium - Biblioteca Completa",
    "Cinema da Mamãe - Acesso Vitalício (BÔNUS)",
    "Atualizações Futuras Gratuitas",
    "Suporte Prioritário",
    "Comunidade Exclusiva",
    "Sem Mensalidades - Pague Uma Vez",
  ];

  const products = [
    { 
      image: guiaMaeNinja, 
      title: "Guia da Mãe Ninja 2.0",
      description: "7 técnicas científicas pra fazer bebê dormir em 2 minutos. Testado por 10.000+ mães exaustas. Rotinas passo a passo que FUNCIONAM quando você tá no limite."
    },
    { 
      image: euOdeioSerMae, 
      title: "Eu Odeio Ser Mãe",
      description: "A verdade crua que ninguém tem coragem de dizer. 127 páginas de histórias reais de mães que também odeiam. Você NÃO está sozinha nessa."
    },
    { 
      image: sonsCalmantes, 
      title: "Sons Calmantes Premium",
      description: "15 sons profissionais que acalmam bebê em segundos. White noise, batimentos cardíacos, chuva. Os mesmos usados em UTIs neonatais."
    },
    { 
      image: cinemaMamae, 
      title: "Cinema da Mamãe",
      badge: "GRÁTIS",
      description: "Streaming sem anúncios. Filmes, séries e documentários pra você assistir quando sobrar 5 minutos. Porque mãe também precisa desligar."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <UrgencyBar />
      <SocialProofNotifications />
      
      {/* Header */}
      <header className="border-b border-red-500/30 bg-slate-950/50 backdrop-blur-lg sticky top-[52px] z-40">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-red-500/10 text-slate-100">
              ← Voltar
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/20 px-6 py-2 rounded-full mb-6 border border-red-500/30">
            <Crown className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-red-400">Oferta Exclusiva</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
            Maternidade SEM Filtro
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Bebê dormindo + Sua sanidade mental preservada + Verdades que ninguém te conta.<br />
            Pague uma vez. Use pra sempre.
          </p>
        </div>

        {/* Products Preview with Descriptions */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-100">
            Você Está Exausta. Frustrada. No Limite.
          </h2>
          <p className="text-lg text-slate-300 text-center mb-8 max-w-3xl mx-auto">
            Enquanto todo mundo romantiza a maternidade, você tá aqui sem dormir há semanas, com bebê chorando sem parar, se sentindo culpada por não estar feliz. <span className="text-red-400 font-semibold">Isso acaba HOJE.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {products.map((product, index) => (
              <Card key={index} className="relative overflow-hidden border-red-500/30 bg-slate-800/50 backdrop-blur group hover:border-red-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-4 p-4">
                  <div className="w-full md:w-32 h-40 md:h-auto relative overflow-hidden rounded-lg flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-red-100 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-red-500/20 border-red-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-1.5 rounded-full mb-6 border border-red-500/30">
                <Gift className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">
                  Cinema da Mamãe GRÁTIS
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-100">
                Acabe Com Isso HOJE
              </h2>
              
              <p className="text-base md:text-lg text-slate-300 mb-8 max-w-md">
                Tudo que você precisa pra sobreviver à maternidade real. Sem enrolação.
              </p>

              <div className="mb-8 flex flex-col items-center w-full">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-xl md:text-2xl text-slate-400 line-through">
                    R$ 297,90
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                    R$ 197,90
                  </span>
                </div>
                <div className="inline-block bg-red-500/20 text-red-400 px-6 py-2 rounded-full font-semibold text-sm md:text-base border border-red-500/30">
                  Economize R$ 100,00
                </div>
              </div>

              <a href="https://pay.kirvano.com/ffe6e704-5057-4d62-8658-909d09cbb054" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button 
                  size="lg" 
                  className="w-full max-w-md h-auto py-6 px-8 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 group text-white font-bold mb-6 text-lg"
                >
                  Quero Tudo Agora
                </Button>
              </a>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <Star className="w-4 h-4 fill-red-500 text-red-500" />
                <span>Pagamento único e seguro</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-red-500/20 border-red-500/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-100 flex items-center justify-center gap-3">
              <Crown className="w-8 h-8 text-red-400" />
              O que está incluído
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-red-500/20 rounded-full p-1 group-hover:bg-red-500/30 transition-colors duration-300 flex-shrink-0 border border-red-500/30">
                    <Check className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-base md:text-lg text-slate-200 group-hover:text-red-300 transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Trust Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-red-500/30 text-center backdrop-blur">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-100">
              Garantia de Satisfação
            </h3>
            <p className="text-slate-300 text-sm md:text-base">
              Experimente sem riscos. Se não estiver completamente satisfeita nos primeiros 7 dias, 
              devolvemos 100% do seu investimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboVitalicio;