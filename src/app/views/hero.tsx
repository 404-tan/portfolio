import GlitchTitle from "../components/glitch-title";

export default function Hero(){
    return (
        <div style={{display: "flex",flexDirection:"column",alignItems: "center",justifyContent: "center",minHeight:"100%"}}>
            
            <GlitchTitle text="NOT FOUND" fontSize="3rem"></GlitchTitle>
            <GlitchTitle text="TAN" fontSize="4.5rem" ></GlitchTitle>

        </div>
    )
}