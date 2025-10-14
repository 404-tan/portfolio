'use client';

import { useState } from "react";
import GlitchedCard from "@/app/components/glitched-card";
import GlitchedTerm from "@/app/components/glitched-term";
import { motion } from "framer-motion";
import { FaJava, FaDocker, FaLinux, FaPython } from "react-icons/fa";
import { SiSharp, SiDotnet, SiSpring, SiAngular, SiTypescript, SiPostgresql, SiKubernetes } from "react-icons/si";
interface comando {
  input: string;
  output?: string;
}
const commands: comando[] = [
{ input: "./about_me", output: "Segmentation fault (core dumped)" },
{ input: "gcc about_me_fixed.c -o about_me" },
{ input: "clear" },
{ input: "./about_me"},
];

export default function About() {
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const yearsOfExperience = new Date().getFullYear() - 2018;

  const handleTerminalDone = () => {

    setTimeout(() => {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        setShowContent(true);
      }, 1000);
    }, 50);
  };

  return (
    <div className="flex flex-col items-center text-lime-400 font-mono space-y-10 w-100%">
      {/* Terminal */}
      <GlitchedTerm
        user="guest"
        machine="tan"
        comandos={commands}
        fontSize="1.6rem"
        repeatDelay={1800}
        onDone={handleTerminalDone}
      />

      {/* Loader com delay */}
      {showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lime-400 animate-pulse text-xl"
        >
          Carregando...
        </motion.div>
      )}

      {/* Conteúdo final */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl"
        >
          {/* Descrição */}
          <div>
            <h1 className="text-2xl font-bold text-lime-300">
                Oi, sou Martan. <br/>
            </h1>
            <p className="text-lime-400/90 mt-2 text-lg leading-relaxed">
                Sou desenvolvedor fullstack a {yearsOfExperience} anos, minha stack principal é ASP NET CORE e Angular.<br/>
                (OBS: Sou mais do Backend, mas gosto de brincar com Frontend também!)<br/>

            </p>

          </div>

          {/* Linguagens e ferramentas */}
          <div>
            <h2 className="text-xl mb-3 text-lime-300 font-semibold">
              Tecnologias que uso:
            </h2>
            <div className="flex justify-center gap-5 text-5xl flex-wrap">
              <SiDotnet />
              <FaJava />
              <SiSpring />
              <SiAngular />
              <SiTypescript />
              <FaDocker />
              <FaLinux />
              <SiPostgresql />
              <FaPython />
              <SiKubernetes />
            </div>
          </div>
          <div>
            <img src="/assets/the_creation_of_adam.png" alt="A Criação de Adão" />
          </div>
          <div>
            <p className="text-lime-400/90 mt-2 text-lg leading-relaxed">
              "O impulso de criar — seja um código, uma canção ou uma solução — não é apenas algo que fazemos; é a mais pura expressão de quem somos. Somos seres que transformam o caos em ordem e o vazio em propósito."
            </p>
          </div>

        </motion.div>
      )}
    </div>
  );
}
