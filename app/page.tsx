"use client";

import { useState, useEffect } from "react";
import { Footer } from "./Footer";
import { Mail, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  year: string;
  link?: string;
  tags: string[];
  disabled?: boolean;
}

interface LinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Yami Economy",
    description: "Bot de entretenimento para Discord com economia virtual inteligente, ranking competitivo e mecânicas legais!",
    year: "Jan - Atual",
    link: "https://github.com/joaonotch/YamiEconomy",
    tags: ["Javascript", "Node.js", "Discord.js"],
  },
  {
    title: "BioElo",
    description: "O BioElo é um ecossistema digital de inteligência botânica e regeneração urbana. Ele se materializa como um aplicativo móvel de Ciência Cidadã",
    year: "Coming Soon...",
    link: "",
    tags: ["Typescript", "React Native", "SQLite"],
    disabled: true,
  },
];

interface StackItem {
  name: string;
  icon: string;
}

const stack: StackItem[] = [
  {
    name: "Javascript",
    // Cor amarela oficial do JS: F7DF1E
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "Typescript",
    // Cor azul oficial do TS: 3178C6
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Node.js",
    // Cor verde oficial do Node: 339933
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "SQLite",
    // Cor azul oficial do SQLite: 003B57
    icon: "https://cdn.simpleicons.org/sqlite/003B57",
  },
  {
    name: "React Native (TSX)",
    // Cor azul claro oficial do React: 61DAFB
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
];

const contacts: LinkItem[] = [
  { 
    label: "Email", 
    href: "mailto:joaonotch@proton.me",
    icon: <Mail className="w-4 h-4" />
  },
  { 
    label: "Discord", 
    href: "https://discord.com/users/1376385420069175366",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h.01" />
        <path d="M15 12h.01" />
        <path d="M7.5 4.57c2-1.07 4.5-1.07 6.5 0a12.8 12.8 0 0 1 5.5 13A12.8 12.8 0 0 1 14 20.5c-1.33-1-3-1-4.5 0a12.8 12.8 0 0 1-5.5-2.93A12.8 12.8 0 0 1 2.5 7.57a12.8 12.8 0 0 1 5-3z" />
      </svg>
    )
  },
  { 
    label: "Github", 
    href: "https://github.com/joaonotch",
    icon: <Github className="w-4 h-4" />
  },
];

