"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Controla a "duração" da animação de rolagem
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efeito de suavização
      // @ts-ignore - A propriedade 'smoothTouch' existe, mas pode não estar nas definições de tipo da sua versão.
      smoothTouch: true, // Ativa a rolagem suave em dispositivos de toque
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const req = requestAnimationFrame(raf);

    // Limpa a instância ao desmontar o componente para evitar vazamento de memória
    return () => {
      cancelAnimationFrame(req);
      lenis.destroy();
    };
  }, []);

  return null; // Este componente não renderiza nada na tela
}