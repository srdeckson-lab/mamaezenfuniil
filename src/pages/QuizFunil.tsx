import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import maeChorandoBanheiro from "@/assets/quiz-mae-chorando-banheiro.jpg";
import casaBaguncada from "@/assets/quiz-casa-baguncada.jpg";
import maeQuartoNoite from "@/assets/quiz-mae-quarto-noite.jpg";
import solucaoPaz from "@/assets/quiz-solucao-paz.jpg";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";

const QuizFunil = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const quizSteps = [
    {
      id: 0,
      image: maeChorandoBanheiro,
      question: "Você já se trancou no banheiro só pra ter 5 minutos de paz?",
      options: [
        { text: "Sim, quase todo dia...", value: "sempre" },
        { text: "Às vezes, quando não aguento mais", value: "as-vezes" },
        { text: "Já aconteceu algumas vezes", value: "raramente" }
      ]
    },
    {
      id: 1,
      image: casaBaguncada,
      question: "Sua casa parece um campo de batalha depois que as crianças brincam?",
      options: [
        { text: "Sempre! É um caos total", value: "sempre-caos" },
        { text: "Sim, e me sinto sobrecarregada", value: "sobrecarregada" },
        { text: "Consigo controlar às vezes", value: "controlo" }
      ]
    },
    {
      id: 2,
      image: maeQuartoNoite,
      question: "Você se sente exausta mesmo depois de 'descansar'?",
      options: [
        { text: "Sempre! Nunca tenho energia", value: "sempre-cansada" },
        { text: "Na maioria das vezes", value: "maioria" },
        { text: "Às vezes me sinto assim", value: "as-vezes-cansada" }
      ]
    },
    {
      id: 3,
      image: solucaoPaz,
      question: "E se existisse uma forma de recuperar sua paz e energia?",
      description: "Milhares de mães já descobriram o segredo para transformar o caos em tranquilidade...",
      isResult: true
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);
    if (step < quizSteps.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const progress = ((step + 1) / quizSteps.length) * 100;
  const currentStep = quizSteps[step];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-pink-950 to-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm p-4">
        <div className="max-w-4xl mx-auto">
          <Progress value={progress} className="h-2" />
          <p className="text-pink-200 text-sm mt-2 text-center">
            Pergunta {step + 1} de {quizSteps.length}
          </p>
        </div>
      </div>

      <div className="pt-24 pb-12 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {!currentStep.isResult ? (
              <Card className="overflow-hidden border-0 shadow-2xl shadow-pink-500/20 bg-gradient-to-br from-slate-800/90 to-pink-900/90 backdrop-blur">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={currentStep.image}
                    alt="Realidade materna"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>

                {/* Question */}
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-4xl font-bold text-pink-100 mb-8 text-center leading-tight">
                    {currentStep.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-4">
                    {currentStep.options?.map((option, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Button
                          onClick={() => handleAnswer(option.value)}
                          className="w-full py-6 text-lg bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
                          size="lg"
                        >
                          {option.text}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            ) : (
              // Result Page
              <div className="space-y-8">
                <Card className="overflow-hidden border-0 shadow-2xl shadow-pink-500/20 bg-gradient-to-br from-slate-800/90 to-pink-900/90 backdrop-blur p-8 md:p-12">
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                    <img
                      src={currentStep.image}
                      alt="Solução"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-pink-100 mb-6 text-center leading-tight">
                    {currentStep.question}
                  </h2>
                  <p className="text-xl text-pink-200 text-center mb-12">
                    {currentStep.description}
                  </p>

                  {/* Products Grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-pink-800/50 to-pink-700/50 rounded-lg p-6 cursor-pointer border border-pink-400/20"
                      onClick={() => navigate("/produto/guia-mae-ninja")}
                    >
                      <img src={guiaMaeNinja} alt="Guia Mãe Ninja" className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-bold text-pink-100 mb-2">Guia Mãe Ninja</h3>
                      <p className="text-pink-200 text-sm">Estratégias práticas para o dia a dia</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-pink-800/50 to-pink-700/50 rounded-lg p-6 cursor-pointer border border-pink-400/20"
                      onClick={() => navigate("/produto/eu-odeio-ser-mae")}
                    >
                      <img src={euOdeioSerMae} alt="Eu Odeio Ser Mãe" className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-bold text-pink-100 mb-2">Eu Odeio Ser Mãe</h3>
                      <p className="text-pink-200 text-sm">O livro que nenhuma mãe admite, mas precisa ler</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-pink-800/50 to-pink-700/50 rounded-lg p-6 cursor-pointer border border-pink-400/20"
                      onClick={() => navigate("/produto/sons-calmantes")}
                    >
                      <img src={sonsCalmantes} alt="Sons Calmantes" className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-bold text-pink-100 mb-2">Sons Calmantes</h3>
                      <p className="text-pink-200 text-sm">Paz instantânea quando você mais precisa</p>
                    </motion.div>
                  </div>

                  {/* CTA Final */}
                  <div className="text-center">
                    <Button
                      onClick={() => navigate("/combo-vitalicio")}
                      className="px-12 py-8 text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 animate-pulse"
                      size="lg"
                    >
                      🔥 QUERO TRANSFORMAR MINHA VIDA AGORA
                    </Button>
                    <p className="text-pink-200 mt-4 text-lg">
                      Acesso vitalício a todos os recursos + bônus exclusivos
                    </p>
                  </div>
                </Card>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizFunil;
