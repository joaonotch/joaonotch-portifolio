import { Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0c10] border-t border-[#1b222c] mt-auto">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
        
        {/* Texto de Copyright (Esquerda) */}
        <p className="text-[#8b949e] text-sm text-center md:text-left">
          © 2026 <span className="text-white font-bold">João Victor</span> — todos os direitos reservados
        </p>

        {/* Ícones Sociais (Direita) */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/joaonotch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-white hover:-translate-y-1 transition-transform duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/joaonotch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-white hover:-translate-y-1 transition-transform duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://discord.com/users/1376385420069175366"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-white hover:-translate-y-1 transition-transform duration-300"
            aria-label="Discord"
          >
            {/* Ícone customizado do Discord alinhado à estética Lucide (Stroke/Outline) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12h.01" />
              <path d="M15 12h.01" />
              <path d="M7.5 4.57c2-1.07 4.5-1.07 6.5 0a12.8 12.8 0 0 1 5.5 13A12.8 12.8 0 0 1 14 20.5c-1.33-1-3-1-4.5 0a12.8 12.8 0 0 1-5.5-2.93A12.8 12.8 0 0 1 2.5 7.57a12.8 12.8 0 0 1 5-3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}