// Componente do Card de Projeto com Borda Animada
function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group relative overflow-hidden rounded-xl bg-[#30363d] p-[1px] hover:shadow-[0_0_20px_-5px_rgba(163,230,53,0.3)] transition-shadow duration-500">
      {/* Efeito de Borda Animada (Conic Gradient Giratório) */}
      <div className="absolute top-1/2 left-1/2 h-[300%] w-[150%] -translate-x-1/2 -translate-y-1/2 animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,transparent_75%,#a3e635_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Container do Conteúdo (Máscara Ultra-Dark central) */}
      <div className="relative z-10 flex flex-col bg-[#0d1117] rounded-xl p-4 md:p-5 gap-3 w-full h-full">
        
        {/* Topo: Título e Data */}
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-mono text-[#a3e635] font-bold text-lg tracking-tight">
            {project.title}
          </h4>
          <span className="font-mono text-[#8b949e] text-xs sm:text-sm whitespace-nowrap mt-1">
            {project.year}
          </span>
        </div>

        {/* Descrição (Centro) */}
        <p className="font-sans text-[#e6edf3]/90 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags em Quadrinhos */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-sans text-xs text-[#a3e635] bg-[#21262d] border border-[#30363d] px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Botão de Visualizar */}
        <div className="mt-2 pt-4 border-t border-[#30363d]">
          {project.disabled ? (
            <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 text-sm bg-transparent border-2 border-[#30363d] text-[#8b949e] font-bold rounded-lg cursor-not-allowed opacity-60">
              Visualizar projeto
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 text-sm bg-transparent border-2 border-[#a3e635] text-[#a3e635] font-bold rounded-lg hover:bg-[#a3e635] hover:text-[#0d1117] group/btn"
            >
              Visualizar projeto
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const fullName = "João Victor";
  const isTypingFinished = typedName === fullName;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const type = () => {
      if (currentIndex <= fullName.length) {
        setTypedName(fullName.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(type, 70); // Velocidade rápida da digitação (80ms)
      }
    };

    // Delay de 800ms para esperar o fade-in da página antes de começar a digitar
    timeout = setTimeout(type, 800);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Só inicia o ciclo de Glitch após a digitação estar 100% completa
    if (!isTypingFinished) return;

    // Dispara o glitch automaticamente a cada 4.5 segundos
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 600); // O glitch dura 600ms antes de sumir
    }, 4500);

    return () => clearInterval(glitchInterval);
  }, [isTypingFinished]);

  return (
    <>
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up font-mono">
        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row gap-10 md:gap-12 items-center md:items-start">
          {/* Seção da Foto (Esquerda) */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              {/* Efeitos do anel giratório verde */}
              <div className="absolute inset-0 rounded-full animate-spin [animation-duration:3s] bg-[conic-gradient(from_0deg,transparent_70%,#84cc16_100%)] opacity-70 blur-md"></div>
              <div className="absolute inset-0 rounded-full animate-spin [animation-duration:3s] bg-[conic-gradient(from_0deg,transparent_70%,#84cc16_100%)]"></div>
              
              {/* Container da foto por cima do efeito */}
              <div className="w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full overflow-hidden relative z-10 bg-[#0a0a0a]">
                <img 
                  src="/joaonotch.jpeg" 
                  alt="Foto de perfil de João Victor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
              </span>
              <span className="text-lime-500 font-mono text-sm font-bold tracking-widest drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]">ONLINE</span>
          </div>
          </div>

          {/* Seção de Texto (Direita) */}
          <div className="flex flex-col flex-1 text-center md:text-left w-full">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 font-mono text-sm mb-4">
              <span className="text-white/40">{"</>"}</span>
              <span className="uppercase tracking-wider">BACK-END DEVELOPER</span>
            </div>

            <h1 className="text-4xl md:text-5xl text-white mb-6 flex flex-wrap justify-center md:justify-start items-center drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              <span className="font-mono text-[#8b949e] font-light">{"<"}</span>
              
              <span 
                className={`glitch-text font-bold tracking-tight ml-2 text-white ${isGlitching ? 'is-glitching' : ''}`}
                data-text={typedName}
              >
                {typedName}
              </span>
              <span className={`${isTypingFinished ? 'animate-blink' : ''} text-lime-500 font-light mr-2`}>_</span>
              
              <span className="font-mono text-[#8b949e] font-light">{"/>"}</span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto md:mx-0 md:text-left text-pretty mb-8">
              Desenvolvedor Back-End, Cristão, 16 anos. Focado em arquitetura escalável e impacto com propósito.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 font-mono text-sm mt-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Pernambuco, Brasil</span>
            </div>
          </div>
        </section>

        {/* Projetos Section */}
        <section className="mb-24">
          <h3 className="text-lg font-bold mb-8 text-white border-b border-white/20 pb-2 inline-block">[projetos]</h3>
          <ul className={`grid gap-4 ${projects.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </ul>
          
          {projects.length > 4 && (
            <div className="mt-10 flex justify-center">
              <a
                href="https://github.com/joaonotch?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 text-sm font-bold text-white/70 bg-[#0d1117] border border-[#30363d] rounded-full hover:text-white hover:border-[#a3e635]/50 hover:shadow-[0_0_15px_-5px_rgba(163,230,53,0.3)] transition-all duration-300"
              >
                Ver todos os meus projetos
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          )}
        </section>

        {/* Stack Section */}
        <section className="mb-24">
          <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">[stack]</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1117] border border-[#30363d] hover:border-[#a3e635]/50 hover:shadow-[0_0_15px_-5px_rgba(163,230,53,0.3)] transition-shadow duration-300 cursor-default"
              >
                <img src={tech.icon} alt={`${tech.name} icon`} className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-sans text-[#e6edf3]/90 group-hover:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contato Section */}
        <section>
          <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">[contato]</h3>
          <div className="flex flex-wrap gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0d1117] border border-[#30363d] hover:border-[#a3e635]/50 hover:shadow-[0_0_15px_-5px_rgba(163,230,53,0.3)] transition-shadow duration-300"
              >
                <span className="text-white/60 group-hover:text-[#a3e635] group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </span>
                <span className="text-sm font-sans text-[#e6edf3]/90 group-hover:text-white">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
