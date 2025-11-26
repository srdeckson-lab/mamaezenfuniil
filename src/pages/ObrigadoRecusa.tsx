import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Heart } from "lucide-react";
import { trackChangeOfMind, trackPageView, trackButtonClick } from "@/lib/analytics";
import maeExausta from "@/assets/mae-exausta-recusa.png";
import maePerdida from "@/assets/mae-perdida-recusa.png";
import maeSozinha from "@/assets/mae-sozinha-recusa.png";

const ObrigadoRecusa = () => {
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView('/obrigado-recusa', 'Obrigado Recusa - MAMAEZEN');
  }, []);

  const painPoints = [
    {
      image: maeExausta,
      title: "Noites sem dormir...",
      description: "Enquanto isso, a exaustão continua roubando seus dias"
    },
    {
      image: maePerdida,
      title: "Você perdida em si mesma...",
      description: "Sentindo que não é mais quem você era"
    },
    {
      image: maeSozinha,
      title: "A solidão que ninguém vê...",
      description: "Rodeada de gente, mas se sentindo completamente sozinha"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-pink-950 to-slate-900 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-pink-950/80 to-slate-900/90" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          <Card className="overflow-hidden border-0 shadow-2xl shadow-pink-500/30 bg-gradient-to-br from-slate-800/95 to-pink-900/95 backdrop-blur-lg p-8 md:p-12">
            
            {/* Alert Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="bg-pink-500/20 p-4 rounded-full">
                <AlertCircle className="w-12 h-12 text-pink-300" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-pink-100 mb-4">
                Entendemos sua decisão...
              </h1>
              <p className="text-lg md:text-xl text-pink-200">
                Mas antes de você ir, precisamos te mostrar algo importante
              </p>
            </motion.div>

            {/* Pain Points Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img 
                    src={point.image} 
                    alt={point.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-pink-100 font-bold text-lg mb-1">
                      {point.title}
                    </h3>
                    <p className="text-pink-200 text-sm">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Reality Check */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-slate-900/50 border border-pink-400/30 rounded-lg p-6 mb-8"
            >
              <p className="text-pink-100 text-center text-lg leading-relaxed">
                <strong className="text-pink-300">A verdade é:</strong> Essas dores não vão desaparecer sozinhas. 
                Elas vão continuar te consumindo, dia após dia, noite após noite...
              </p>
              <p className="text-pink-200 text-center mt-4">
                Mas você TEM o poder de mudar isso AGORA. Por apenas <span className="text-pink-300 font-bold">R$ 197,90</span> você pode transformar toda sua maternidade.
              </p>
            </motion.div>

            {/* Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              <div className="bg-red-900/30 border border-red-400/30 rounded-lg p-6">
                <h3 className="text-red-200 font-bold text-xl mb-4 text-center">❌ Sem nossa ajuda:</h3>
                <ul className="space-y-2 text-red-100 text-sm">
                  <li>• Noites em claro intermináveis</li>
                  <li>• Exaustão física e mental crescente</li>
                  <li>• Sentimento de culpa constante</li>
                  <li>• Relacionamentos desgastados</li>
                  <li>• Perda completa de si mesma</li>
                </ul>
              </div>
              <div className="bg-green-900/30 border border-green-400/30 rounded-lg p-6">
                <h3 className="text-green-200 font-bold text-xl mb-4 text-center">✅ Com nossa ajuda:</h3>
                <ul className="space-y-2 text-green-100 text-sm">
                  <li>• Noites tranquilas e revigorantes</li>
                  <li>• Energia e disposição no dia a dia</li>
                  <li>• Confiança nas suas decisões</li>
                  <li>• Conexão verdadeira com sua família</li>
                  <li>• Você se reencontrando como mãe E mulher</li>
                </ul>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="space-y-4"
            >
              <Button
                onClick={() => {
                  trackChangeOfMind();
                  navigate("/quiz-final");
                }}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white shadow-xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                <Heart className="w-6 h-6 mr-2" />
                Sim, Eu Mudei de Ideia! Quero Transformar Minha Vida
              </Button>
              
              <p className="text-center text-pink-300 text-sm">
                💝 Acesso vitalício por apenas R$ 197,90
              </p>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-8 text-center space-y-2"
            >
              <p className="text-pink-200 text-sm">
                🔒 Compra 100% segura | 💯 Garantia de 7 dias
              </p>
              <p className="text-pink-300 text-xs">
                Mais de 10.000 mães já transformaram suas vidas com a MAMAEZEN
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ObrigadoRecusa;
