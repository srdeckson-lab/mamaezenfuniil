import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Gift, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-primary/10">
              ← Voltar
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-6 border border-primary/20">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Oferta Exclusiva</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Combo Vitalício Premium
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Acesso completo e permanente a todo o conteúdo MAMAEZEN.<br />
            Investimento único, benefícios para toda a vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Pricing Card */}
          <Card className="p-8 lg:p-12 bg-gradient-card shadow-elevated border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-1.5 rounded-full mb-6">
                <Gift className="w-4 h-4 text-accent-foreground" />
                <span className="text-sm font-semibold text-accent-foreground">
                  Cinema da Mamãe GRÁTIS
                </span>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl text-muted-foreground line-through">
                    R$ 297,90
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    R$ 197,90
                  </span>
                  <span className="text-xl text-muted-foreground">
                    vitalício
                  </span>
                </div>
                <div className="mt-4 inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold">
                  Economize R$ 100,00
                </div>
              </div>

              <div className="flex flex-col items-center w-full">
                <Button 
                  size="lg" 
                  className="w-full text-xl py-7 rounded-xl shadow-elevated hover:shadow-hover transition-all duration-300 bg-gradient-primary border-0 group mb-6"
                >
                  <Sparkles className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Garantir Acesso Vitalício
                  <Crown className="ml-2 group-hover:scale-125 transition-transform duration-300" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span>Pagamento único e seguro</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Benefits Card */}
          <Card className="p-8 lg:p-12 bg-gradient-card shadow-elevated border-primary/20">
            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Crown className="w-8 h-8 text-primary" />
              O que está incluído
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-primary/10 rounded-full p-1 group-hover:bg-primary/20 transition-colors duration-300">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Garantia de Satisfação
            </h3>
            <p className="text-muted-foreground">
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
