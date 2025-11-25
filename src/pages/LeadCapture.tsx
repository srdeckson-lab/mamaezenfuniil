import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import bannerEuOdeioSerMae from "@/assets/banner-eu-odeio-ser-mae.png";
import seloGarantia from "@/assets/selo-garantia.png";
import leadCaptureBg from "@/assets/lead-capture-bg.png";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Cole aqui a URL do seu Google Apps Script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzgQwHOK6JYIi6pWO7tln7MgaMkxzIA2UH3dOpgP6PnCsjq5q64wO2s6hD9YLClJK35/exec";
    
    try {
      // Enviar para Google Sheets (envio em JSON)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      });

      // Store lead data in localStorage
      localStorage.setItem("leadData", JSON.stringify(formData));
      
      toast.success("Ótimo! Agora vamos descobrir o melhor para você...");
      
      // Navigate to quiz after short delay
      setTimeout(() => {
        navigate("/quiz");
      }, 1000);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao processar. Tente novamente.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${leadCaptureBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-slate-950/80 to-black/90" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          <Card className="overflow-hidden border border-red-900/30 shadow-2xl shadow-red-900/60 bg-gradient-to-br from-black/95 to-slate-950/95 backdrop-blur-xl p-6 md:p-10">
            {/* Headline Impactante */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-center mb-8 space-y-3"
            >
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Você Não Está{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  Sozinha
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
                Milhares de mães estão vivendo o mesmo pesadelo em silêncio.
                <br className="hidden md:block" />
                É hora de quebrar esse ciclo.
              </p>
            </motion.div>

            {/* Imagem do Livro */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-6"
            >
              <img 
                src={bannerEuOdeioSerMae} 
                alt="Eu Odeio Ser Mãe - O livro que nenhuma mãe admite, mas que precisam ler" 
                className="w-full max-w-3xl mx-auto h-auto rounded-lg shadow-2xl shadow-red-900/40"
              />
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-14 px-4 text-base bg-black/80 border-red-900/50 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-900/30 rounded-lg"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-14 px-4 text-base bg-black/80 border-red-900/50 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-900/30 rounded-lg"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu WhatsApp (com DDD)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-14 px-4 text-base bg-black/80 border-red-900/50 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-900/30 rounded-lg"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  className="w-full h-16 text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-[1.02] transition-all duration-300 rounded-lg"
                >
                  Descobrir Agora →
                </Button>
              </motion.div>
            </form>

            {/* Selo de Garantia */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex justify-center"
            >
              <img 
                src={seloGarantia} 
                alt="Garantia de 7 Dias" 
                className="w-28 h-28 object-contain"
              />
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="mt-4 text-center space-y-1"
            >
              <p className="text-gray-300 text-sm font-medium">
                🔒 Seus dados estão 100% seguros
              </p>
              <p className="text-gray-400 text-xs">
                Nunca enviaremos spam. Você pode sair a qualquer momento.
              </p>
            </motion.div>
          </Card>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-5 text-center"
          >
            <p className="text-gray-300 text-base font-medium">
              ⭐⭐⭐⭐⭐ <span className="font-bold">4.9/5</span> por mais de 10.000 mães
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadCapture;
