import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { trackBeginCheckout } from "@/lib/analytics";
import mae3amBanheiro from "@/assets/quiz-final-mae-3am-banheiro.jpg";
import identidadePerdida from "@/assets/quiz-final-identidade-perdida.jpg";
import noiteSemFim from "@/assets/quiz-final-noite-sem-fim.jpg";
import pontoRuptura from "@/assets/quiz-final-ponto-ruptura.jpg";
import pazPossivel from "@/assets/quiz-final-paz-possivel.jpg";

const QuizFinal = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const leadData = localStorage.getItem("leadData");
    if (leadData) {
      const data = JSON.parse(leadData);
      setUserName(data.name || "");
    }
  }, []);

  const quizSteps = [
    {
      id: 0,
      image: mae3amBanheiro,
      question: `${userName}, você já teve vontade de DESISTIR de tudo?`,
      subtitle: "Aquele momento em que você pensa: 'eu não aguento mais. Não foi isso que eu imaginei. Eu odeio isso.'",
      options: [
        { text: "Sim, penso nisso quase todos os dias", value: "sempre" },
        { text: "Já pensei sim, mais de uma vez", value: "sim" },
        { text: "Tive esse pensamento", value: "tive" }
      ]
    },
    {
      id: 1,
      image: identidadePerdida,
      question: `${userName}, quando foi a última vez que você se olhou no espelho e SE RECONHECEU?`,
      subtitle: "Você virou só 'a mãe do bebê'. Seu nome? Seus sonhos? Quem você era? Morreu. E dói como nada mais dói.",
      options: [
        { text: "Não me reconheço há meses", value: "nao_reconheco" },
        { text: "Me sinto perdida", value: "perdida" },
        { text: "Não sei mais quem eu sou", value: "nao_sei" }
      ]
    },
    {
      id: 2,
      image: noiteSemFim,
      question: `${userName}, você está DESTRUÍDA pela falta de sono?`,
      subtitle: "Cada noite é uma tortura. Você não dorme. Você não descansa. Você só... sobrevive. E mal.",
      options: [
        { text: "Durmo menos de 3h por noite", value: "menos_3h" },
        { text: "Meu sono é horrível e fragmentado", value: "fragmentado" },
        { text: "Não lembro quando dormi bem", value: "nao_lembro" }
      ]
    },
    {
      id: 3,
      image: pontoRuptura,
      question: `${userName}, você está no seu LIMITE ABSOLUTO?`,
      subtitle: "Mais um dia assim e você vai explodir. Gritar. Fazer algo que não quer. Você sente que está chegando no ponto de ruptura total.",
      options: [
        { text: "Sim, estou no meu limite", value: "no_limite" },
        { text: "Vou explodir a qualquer momento", value: "vou_explodir" },
        { text: "Não aguento mais nada", value: "nao_aguento" }
      ]
    },
    {
      id: 4,
      image: pazPossivel,
      question: `${userName}, se EU TE PROVAR que 10.000+ mães saíram desse inferno... você topa tentar?`,
      subtitle: "Essa é sua ÚLTIMA CHANCE de transformar isso. De ter paz. De dormir. De se reencontrar. De ser mãe SEM se perder completamente.",
      options: [
        { text: "SIM! Quero essa transformação AGORA", value: "sim_quero" },
        { text: "Sim, preciso dessa mudança", value: "preciso" },
        { text: "Topo tentar, estou desesperada", value: "topo" }
      ],
      isResult: true
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);
    if (step < quizSteps.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      // Última resposta - ir para Combo Vitalício
      setTimeout(() => {
        trackBeginCheckout();
        navigate("/combo-vitalicio");
      }, 600);
    }
  };

  const progress = ((step + 1) / quizSteps.length) * 100;
  const currentStep = quizSteps[step];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm p-4">
        <div className="max-w-4xl mx-auto">
          <Progress value={progress} className="h-3 bg-red-900/50" />
          <p className="text-red-200 text-sm mt-2 text-center font-bold">
            Última Chance: Questão {step + 1} de {quizSteps.length}
          </p>
        </div>
      </div>

      <div className="pt-24 pb-12 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-2 border-red-500/30 shadow-2xl shadow-red-500/30 bg-gradient-to-br from-slate-800/95 to-red-900/95 backdrop-blur">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={currentStep.image}
                  alt="Realidade brutal da maternidade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                
                {/* Warning Badge */}
                <div className="absolute top-4 right-4 bg-red-600/90 text-white px-4 py-2 rounded-full font-bold text-sm border-2 border-white/30">
                  ⚠️ VERDADE CRUA
                </div>
              </div>

              {/* Question */}
              <div className="p-6 md:p-12">
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-4xl font-bold text-white mb-6 text-center leading-tight"
                >
                  {currentStep.question}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-red-200 text-base md:text-xl mb-10 text-center leading-relaxed"
                >
                  {currentStep.subtitle}
                </motion.p>

                {/* Options */}
                <div className="space-y-4 flex flex-col items-center">
                  {currentStep.options?.map((option, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.15 }}
                      className="w-full max-w-2xl"
                    >
                      <Button
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full py-6 md:py-8 text-base md:text-xl font-bold transition-all duration-300 ${
                          currentStep.isResult
                            ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-2xl hover:shadow-red-500/60 border-2 border-red-400/50 animate-pulse"
                            : "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-red-500/40 border border-red-400/30"
                        }`}
                        size="lg"
                      >
                        {option.text}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Truth Statement */}
                {!currentStep.isResult && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 text-center"
                  >
                    <p className="text-red-300 text-sm font-bold">
                      💔 Sem julgamento. Só a verdade que ninguém fala.
                    </p>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizFinal;