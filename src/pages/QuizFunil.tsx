import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { trackProductView, trackBeginCheckout } from "@/lib/analytics";
import maeChorandoBanheiro from "@/assets/quiz-mae-chorando-banheiro.jpg";
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
import solucaoPaz from "@/assets/quiz-solucao-paz.jpg";
import casaBaguncada from "@/assets/quiz-casa-baguncada.jpg";
import maeQuartoNoite from "@/assets/quiz-mae-quarto-noite.jpg";
import guiaMaeNinja from "@/assets/guia-mae-ninja.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import sonsCalmantes from "@/assets/sons-calmantes.jpg";
import seloGarantia from "@/assets/selo-garantia.png";

const QuizFunil = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Pegar nome do localStorage
    const leadData = localStorage.getItem("leadData");
    if (leadData) {
      const data = JSON.parse(leadData);
      setUserName(data.name || "");
    }
  }, []);

  useEffect(() => {
    // Adicionar áudio de fundo do YouTube quando a página carregar
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/ciH1K4e9dzQ?autoplay=1&loop=1&playlist=ciH1K4e9dzQ&controls=0&showinfo=0&mute=0&volume=30';
    iframe.style.display = 'none';
    iframe.allow = 'autoplay';
    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  const quizSteps = [
    {
      id: 0,
      image: maeChorandoBanheiro,
      question: `${userName}, você já chorou sozinha no banheiro às 3h da manhã?`,
      subtitle: "Sentindo que ninguém entende o que você está passando?",
      options: [
        { text: "Sim, várias vezes...", value: "sim_sempre" },
        { text: "Sim, algumas vezes", value: "sim_as_vezes" },
        { text: "Ainda não, mas tenho medo", value: "nao_ainda" }
      ]
    },
    {
      id: 1,
      image: bebeChorando,
      question: `${userName}, seu bebê chora SEM PARAR e você já tentou de TUDO?`,
      subtitle: "A sensação de impotência é desesperadora, não é?",
      options: [
        { text: "Sim, me sinto desesperada", value: "sim_desesperada" },
        { text: "Sim, estou exausta", value: "sim_cansada" },
        { text: "Às vezes acontece", value: "as_vezes" }
      ]
    },
    {
      id: 2,
      image: solucaoPaz,
      question: `E se você tivesse 7 TÉCNICAS CIENTÍFICAS que realmente funcionam?`,
      subtitle: "O Guia da Mãe Ninja ensina: Charutinho Seguro, Ruído Branco, Ambiente Santuário e mais 4 técnicas que acalmam bebês em minutos.",
      options: [
        { text: "PRECISO DISSO AGORA!", value: "preciso_urgente" },
        { text: "Quero conhecer essas técnicas", value: "quero_conhecer" },
        { text: "Estou interessada", value: "interessada" }
      ]
    },
    {
      id: 3,
      image: insonia,
      question: `${userName}, você dorme menos de 4 horas por noite?`,
      subtitle: "A privação de sono está destruindo sua saúde mental?",
      options: [
        { text: "Durmo menos de 4h", value: "durmo_menos" },
        { text: "Meu sono é todo fragmentado", value: "sono_fragmentado" },
        { text: "Mal consigo dormir", value: "mal_durmo" }
      ]
    },
    {
      id: 4,
      image: maeQuartoNoite,
      question: `Imagina ter um APP DO SONO com sons que acalmam você E o bebê?`,
      subtitle: "50+ áudios premium: Ruído Branco Profissional, Batidas Cardíacas, Sons da Natureza. MAIS: Botão de Emergência que localiza hospitais mais próximos com rota segura + Lista de Medicamentos autorizados na gravidez e pós-parto.",
      options: [
        { text: "Seria PERFEITO pra mim!", value: "seria_perfeito" },
        { text: "Preciso muito disso", value: "preciso_disso" },
        { text: "Me ajudaria demais", value: "me_ajudaria" }
      ]
    },
    {
      id: 5,
      image: culpa,
      question: `${userName}, você se sente culpada por não ser a "mãe perfeita"?`,
      subtitle: "Aquela culpa que aperta o peito e não te deixa em paz?",
      options: [
        { text: "O tempo todo...", value: "sempre" },
        { text: "Frequentemente", value: "frequente" },
        { text: "Às vezes sinto", value: "as_vezes" }
      ]
    },
    {
      id: 6,
      image: ninguemEntende,
      question: `E se você descobrisse que 89% das mães sentem EXATAMENTE o mesmo?`,
      subtitle: 'O ebook "EU ODEIO SER MÃE" revela: As 7 Frases Que Salvam + Os 5 Dias Que Toda Mãe Odeia. Zero julgamento. 100% real. Você NÃO é louca.',
      options: [
        { text: "Me sentiria MUITO aliviada!", value: "aliviada" },
        { text: "PRECISO ler isso", value: "preciso_ler" },
        { text: "Me identifico totalmente", value: "identifico" }
      ]
    },
    {
      id: 7,
      image: casaBaguncada,
      question: `${userName}, você se sente sobrecarregada tentando dar conta de TUDO?`,
      subtitle: "Casa, bebê, trabalho, relacionamento... parece que você vai explodir?",
      options: [
        { text: "Totalmente sobrecarregada", value: "sim_sobrecarregada" },
        { text: "Estou no meu limite", value: "no_limite" },
        { text: "Muito cansada", value: "cansada" }
      ]
    },
    {
      id: 8,
      image: perdaIdentidade,
      question: `${userName}, você olha no espelho e não se reconhece mais?`,
      subtitle: "Sente que perdeu quem você era antes de ser mãe?",
      options: [
        { text: "Sim, me sinto perdida", value: "sim_perdida" },
        { text: "Me sinto confusa", value: "confusa" },
        { text: "Estou em transição difícil", value: "em_transicao" }
      ]
    },
    {
      id: 9,
      image: transformacao,
      question: `Imagina ter paz de volta: bebê dormindo, você descansando, zero culpa?`,
      description: `${userName}, essa transformação é REAL. 10.000+ mães já conseguiram. Agora é sua vez.`,
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
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-4 text-center leading-tight">
                    {currentStep.question}
                  </h2>
                  {currentStep.subtitle && (
                    <p className="text-pink-200 text-base md:text-lg mb-8 text-center leading-relaxed">
                      {currentStep.subtitle}
                    </p>
                  )}

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
                        navigate("/combo-vitalicio");
                      }}
                      className="w-full max-w-2xl px-4 sm:px-8 md:px-12 py-6 md:py-8 text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-2xl hover:shadow-red-500/50 transition-all duration-300 animate-pulse break-words"
                      size="lg"
                    >
                      🔥 Quero a Solução Completa Agora
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
