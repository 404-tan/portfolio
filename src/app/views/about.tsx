import { JSX } from "react";
import GlitchTitle from "../components/glitch-title";
import GlitchedTerm from "../components/glitched-term";

export default function About(){
    
    const commands = new Map<string, string | JSX.Element>([
        ['./about_me', 'Segmentation fault (core dumped)'],
        ['gcc about_me_fixed.c -o about_me', ''],
        ['clear', ''], // irá limpar
        ['./about_me', ''], // renderiza um componente
    ]);
  
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            
            <GlitchedTerm
            user="guest"
            machine="tan"
            commandResult={commands}
            fontSize="1.6rem"
            repeatDelay={1800}
            />
            <GlitchTitle text="guest@tan:~$ ./about_me"></GlitchTitle>
            
            <GlitchTitle text="Segmentation fault (core dumped)"></GlitchTitle>
            
            <GlitchTitle text="guest@tan:~$ gcc about_me_fixed.c -o about_me"></GlitchTitle>

            <GlitchTitle text="guest@tan:~$ clear"></GlitchTitle>
            
            <GlitchTitle text="guest@tan:~$ ./about_me"></GlitchTitle>
        </div>
    )
}