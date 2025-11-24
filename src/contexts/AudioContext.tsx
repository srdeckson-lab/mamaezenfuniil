import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface AudioContextType {
  startAudio: () => void;
  stopAudio: () => void;
  isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [audioElement, setAudioElement] = useState<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();

  const startAudio = () => {
    if (!audioElement && !isPlaying) {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/ciH1K4e9dzQ?autoplay=1&loop=1&playlist=ciH1K4e9dzQ&controls=0&showinfo=0&mute=0&volume=30';
      iframe.style.display = 'none';
      iframe.allow = 'autoplay';
      document.body.appendChild(iframe);
      setAudioElement(iframe);
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (audioElement) {
      document.body.removeChild(audioElement);
      setAudioElement(null);
      setIsPlaying(false);
    }
  };

  // Parar áudio nas páginas de obrigado
  useEffect(() => {
    if (location.pathname === '/obrigado' || location.pathname === '/obrigado-recusa') {
      stopAudio();
    }
  }, [location.pathname]);

  // Limpar áudio ao desmontar
  useEffect(() => {
    return () => {
      if (audioElement) {
        document.body.removeChild(audioElement);
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{ startAudio, stopAudio, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
