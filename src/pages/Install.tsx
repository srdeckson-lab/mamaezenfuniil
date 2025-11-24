import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Check } from "lucide-react";
import { Link } from "react-router-dom";
import logoMamaezen from "@/assets/logo-mamaezen.png";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verifica se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-slate-800/80 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src={logoMamaezen} 
                alt="MAMAEZEN Logo"
                className="h-24 w-auto"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Instale o App MAMAEZEN
            </h1>
            <p className="text-pink-100 text-lg">
              Acesse seus recursos premium diretamente da tela inicial do seu celular
            </p>
          </div>

          {isInstalled ? (
            <div className="bg-green-900/40 border-2 border-green-400/50 rounded-xl p-6 text-center mb-6">
              <Check className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-white text-xl font-bold mb-2">App Instalado com Sucesso!</p>
              <p className="text-green-100">
                O MAMAEZEN já está na sua tela inicial
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                  <div className="bg-red-500/20 p-3 rounded-lg flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Acesso Rápido</h3>
                    <p className="text-slate-300 text-sm">
                      Abra o app direto da tela inicial sem precisar do navegador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                  <div className="bg-red-500/20 p-3 rounded-lg flex-shrink-0">
                    <Download className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Funciona Offline</h3>
                    <p className="text-slate-300 text-sm">
                      Acesse seus guias e sons calmantes mesmo sem internet
                    </p>
                  </div>
                </div>
              </div>

              {isInstallable && !isIOS && (
                <Button 
                  onClick={handleInstallClick}
                  size="lg"
                  className="w-full text-lg px-8 py-6 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 text-white font-bold mb-6"
                >
                  Instalar App Agora
                </Button>
              )}

              {isIOS && (
                <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-6 mb-6">
                  <p className="text-white font-bold mb-3">Para instalar no iPhone/iPad:</p>
                  <ol className="text-blue-100 text-sm space-y-2 list-decimal list-inside">
                    <li>Toque no botão "Compartilhar" no Safari (ícone de quadrado com seta)</li>
                    <li>Role para baixo e toque em "Adicionar à Tela de Início"</li>
                    <li>Toque em "Adicionar" no canto superior direito</li>
                  </ol>
                </div>
              )}

              {isAndroid && !isInstallable && (
                <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-6 mb-6">
                  <p className="text-white font-bold mb-3">Para instalar no Android:</p>
                  <ol className="text-blue-100 text-sm space-y-2 list-decimal list-inside">
                    <li>Toque no menu do navegador (três pontos)</li>
                    <li>Selecione "Instalar app" ou "Adicionar à tela inicial"</li>
                    <li>Confirme a instalação</li>
                  </ol>
                </div>
              )}
            </>
          )}

          <div className="text-center">
            <Link to="/">
              <Button 
                variant="outline" 
                className="text-white border-slate-600 hover:bg-slate-700"
              >
                {isInstalled ? "Voltar ao App" : "Voltar à Página Inicial"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
