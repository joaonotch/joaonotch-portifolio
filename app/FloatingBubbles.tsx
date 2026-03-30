"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // 🎛️ CONTROLE DE OPACIDADE DAS BOLHAS (0.0 até 1.0)
  const BASE_OPACITY = 0.2; // <- Mude esse valor para deixar as bolhas mais fracas ou mais fortes!

  useEffect(() => {
    // Detecta se é mobile para reduzir a quantidade de bolhas e melhorar a performance de rolagem
    const isMobile = window.innerWidth < 768;
    const bubbleCount = isMobile ? 25 : 100;

    // Gerado apenas no lado do cliente (navegador) para as posições aleatórias não quebrarem o servidor
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // Tamanho entre 2px e 6px (bolhas pequenas)
      left: Math.random() * 100, // Posição horizontal na tela (0% a 100%)
      animationDuration: Math.random() * 10 + 15, // Velocidade lenta (de 15s a 25s)
      animationDelay: -Math.random() * 25, // Atraso negativo para já começarem espalhadas pela tela
      opacity: Math.random() * (BASE_OPACITY / 2) + (BASE_OPACITY / 2), // Variação natural de opacidade
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-[#a3e635] shadow-[0_0_8px_1px_rgba(163,230,53,0.5)] transform-gpu will-change-transform"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `-20px`, // Começa fora da tela por baixo
            animation: `floatUp ${bubble.animationDuration}s linear ${bubble.animationDelay}s infinite`,
            "--bubble-opacity": bubble.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}