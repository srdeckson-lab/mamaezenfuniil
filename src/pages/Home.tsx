import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Crown, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";
import cinemaMamae from "@/assets/cinema-mamae.jpg";
import FixedCTA from "@/components/FixedCTA";
import bannerHero from "@/assets/banner-hero.png";

const Home = () => {
  const products = [
    {
      title: "Guia da Mãe Ninja 2.0",
      description: "7 técnicas pra fazer bebê dormir em 2 minutos. Método testado por 10.000+ mães desesperadas que não dormiam há semanas.",
      image: guiaMaeNinja,
      link: "/produto/guia-mae-ninja",
      badge: "FUNCIONA"
    },
    {
      title: "Eu Odeio Ser Mãe",
      description: "127 páginas das verdades que ninguém te contou. Você NÃO é mãe desnaturada. 89% das mães sentem isso e escondem.",
      image: euOdeioSerMae,
      link: "/produto/eu-odeio-ser-mae",
      badge: "POLÊMICO"
    },
    {
      title: "Sons Calmantes",
      description: "15 sons profissionais que acalmam bebê em segundos. Os mesmos usados em UTIs neonatais pra parar choro.",
      image: sonsCalmantes,
      link: "/produto/sons-calmantes",
    },
    {
      title: "Cinema da Mamãe",
      description: "Streaming sem anúncios. Porque você merece 30 minutos de paz sem se sentir culpada.",
      image: cinemaMamae,
      link: "/produto/cinema-mamae",
      badge: "GRÁTIS"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <FixedCTA />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="w-full">
          <img 
            src={bannerHero} 
            alt="Eu Odeio Ser Mãe - O livro que nenhuma mãe admite, mas que precisam ler"
            className="w-full h-auto"
          />
        </div>
        
        <div className="container mx-auto relative z-10 px-4 py-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Hero Content */}
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Você Odeia Ser Mãe?<br />
                <span className="text-red-400">Você NÃO Está Sozinha.</span>
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                3h da manhã. Bebê chorando. De novo. Você exausta. Se sentindo culpada por não estar feliz.<br />
                <span className="text-white font-semibold">Enquanto o Instagram mostra maternidade perfeita, você tá no limite.</span>
              </p>
              <div className="bg-pink-900/30 border border-pink-400/30 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                <p className="text-pink-100 text-base leading-relaxed">
                  <span className="font-bold text-red-400">89% das mães</span> sentem que odeiam ser mãe em algum momento. Mas ninguém fala disso. Ninguém te prepara. <span className="text-white font-semibold">Até agora.</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/combo-vitalicio" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-lg px-8 py-6 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 group text-white font-bold whitespace-nowrap">
                    Quero Parar de Sofrer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              A Solução Que Funciona DE VERDADE
            </h2>
            <p className="text-lg md:text-xl text-pink-200 max-w-3xl">
              Chega de métodos milagrosos que não funcionam. Chega de culpa. Chega de fingir que tá tudo bem.<br />
              <span className="text-red-400 font-bold">Isso aqui é pra mãe REAL que tá no limite.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                link={product.link}
                badge={product.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl shadow-red-500/20 border border-red-500/30 backdrop-blur">
            <div className="inline-flex items-center gap-2 bg-red-500/20 px-6 py-2 rounded-full mb-6 border border-red-500/30">
              <span className="text-sm font-bold text-red-300">🔥 MAIS DE 10.000 MÃES JÁ COMPRARAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Pare de Sofrer. Comece HOJE.
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Bebê dormindo + Você com sua sanidade mental de volta + As verdades que você precisa ouvir.<br />
              <span className="text-red-400 font-bold">Tudo por menos que uma consulta de pediatra.</span>
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-slate-400 line-through">R$ 297,90</span>
                <span className="text-5xl md:text-6xl font-bold text-white">
                  R$ 197,90
                </span>
              </div>
              <span className="inline-block bg-red-500/20 text-red-300 px-6 py-2 rounded-full font-semibold border border-red-500/30">
                Economize R$ 100,00 - Pague 1x, Use pra Sempre
              </span>
            </div>
            <Link to="/combo-vitalicio" className="w-full sm:w-auto flex justify-center">
              <Button size="lg" className="w-full sm:w-auto text-xl px-12 py-7 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 group text-white font-bold">
                Quero Tudo Agora
              </Button>
            </Link>
            <p className="text-sm text-slate-400 mt-6">
              ⚡ Acesso instantâneo após o pagamento • 🔒 Compra 100% segura • ✅ Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
