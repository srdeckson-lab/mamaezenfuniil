import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import heroImage from "@/assets/hero-image.png";
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-pink-950 to-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${euOdeioSerMae})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-pink-950/80 to-slate-900/90" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <Card className="overflow-hidden border-0 shadow-2xl shadow-pink-500/30 bg-gradient-to-br from-slate-800/95 to-pink-900/95 backdrop-blur-lg p-8 md:p-12">
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
                className="w-full h-auto rounded-lg shadow-lg"
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
                  className="w-full h-12 px-4 bg-slate-900/50 border-pink-400/30 text-pink-100 placeholder:text-pink-300/50 focus:border-pink-400 focus:ring-pink-400/20"
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
                  className="w-full h-12 px-4 bg-slate-900/50 border-pink-400/30 text-pink-100 placeholder:text-pink-300/50 focus:border-pink-400 focus:ring-pink-400/20"
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
                  className="w-full h-12 px-4 bg-slate-900/50 border-pink-400/30 text-pink-100 placeholder:text-pink-300/50 focus:border-pink-400 focus:ring-pink-400/20"
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
                  className="w-full h-14 text-lg md:text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white shadow-xl hover:shadow-pink-500/50 transition-all duration-300"
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
