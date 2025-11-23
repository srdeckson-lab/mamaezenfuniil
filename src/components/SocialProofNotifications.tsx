import { useState, useEffect } from "react";
import { X, Eye, ShoppingCart } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  city: string;
  state: string;
  action: string;
  product: string;
  icon: "view" | "purchase";
}

const SocialProofNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const notifications: Notification[] = [
    { id: 1, name: "Maria Silva", city: "São Paulo", state: "SP", action: "visualizou", product: "Guia da Mãe Ninja 2.0", icon: "view" },
    { id: 2, name: "Ana Costa", city: "Rio de Janeiro", state: "RJ", action: "adquiriu", product: "Combo Vitalício Premium", icon: "purchase" },
    { id: 3, name: "Juliana Santos", city: "Belo Horizonte", state: "MG", action: "visualizou", product: "Eu Odeio Ser Mãe", icon: "view" },
    { id: 4, name: "Camila Oliveira", city: "Curitiba", state: "PR", action: "adquiriu", product: "Sons Calmantes Premium", icon: "purchase" },
    { id: 5, name: "Fernanda Lima", city: "Porto Alegre", state: "RS", action: "visualizou", product: "Cinema da Mamãe", icon: "view" },
    { id: 6, name: "Patricia Rocha", city: "Salvador", state: "BA", action: "adquiriu", product: "Combo Vitalício Premium", icon: "purchase" },
    { id: 7, name: "Roberta Alves", city: "Brasília", state: "DF", action: "visualizou", product: "Guia da Mãe Ninja 2.0", icon: "view" },
    { id: 8, name: "Luciana Martins", city: "Fortaleza", state: "CE", action: "saiu da página", product: "", icon: "view" },
    { id: 9, name: "Carolina Dias", city: "Recife", state: "PE", action: "adquiriu", product: "Combo Vitalício Premium", icon: "purchase" },
    { id: 10, name: "Beatriz Souza", city: "Manaus", state: "AM", action: "visualizou", product: "Sons Calmantes Premium", icon: "view" },
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialDelay = setTimeout(showNotification, 3000);
    const interval = setInterval(showNotification, 12000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-slate-900 border border-red-500/30 rounded-lg shadow-2xl p-4 max-w-sm backdrop-blur-lg">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            {currentNotification.icon === "purchase" ? (
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                <ShoppingCart className="w-5 h-5 text-red-400" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center border border-slate-600">
                <Eye className="w-5 h-5 text-slate-300" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">
              {currentNotification.name}
            </p>
            <p className="text-xs text-slate-400">
              {currentNotification.city}, {currentNotification.state}
            </p>
            <p className="text-sm text-slate-200 mt-1">
              {currentNotification.action}{" "}
              {currentNotification.product && (
                <span className="font-semibold text-red-400">
                  {currentNotification.product}
                </span>
              )}
            </p>
            <p className="text-xs text-slate-500 mt-1">há alguns minutos</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotifications;