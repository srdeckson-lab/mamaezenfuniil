import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoMamaezen from "@/assets/logo-mamaezen.png";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-pink-950 to-slate-900 flex items-center justify-center px-4 py-8">
      <Card className="max-w-2xl w-full bg-gradient-to-br from-slate-800/95 to-pink-900/60 backdrop-blur-lg border-pink-500/30 p-8 md:p-12">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src={logoMamaezen} 
              alt="MamãeZen" 
              className="w-44 h-auto object-contain"
            />
          </div>

          {/* Mensagem Principal */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Tudo Bem, Eu Entendo
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Às vezes não estamos prontas. Às vezes precisamos de mais tempo.
            </p>
            <p className="text-base text-gray-300 font-normal">
              Mas lembre-se: você não está sozinha nessa jornada.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-pink-500/30"></div>
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            <div className="flex-1 h-px bg-pink-500/30"></div>
          </div>

          {/* Call to Action Suave */}
          <div className="space-y-4">
            <p className="text-gray-200 font-semibold text-lg">
              Se mudar de ideia, estaremos aqui
            </p>
            <Link to="/">
              <Button
                className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white px-10 py-7 text-lg font-bold shadow-lg rounded-lg transition-all duration-300"
              >
                Voltar ao Início
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="pt-6 space-y-3">
            <p className="text-sm text-gray-300 font-medium">
              Enquanto isso, continue conectada com a gente:
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:mamaezen.vip@gmail.com" 
                className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a 
                href="https://www.instagram.com/app_mamae_zen?igsh=bGlydG9udHp3aXhs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors font-medium"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Final Message */}
          <div className="pt-6 border-t border-pink-500/20">
            <p className="text-base text-gray-200 italic font-medium">
              "A maternidade não precisa ser um fardo. Você merece paz."
            </p>
            <p className="text-sm text-gray-300 mt-2 font-normal">
              — Equipe MamãeZen
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Obrigado;
