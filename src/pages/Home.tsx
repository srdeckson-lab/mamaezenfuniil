import { useEffect } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Crown, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPageView, trackButtonClick } from "@/lib/analytics";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";
import cinemaMamae from "@/assets/cinema-mamae.jpg";
import FixedCTA from "@/components/FixedCTA";
import bannerHero from "@/assets/banner-hero.png";
import maeExausta from "@/assets/mae-exausta.png";

const Home = () => {
  useEffect(() => {
    trackPageView('/', 'Home - MAMAEZEN');
  }, []);

  const products = [
    {
      title: "Guia da Mãe Ninja 2.0",
      description: "7 técnicas científicas incluindo Charutinho Seguro, Ruído Branco Premium, Ambiente Santuário. Os mesmos métodos de UTIs neonatais.",
      image: guiaMaeNinja,
      link: "/produto/guia-mae-ninja",
      badge: "FUNCIONA"
    },
    {
      title: "Eu Odeio Ser Mãe",
      description: "As 7 Frases Que Salvam + Os 5 Dias Que Toda Mãe Odeia. Histórias reais. Técnicas de gerenciamento emocional. Você NÃO é louca.",
      image: euOdeioSerMae,
      link: "/produto/eu-odeio-ser-mae",
      badge: "POLÊMICO"
    },
    {
      title: "Sons Calmantes",
      description: "50+ áudios em 4K. Ruído branco profissional, batimentos cardíacos, chuva. 12h de reprodução contínua. Download offline.",
      image: sonsCalmantes,
      link: "/produto/sons-calmantes",
    },
    {
      title: "Cinema da Mamãe",
      description: "Streaming HD/4K sem anúncios. Filmes, séries, documentários ilimitados. Download offline. 30 minutos de paz sem culpa.",
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
        <div className="sticky top-0 z-50 w-full">
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
                São 3h da Manhã.<br />
                <span className="text-red-400">Você Tá Chorando no Banheiro de Novo.</span>
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6 leading-relaxed max-w-4xl mx-auto">
                Bebê chorando sem parar. Você tentou TUDO. Nada funciona.<br />
                <span className="text-white font-semibold">A culpa aperta. "Eu sou uma mãe horrível", você pensa.</span><br />
                <span className="text-red-300">Você não aguenta mais fingir que tá feliz.</span>
              </p>
              
              <div className="bg-red-900/40 border-2 border-red-400/50 rounded-2xl p-8 mb-6 max-w-4xl mx-auto">
                <p className="text-white text-xl font-bold mb-4">
                  A Verdade Que Ninguém Te Contou:
                </p>
                <p className="text-pink-100 text-base leading-relaxed mb-4">
                  <span className="font-bold text-red-400">89% das mães</span> pensam em fugir. Em desistir. Em gritar até perder a voz.<br />
                  Você não é louca. <span className="text-white font-bold">Você só não sabia que ia doer assim.</span>
                </p>
                <p className="text-pink-200 text-sm italic">
                  "O Dia Que Tu Quer Gritar. O Dia Que Tu Chora No Banheiro. O Dia Que Tu Pensa Em Fugir."<br />
                  <span className="text-red-300">Esses dias são reais. São exaustivos. E ninguém fala sobre isso.</span>
                </p>
              </div>
              
              <div className="bg-slate-800/80 border-2 border-white/20 rounded-2xl p-8 mb-8 max-w-5xl mx-auto">
                <p className="text-white text-2xl font-bold mb-6 text-center">
                  Tudo Que Você Vai Receber Agora:
                </p>
                
                <div className="grid md:grid-cols-2 gap-5 text-left">
                  <div className="bg-red-900/40 rounded-xl p-6 border-2 border-red-400/40">
                    <p className="text-red-300 font-bold text-base mb-3">GUIA DA MÃE NINJA 2.0</p>
                    <ul className="text-pink-100 text-sm space-y-2 leading-relaxed">
                      <li><span className="text-white font-semibold">→</span> 7 Técnicas Científicas Passo a Passo</li>
                      <li><span className="text-white font-semibold">→</span> O Charutinho Seguro (Swaddle)</li>
                      <li><span className="text-white font-semibold">→</span> Ambiente Santuário do Sono</li>
                      <li><span className="text-white font-semibold">→</span> Ruído Branco Premium</li>
                      <li><span className="text-white font-semibold">→</span> Rotina Real Que Funciona</li>
                      <li><span className="text-white font-semibold">→</span> Bebês de 0 a 3 Anos</li>
                      <li><span className="text-white font-semibold">→</span> Áudios de Apoio Inclusos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/40 rounded-xl p-6 border-2 border-red-400/40">
                    <p className="text-red-300 font-bold text-base mb-3">EU ODEIO SER MÃE</p>
                    <ul className="text-pink-100 text-sm space-y-2 leading-relaxed">
                      <li><span className="text-white font-semibold">→</span> As 7 Frases Que Salvam Vidas</li>
                      <li><span className="text-white font-semibold">→</span> Os 5 Dias Que Toda Mãe Odeia</li>
                      <li><span className="text-white font-semibold">→</span> Histórias Reais de Mães</li>
                      <li><span className="text-white font-semibold">→</span> Técnicas de Gerenciamento Emocional</li>
                      <li><span className="text-white font-semibold">→</span> Exercícios Práticos de Autocuidado</li>
                      <li><span className="text-white font-semibold">→</span> Zero Julgamento, 100% Real</li>
                      <li><span className="text-white font-semibold">→</span> Você NÃO é Louca</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/40 rounded-xl p-6 border-2 border-red-400/40">
                    <p className="text-red-300 font-bold text-base mb-3">SONS CALMANTES PREMIUM</p>
                    <ul className="text-pink-100 text-sm space-y-2 leading-relaxed">
                      <li><span className="text-white font-semibold">→</span> 50+ Áudios em 4K Alta Qualidade</li>
                      <li><span className="text-white font-semibold">→</span> Ruído Branco Profissional</li>
                      <li><span className="text-white font-semibold">→</span> Sons da Natureza (Chuva, Ondas, Vento)</li>
                      <li><span className="text-white font-semibold">→</span> Batidas Cardíacas Maternas</li>
                      <li><span className="text-white font-semibold">→</span> Canções de Ninar Clássicas</li>
                      <li><span className="text-white font-semibold">→</span> Reprodução Contínua 12h</li>
                      <li><span className="text-white font-semibold">→</span> Download para Offline</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/40 rounded-xl p-6 border-2 border-red-400/40">
                    <p className="text-red-300 font-bold text-base mb-3">CINEMA DA MAMÃE</p>
                    <ul className="text-pink-100 text-sm space-y-2 leading-relaxed">
                      <li><span className="text-white font-semibold">→</span> Streaming SEM Anúncios</li>
                      <li><span className="text-white font-semibold">→</span> Filmes e Séries Ilimitados</li>
                      <li><span className="text-white font-semibold">→</span> Qualidade HD e 4K</li>
                      <li><span className="text-white font-semibold">→</span> Dramas, Comédias, Romances</li>
                      <li><span className="text-white font-semibold">→</span> Documentários</li>
                      <li><span className="text-white font-semibold">→</span> Download para Offline</li>
                      <li><span className="text-white font-semibold">→</span> Conteúdo Atualizado Semanalmente</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-slate-900/60 rounded-xl p-5 border border-white/20">
                  <p className="text-center text-pink-100 text-base leading-relaxed">
                    <span className="text-white font-bold">Acesso Vitalício.</span> Sem Mensalidades. Sem Enrolação.<br/>
                    <span className="text-red-300">Pague 1x. Use pra sempre. Atualizações futuras GRÁTIS.</span>
                  </p>
                </div>
              </div>
              
              {/* Imagem de impacto emocional */}
              <div className="mb-8 max-w-2xl mx-auto">
                <img 
                  src={maeExausta} 
                  alt="Mãe exausta e esgotada emocionalmente"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-red-500/20"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/captura" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-lg px-8 py-6 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 border-0 group text-white font-bold whitespace-nowrap">
                    ✨ Descubra Sua Solução Personalizada
                  </Button>
                </Link>
                <Link to="/captura" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-lg px-8 py-6 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 group text-white font-bold whitespace-nowrap">
                    Quero Parar de Sofrer
                  </Button>
                </Link>
              </div>
              <p className="text-pink-200 text-sm mt-4 text-center">
                👆 Preencha seus dados e faça o quiz personalizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col mb-12 text-center">
            <div className="bg-red-900/30 border border-red-500/40 rounded-2xl p-8 mb-8 max-w-4xl">
              <p className="text-red-300 text-sm font-bold mb-3">SE VOCÊ JÁ SENTIU ISSO, LEIA:</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                O Dia Que Tu Chora No Banheiro.<br />
                O Dia Que Tu Quer Gritar.<br />
                <span className="text-red-400">O Dia Que Tu Pensa Em Fugir.</span>
              </h2>
              <p className="text-pink-100 text-base leading-relaxed mb-4">
                É biológico. É físico. É existencial.<br />
                Seus hormônios despencaram brutal depois do parto. Zero sono. Corpo em recuperação. Cérebro em modo sobrevivência.<br />
                <span className="text-white font-semibold">Sua identidade antiga morreu pra dar lugar a uma nova. E DOI DEMAIS.</span>
              </p>
              <p className="text-red-200 text-lg font-bold">
                Não é frescura. Não é falta de amor. É a realidade brutal.
              </p>
              <p className="text-pink-200 text-sm mt-3">
                E ninguém te deu as ferramentas certas pra sobreviver a isso.
              </p>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Aqui Tá a Solução (Testada e Aprovada)
            </h2>
            <p className="text-lg md:text-xl text-pink-200 max-w-3xl mb-4">
              <span className="text-white font-bold">10.000+ mães</span> que estavam chorando no banheiro todo dia.<br />
              Hoje? Bebê dormindo. Sanidade mental de volta.<br />
              <span className="text-red-400 font-bold">Não é mágica. É ciência + paciência + as técnicas CERTAS.</span>
            </p>
            <div className="bg-pink-900/20 border border-pink-400/30 rounded-xl p-4 max-w-2xl">
              <p className="text-pink-100 text-sm">
                <span className="text-white font-semibold">Chega de tentar adivinhar o que fazer.</span><br />
                <span className="text-red-300 italic">Você precisa das ferramentas AGORA. E elas tão aqui.</span>
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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl shadow-red-500/20 border border-red-500/30 backdrop-blur">
            <div className="inline-flex items-center gap-2 bg-red-500/20 px-6 py-2 rounded-full mb-6 border border-red-500/30">
              <span className="text-sm font-bold text-red-300">MAIS DE 10.000 MÃES SAÍRAM DO LIMITE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Você Tem 2 Escolhas:<br />
              <span className="text-red-400">Continuar Sofrendo ou Agir AGORA.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto text-left">
              <div className="bg-slate-800/60 border border-slate-600/50 rounded-xl p-6">
                <p className="text-red-400 font-bold text-lg mb-3">Se você não fizer nada:</p>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>Mais noites sem dormir</li>
                  <li>Mais crises de choro no banheiro</li>
                  <li>Mais culpa por "não ser boa o suficiente"</li>
                  <li>Seu relacionamento desmorona</li>
                  <li>Você perde quem você era</li>
                </ul>
              </div>
              
              <div className="bg-red-900/40 border-2 border-red-400/50 rounded-xl p-6">
                <p className="text-white font-bold text-lg mb-3">Se você agir HOJE:</p>
                <ul className="text-pink-100 space-y-2 text-sm">
                  <li>Bebê dormindo em 20 minutos</li>
                  <li>Você descansa DE VERDADE</li>
                  <li>Zero culpa: você entende o que tá sentindo</li>
                  <li>7 técnicas ninja testadas por 10.000+ mães</li>
                  <li>Sua sanidade mental DE VOLTA</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed font-semibold">
              Você não precisa ser a mãe perfeita do Instagram.<br />
              <span className="text-red-400">Você só precisa sobreviver. E nós vamos te mostrar como.</span>
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
            <Link to="/captura" className="w-full sm:w-auto flex justify-center">
              <Button size="lg" className="w-full sm:w-auto text-xl px-12 py-7 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 group text-white font-bold">
                Quero Tudo Agora
              </Button>
            </Link>
            <p className="text-sm text-slate-400 mt-6">
              Acesso instantâneo após o pagamento - Compra 100% segura - Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
