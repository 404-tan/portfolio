import GlitchedCard from "@/app/components/glitched-card";

export default function Projects(){
    return (
        <div style={{display: "flex",flexDirection:"column",alignItems: "center",justifyContent: "center",minHeight:"100%"}}>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <GlitchedCard
              image="https://picsum.photos/600/400"
              title="Este portfólio"
              description="Portfólio pessoal com efeito glitch e estilo CRT, desenvolvido com React, Tailwind CSS e Zustand para gerenciamento de estado."
              tags={["React", "Zustand", "Tailwind", "Glitch"]}
              githubUrl="https://github.com/404-tan/portfolio"
            />
          </div>
        </div>
    );
}