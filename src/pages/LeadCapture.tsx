import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import bannerHero from "@/assets/banner-hero.png";
import euOdeioSerMae from "@/assets/eu-odeio-ser-mae.png";

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
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${euOdeioSerMae})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-slate-950/90 to-black/95" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <Card className="overflow-hidden border-0 shadow-2xl shadow-red-900/60 bg-gradient-to-br from-black/95 to-slate-950/95 backdrop-blur-xl p-8 md:p-12 border-red-900/30">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <img 
                src={bannerHero} 
                alt="Você não está sozinha - 10.000+ mães já transformaram suas vidas" 
                className="w-full h-auto rounded-lg shadow-xl shadow-pink-500/20"
              />
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full h-12 px-4 bg-black/70 border-red-900/50 text-pink-50 placeholder:text-gray-400 focus:border-red-700 focus:ring-red-900/30"
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
                  className="w-full h-12 px-4 bg-black/70 border-red-900/50 text-pink-50 placeholder:text-gray-400 focus:border-red-700 focus:ring-red-900/30"
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
                  className="w-full h-12 px-4 bg-black/70 border-red-900/50 text-pink-50 placeholder:text-gray-400 focus:border-red-700 focus:ring-red-900/30"
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
                  className="w-full h-14 text-lg md:text-xl font-bold bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 hover:scale-[1.02] transition-all duration-300"
                >
                  Descobrir Agora →
                </Button>
              </motion.div>
            </form>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-center space-y-2"
            >
              <p className="text-pink-200 text-sm">
                🔒 Seus dados estão 100% seguros
              </p>
              <p className="text-pink-300 text-xs">
                Nunca enviaremos spam. Você pode sair a qualquer momento.
              </p>
            </motion.div>
          </Card>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center"
          >
            <p className="text-pink-200 text-sm">
              ⭐⭐⭐⭐⭐ Avaliação média de <span className="font-bold">4.9/5</span> por mais de 10.000 mães
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadCapture;
