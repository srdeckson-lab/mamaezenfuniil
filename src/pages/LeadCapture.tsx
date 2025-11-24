import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import bannerHero from "@/assets/banner-hero.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";
import seloGarantia from "@/assets/selo-garantia.png";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Store lead data in localStorage for now
    localStorage.setItem("leadData", JSON.stringify(formData));
    
    toast.success("Ótimo! Agora vamos descobrir o melhor para você...");
    
    // Navigate to quiz after short delay
    setTimeout(() => {
      navigate("/quiz");
    }, 1000);
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
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${euOdeioSerMae})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-slate-950/85 to-black/95" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          <Card className="overflow-hidden border border-red-900/30 shadow-2xl shadow-red-900/60 bg-gradient-to-br from-black/95 to-slate-950/95 backdrop-blur-xl p-6 md:p-10">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <img 
                src={bannerHero} 
                alt="Você não está sozinha - 10.000+ mães já transformaram suas vidas" 
                className="w-full h-auto rounded-lg shadow-xl shadow-pink-500/20"
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
