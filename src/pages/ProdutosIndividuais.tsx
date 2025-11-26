import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackProductView, trackBeginCheckout, trackPageView, trackButtonClick } from "@/lib/analytics";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";
import seloGarantia from "@/assets/selo-garantia.png";

const ProdutosIndividuais = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track page view
    trackPageView('/produtos-individuais', 'Produtos Individuais - MAMAEZEN');
  }, []);

  const produtos = [
    {
      id: "guia-mae-ninja",
      image: guiaMaeNinja,
      title: "Guia da Mãe Ninja 2.0",
      problema: "Seu bebê chora sem parar. São 3h da manhã e você está no LIMITE.",
      solucao: "7 técnicas científicas que fazem bebê dormir em 2 minutos. Testado por 10.000+ mães desesperadas.",
      preco: "97,90",
      link: "/produto/guia-mae-ninja",
      urgencia: "Apenas 3 vagas com este preço hoje"
    },
    {
      id: "eu-odeio-ser-mae",
      image: euOdeioSerMae,
      title: "Eu Odeio Ser Mãe",
      problema: "Você sente culpa por não estar aproveitando a maternidade. Ninguém entende.",
      solucao: "A verdade crua que ninguém te contou. 127 páginas de histórias reais. Você NÃO está sozinha.",
      preco: "67,90",
      link: "/produto/eu-odeio-ser-mae",
      urgencia: "Última chance com 40% OFF"
    },
    {
      id: "sons-calmantes",
      image: sonsCalmantes,
      title: "Sons Calmantes Premium",
      problema: "Você já tentou TUDO mas seu bebê não para de chorar. Você quer gritar.",
      solucao: "15 sons profissionais que acalmam em segundos. Os mesmos usados em UTIs neonatais.",
      preco: "47,90",
      link: "/produto/sons-calmantes",
      urgencia: "Oferta expira em 10 minutos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-pink-950 to-slate-900">
      {/* Header com botão de sair */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-pink-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-sm md:text-base font-semibold text-pink-100">
            Escolha Seu Caminho Para a Paz
          </h2>
          <Button
            onClick={() => {
              trackButtonClick('nao_quero_nada', 'produtos_individuais_header');
              navigate("/obrigado");
            }}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-slate-200 hover:bg-pink-500/10"
          >
            <X className="w-4 h-4 mr-1" />
            <span className="hidden md:inline">Não quero nada</span>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section - Copy de Dor */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-pink-100 mb-6 leading-tight">
            Eu Entendo Que Não Está Pronta<br />
            <span className="text-red-400">Mas E Se Continuar Assim?</span>
          </h1>
          <p className="text-lg md:text-xl text-pink-200 mb-4">
            Mais uma noite sem dormir. Mais um dia fingindo que está tudo bem.
          </p>
          <p className="text-base md:text-lg text-pink-300">
            <span className="font-bold text-red-400">10.000+ mães</span> que estavam onde você está agora escolheram mudar.<br />
            Qual dessas soluções faz mais sentido pra você HOJE?
          </p>
        </div>

        {/* Produtos */}
        <div className="max-w-5xl mx-auto space-y-8 mb-12">
          {produtos.map((produto, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-pink-500/30 bg-gradient-to-br from-slate-800/90 to-pink-900/50 backdrop-blur-lg hover:border-pink-500/50 transition-all duration-300 shadow-xl shadow-pink-500/10"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                  {/* Imagem */}
                  <div className="md:col-span-1">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                      <img 
                        src={produto.image} 
                        alt={produto.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        {produto.urgencia}
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-pink-100 mb-4">
                        {produto.title}
                      </h3>
                      
                      {/* A DOR */}
                      <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-4">
                        <p className="text-red-200 font-semibold text-sm mb-1">
                          💔 Sua Realidade AGORA:
                        </p>
                        <p className="text-red-100 text-base">
                          {produto.problema}
                        </p>
                      </div>

                      {/* A SOLUÇÃO */}
                      <div className="bg-pink-900/20 border border-pink-500/20 rounded-lg p-4 mb-6">
                        <p className="text-pink-200 font-semibold text-sm mb-1">
                          ✨ O Que Isso Resolve:
                        </p>
                        <p className="text-pink-100 text-base">
                          {produto.solucao}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-start gap-3 mb-2">
                        <span className="text-4xl md:text-5xl font-bold text-red-400">
                          R$ {produto.preco}
                        </span>
                        <span className="text-lg text-pink-300">
                          pagamento único
                        </span>
                      </div>
                      
                      <Button
                        onClick={() => {
                          trackProductView(produto.title);
                          trackBeginCheckout();
                          navigate(produto.link);
                        }}
                        className="w-full py-6 text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-500/50 transition-all duration-300"
                      >
                        Sim, Eu Preciso Disso Agora
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>

                      <div className="flex items-center justify-center gap-4 text-xs text-pink-300">
                        <div className="flex items-center gap-1">
                          <Shield className="w-4 h-4" />
                          <span>7 dias de garantia</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Acesso imediato</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Garantia Final */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/90 to-pink-900/40 border-pink-500/30 p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <img 
                src={seloGarantia} 
                alt="Garantia 7 Dias" 
                className="w-32 h-32 object-contain flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-pink-100 mb-3">
                  Você Não Tem Nada a Perder
                </h3>
                <p className="text-pink-200 text-base leading-relaxed">
                  Escolha qualquer produto acima. Teste por 7 dias. Se não transformar sua realidade, 
                  devolvemos 100% do seu dinheiro. <span className="font-bold text-red-400">Sem perguntas, sem burocracia.</span>
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Última Chance - Upsell para Combo */}
        <div className="text-center mt-12 max-w-2xl mx-auto space-y-4">
          <div className="bg-gradient-to-r from-pink-900/40 to-red-900/40 border border-red-500/30 rounded-xl p-6">
            <p className="text-pink-200 text-lg font-semibold mb-3">
              🔥 Espera! Tenho algo MELHOR pra você...
            </p>
            <p className="text-pink-300 text-base mb-4">
              Que tal ter TUDO isso + muito mais por um preço especial?
            </p>
            <Button
              onClick={() => {
                trackButtonClick('ver_oferta_especial', 'produtos_individuais_upsell');
                navigate("/combo-vitalicio");
              }}
              className="w-full max-w-md py-6 text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              Ver Oferta Especial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <Button
            onClick={() => {
              trackButtonClick('nao_prefiro_continuar', 'produtos_individuais_footer');
              navigate("/obrigado");
            }}
            variant="ghost"
            className="text-slate-400 hover:text-slate-200 text-sm"
          >
            Não, prefiro continuar assim
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProdutosIndividuais;
