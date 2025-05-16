
import GlitchedTerm from "../components/glitched-term";

interface comando {
    input : string;
    output?: string;
}


export default function About(){
    
    const commands : comando[] = [
        {input:'./about_me', output:'Segmentation fault (core dumped)'},
        {input:'gcc about_me_fixed.c -o about_me'},
        {input:'clear'},
        {input:'./about_me'}, 
    ] 

  
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            
            <GlitchedTerm
            user="guest"
            machine="tan"
            comandos={commands}
            fontSize="1.6rem"
            repeatDelay={1800}
            />
        </div>
    )
}