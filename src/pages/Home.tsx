import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Crown, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";
import cinemaMamae from "@/assets/cinema-mamae.jpg";

const Home = () => {
  const products = [
    {
      title: "Guia da Mãe Ninja 2.0",
      description: "Descubra os 7 segredos para fazer o bebê dormir em apenas 2 minutos",
      image: guiaMaeNinja,
      link: "/produto/guia-mae-ninja",
      badge: "MAIS VENDIDO"
    },
    {
      title: "Eu Odeio Ser Mãe",
      description: "O livro que nenhuma mãe admite, mas que precisam ler",
      image: euOdeioSerMae,
      link: "/produto/eu-odeio-ser-mae",
      badge: "NOVO"
    },
    {
      title: "Sons Calmantes",
      description: "Áudios premium em alta qualidade para acalmar e fazer o bebê dormir",
      image: sonsCalmantes,
      link: "/produto/sons-calmantes",
    },
    {
      title: "Cinema da Mamãe",
      description: "Streaming premium sem anúncios - seu momento de relaxar",
      image: cinemaMamae,
      link: "/produto/cinema-mamae",
      badge: "BÔNUS"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-6 border border-primary/20">
              <Crown className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Área Premium MAMAEZEN</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Sua Jornada Premium<br />Começa Aqui
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Recursos exclusivos para mães que querem tranquilidade,<br />
              conhecimento e momentos especiais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/combo-vitalicio">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-elevated hover:shadow-hover transition-all duration-300 bg-gradient-primary border-0 group">
                  <Gift className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Ver Combo Vitalício
                  <Sparkles className="ml-2 group-hover:scale-125 transition-transform duration-300" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                Explorar Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Produtos Premium
              </h2>
              <p className="text-muted-foreground">
                Escolha individual ou economize com o combo vitalício
              </p>
            </div>
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
          <div className="bg-gradient-card rounded-3xl p-12 text-center shadow-elevated border border-primary/10">
            <Crown className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Combo Vitalício Premium
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Acesso completo a todos os produtos + Cinema da Mamãe de bônus
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-muted-foreground line-through">R$ 297,90</span>
                <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  R$ 197,90
                </span>
              </div>
              <span className="inline-block bg-accent/20 text-accent-foreground px-6 py-2 rounded-full font-semibold">
                Economize R$ 100,00
              </span>
            </div>
            <Link to="/combo-vitalicio">
              <Button size="lg" className="text-xl px-12 py-7 rounded-full shadow-elevated hover:shadow-hover transition-all duration-300 bg-gradient-primary border-0 group">
                <Sparkles className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Garantir Acesso Vitalício
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
