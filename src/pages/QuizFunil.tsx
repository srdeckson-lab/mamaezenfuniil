import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { trackProductView, trackBeginCheckout } from "@/lib/analytics";
import bebeChorando from "@/assets/quiz-bebe-chorando.jpg";
import mae3am from "@/assets/quiz-mae-3am.jpg";
import perdaIdentidade from "@/assets/quiz-perda-identidade.jpg";
import solidao from "@/assets/quiz-solidao.jpg";
import cozinhaCaos from "@/assets/quiz-cozinha-caos.jpg";
import insonia from "@/assets/quiz-insonia.jpg";
import culpa from "@/assets/quiz-culpa.jpg";
import ninguemEntende from "@/assets/quiz-ninguem-entende.jpg";
import multitaskImpossivel from "@/assets/quiz-multitask-impossivel.jpg";
import transformacao from "@/assets/quiz-transformacao.jpg";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";
import seloGarantia from "@/assets/selo-garantia.png";

const QuizFunil = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const quizSteps = [
    {
      id: 0,
      image: bebeChorando,
      question: "Seu bebê chora sem parar e você já tentou TUDO. O que você sente?",
      options: [
        { text: "Desespero total. Não sei mais o que fazer.", value: "desespero" },
        { text: "Culpa. Sinto que sou uma péssima mãe.", value: "culpa" },
        { text: "Raiva. Quero gritar mas me seguro.", value: "raiva" }
      ]
    },
    {
      id: 1,
      image: mae3am,
      question: "São 3h da manhã. Você está acordada de novo enquanto todo mundo dorme. Como você se sente?",
      options: [
        { text: "Completamente exausta. Não aguento mais.", value: "exausta" },
        { text: "Sozinha. Ninguém entende o que eu passo.", value: "sozinha" },
        { text: "Com raiva de estar sempre cansada.", value: "cansada" }
      ]
    },
    {
      id: 2,
      image: perdaIdentidade,
      question: "Você se olha no espelho e não reconhece mais quem você é. Isso te assusta?",
      options: [
        { text: "Muito. Perdi completamente minha identidade.", value: "perdida" },
        { text: "Sim. Sinto que virei apenas 'a mãe'.", value: "apenas-mae" },
        { text: "Às vezes. Mas finjo que está tudo bem.", value: "fingindo" }
      ]
    },
    {
      id: 3,
      image: solidao,
      question: "Você se sente sozinha mesmo rodeada de gente?",
      options: [
        { text: "Sempre. Ninguém realmente me entende.", value: "sempre-sozinha" },
        { text: "Sim. Meu parceiro não ajuda como deveria.", value: "sem-ajuda" },
        { text: "Muito. Sinto que ninguém se importa.", value: "invisivel" }
      ]
    },
    {
      id: 4,
      image: cozinhaCaos,
      question: "A casa está um caos. Louça suja, roupa por lavar. Como você lida?",
      options: [
        { text: "Entro em pânico. Não consigo dar conta.", value: "panico" },
        { text: "Choro escondida. É demais pra mim.", value: "choro-escondida" },
        { text: "Finjo que não importa mas me destrói.", value: "destruida" }
      ]
    },
    {
      id: 5,
      image: insonia,
      question: "Você finalmente conseguiu deitar. Mas não consegue dormir. Por quê?",
      options: [
        { text: "A mente não para. Mil preocupações.", value: "mente-acelerada" },
        { text: "Medo de algo acontecer com o bebê.", value: "medo" },
        { text: "Exaustão extrema mas o corpo não relaxa.", value: "corpo-tenso" }
      ]
    },
    {
      id: 6,
      image: culpa,
      question: "A culpa materna te consome. Sobre o que você mais sente culpa?",
      options: [
        { text: "Por não estar aproveitando a maternidade.", value: "nao-aproveitando" },
        { text: "Por pensar em fugir, em desistir.", value: "pensar-fugir" },
        { text: "Por não ser a mãe perfeita.", value: "nao-perfeita" }
      ]
    },
    {
      id: 7,
      image: ninguemEntende,
      question: "Você vê outras mães felizes nas redes sociais. O que passa pela sua cabeça?",
      options: [
        { text: "'Por que só eu sofro? O que há de errado comigo?'", value: "errado-comigo" },
        { text: "'Elas estão mentindo. Ninguém é feliz assim.'", value: "mentira" },
        { text: "Nem olho mais. Dói demais comparar.", value: "dor-comparar" }
      ]
    },
    {
      id: 8,
      image: multitaskImpossivel,
      question: "Você tenta trabalhar enquanto cuida do bebê. O resultado?",
      options: [
        { text: "Não consigo fazer nada direito.", value: "nada-direito" },
        { text: "Surto de estresse. É impossível.", value: "surto" },
        { text: "Me sinto falhando em tudo.", value: "falhando" }
      ]
    },
    {
      id: 9,
      image: transformacao,
      question: "E se existisse uma forma comprovada de transformar tudo isso?",
      description: "10.000+ mães que estavam exatamente onde você está agora já encontraram a solução...",
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
                <div className="p-6 md:p-12">
                  <h2 className="text-xl md:text-3xl font-bold text-pink-100 mb-8 text-center leading-tight">
                    {currentStep.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-4 flex flex-col items-center">
                    {currentStep.options?.map((option, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="w-full max-w-2xl"
                      >
                        <Button
                          onClick={() => handleAnswer(option.value)}
                          className="w-full py-6 text-base md:text-lg bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
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
                <Card className="overflow-hidden border-0 shadow-2xl shadow-pink-500/20 bg-gradient-to-br from-slate-800/90 to-pink-900/90 backdrop-blur p-6 md:p-12">
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                    <img
                      src={currentStep.image}
                      alt="Solução"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-pink-100 mb-6 text-center leading-tight">
                    {currentStep.question}
                  </h2>
                  <p className="text-lg md:text-xl text-pink-200 text-center mb-12">
                    {currentStep.description}
                  </p>

                  {/* Products Grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-pink-800/50 to-pink-700/50 rounded-lg p-6 cursor-pointer border border-pink-400/20"
                      onClick={() => {
                        trackProductView("Guia Mãe Ninja");
                        navigate("/produto/guia-mae-ninja");
                      }}
                    >
                      <img src={guiaMaeNinja} alt="Guia Mãe Ninja" className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-bold text-pink-100 mb-2">Guia Mãe Ninja</h3>
                      <p className="text-pink-200 text-sm">7 técnicas científicas para acalmar seu bebê em minutos</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-pink-800/50 to-pink-700/50 rounded-lg p-6 cursor-pointer border border-pink-400/20"
                      onClick={() => {
                        trackProductView("Eu Odeio Ser Mãe");
                        navigate("/produto/eu-odeio-ser-mae");
                      }}
                    >
                      <img src={euOdeioSerMae} alt="Eu Odeio Ser Mãe" className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-bold text-pink-100 mb-2">Eu Odeio Ser Mãe</h3>
                      <p className="text-pink-200 text-sm">O livro que nenhuma mãe admite, mas todas precisam ler</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-pink-800/50 to-pink-700/50 rounded-lg p-6 cursor-pointer border border-pink-400/20"
                      onClick={() => {
                        trackProductView("Sons Calmantes");
                        navigate("/produto/sons-calmantes");
                      }}
                    >
                      <img src={sonsCalmantes} alt="Sons Calmantes" className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-bold text-pink-100 mb-2">Sons Calmantes</h3>
                      <p className="text-pink-200 text-sm">50+ áudios profissionais para paz instantânea</p>
                    </motion.div>
                  </div>

                  {/* Guarantee Badge */}
                  <div className="flex justify-center items-center mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-pink-900/40 to-red-900/40 border-2 border-pink-400/30 rounded-xl p-6 max-w-2xl">
                      <img src={seloGarantia} alt="Garantia 7 Dias" className="w-32 h-32 object-contain" />
                      <div className="text-center md:text-left">
                        <p className="text-pink-100 text-xl font-bold mb-2">
                          Garantia Incondicional de 7 Dias
                        </p>
                        <p className="text-pink-200 text-base">
                          Se você não transformar sua maternidade, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Final */}
                  <div className="text-center flex flex-col items-center">
                    <Button
                      onClick={() => {
                        trackBeginCheckout();
                        navigate("/produtos-individuais");
                      }}
                      className="w-full max-w-2xl px-4 sm:px-8 md:px-12 py-6 md:py-8 text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-2xl hover:shadow-red-500/50 transition-all duration-300 animate-pulse break-words"
                      size="lg"
                    >
                      🔥 Descubra o que preparei para você
                    </Button>
                    <p className="text-pink-200 mt-4 text-sm sm:text-base md:text-lg px-4">
                      Acesso vitalício • Pague 1x, use para sempre • Garantia de 7 dias
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
