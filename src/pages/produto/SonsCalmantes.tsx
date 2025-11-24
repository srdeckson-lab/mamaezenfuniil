import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Download, Music, Sparkles, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";

const SonsCalmantes = () => {
  const features = [
    "50+ Áudios em Alta Qualidade (4K)",
    "Reprodução Contínua Sem Interrupções",
    "Ruído Branco Premium",
    "Sons da Natureza",
    "Canções de Ninar Clássicas",
    "Batidas Cardíacas Maternas",
    "Download para Uso Offline",
    "Atualizações Mensais Gratuitas",
  ];

  const audioCategories = [
    { icon: "🌊", name: "Ondas do Mar", duration: "12h 4K" },
    { icon: "🌧️", name: "Chuva Suave", duration: "10h 4K" },
    { icon: "❤️", name: "Para Você Mamãe", duration: "Premium HD" },
    { icon: "🎵", name: "Canção de Ninar", duration: "HD" },
    { icon: "💨", name: "Vento Suave", duration: "10h 4K" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/produtos-individuais">
            <Button variant="ghost" className="hover:bg-primary/10">
              ← Voltar
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image & Audio Preview */}
          <div className="space-y-6">
            <img 
              src={sonsCalmantes} 
              alt="Sons Calmantes Premium"
              className="w-full rounded-3xl shadow-elevated"
            />
            
            <Card className="p-6 bg-gradient-card border-primary/20">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                <Music className="w-5 h-5 text-primary" />
                Categorias Disponíveis
              </h3>
              <div className="space-y-3">
                {audioCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-medium text-foreground">{category.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{category.duration}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="flex items-start gap-4">
                <Volume2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Qualidade Premium</h3>
                  <p className="text-muted-foreground">
                    Áudios em alta qualidade, reprodução contínua sem interrupções. 
                    Perfeito para criar um ambiente tranquilo.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              <Music className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">BIBLIOTECA COMPLETA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Sons Calmantes Premium
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Áudios premium em alta qualidade para acalmar e fazer o bebê dormir. 
              Biblioteca completa com 50+ sons cuidadosamente selecionados.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-primary" />
                Recursos inclusos:
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
                <span className="text-2xl text-muted-foreground line-through">R$ 89,00</span>
                <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  R$ 49,90
                </span>
              </div>
              <a href="https://pay.kirvano.com/ffe6e704-5057-4d62-8658-909d09cbb054" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 rounded-xl shadow-elevated hover:shadow-hover transition-all duration-300 bg-gradient-primary border-0 group"
                >
                  <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                  Comprar Agora
                  <Sparkles className="ml-2 group-hover:scale-125 transition-transform duration-300" />
                </Button>
              </a>
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

export default SonsCalmantes;
