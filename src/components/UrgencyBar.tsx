import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const UrgencyBar = () => {
  const targetDate = new Date("2025-12-11T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="font-bold text-sm md:text-base">
          ⚡ OFERTA TERMINA EM:
        </span>
        <div className="flex gap-2 font-mono font-bold text-base md:text-lg">
          <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.days).padStart(2, '0')}d</span>
          <span>:</span>
          <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}h</span>
          <span>:</span>
          <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}m</span>
          <span>:</span>
          <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}s</span>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;