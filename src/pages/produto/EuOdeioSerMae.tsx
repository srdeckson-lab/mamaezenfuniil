import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Download, Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";

const EuOdeioSerMae = () => {
  const features = [
    "Abordagem Honesta e Sem Julgamentos",
    "Histórias Reais de Mães",
    "Técnicas de Gerenciamento Emocional",
    "Exercícios Práticos de Autocuidado",
    "Formato PDF de Fácil Leitura",
    "Acesso Imediato no Dispositivo",
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-primary/10">
              ← Voltar para Home
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
              className="w-full rounded-3xl shadow-elevated"
            />
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Verdade Sem Filtros</h3>
                  <p className="text-muted-foreground">
                    O livro que aborda os desafios reais da maternidade que ninguém fala, mas todas sentem.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-1.5 rounded-full mb-4">
              <Star className="w-4 h-4 text-accent-foreground fill-accent-foreground" />
              <span className="text-sm font-semibold text-accent-foreground">NOVO LANÇAMENTO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Eu Odeio Ser Mãe
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              O livro que nenhuma mãe admite, mas que precisam ler. Uma jornada honesta 
              pelos desafios emocionais da maternidade moderna.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-primary" />
                O que você encontrará:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <Card className="p-6 bg-gradient-card shadow-elevated border-primary/20 mb-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl text-muted-foreground line-through">R$ 79,00</span>
                <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  R$ 49,00
                </span>
              </div>
              <Button 
                size="lg" 
                className="w-full text-lg py-6 rounded-xl shadow-elevated hover:shadow-hover transition-all duration-300 bg-gradient-primary border-0 group"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                Comprar Agora
                <Sparkles className="ml-2 group-hover:scale-125 transition-transform duration-300" />
              </Button>
            </Card>

            <div className="bg-accent/10 rounded-xl p-4 border border-accent/20 text-center">
              <p className="text-sm text-accent-foreground">
                <Crown className="w-4 h-4 inline mr-1" />
                Ou economize R$ 100 no <Link to="/combo-vitalicio" className="font-bold underline">Combo Vitalício</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuOdeioSerMae;
