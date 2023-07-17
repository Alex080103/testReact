import { useState } from "react";
const CardTeam = ({content}) => {
    // console.log(content.linkedin);
    // console.log(content);
    const [showText, setShowText] = useState(false);
    return (
        <div className={` ${ content.poste == "Directeur" ? "-order-[50]" : content.poste == "Responsable de secteur" ? "-order-[49]"
        : content.poste == "Chargée de projets et de communication" ? "-order-[48]" : content.poste == "Assistante de Direction" ? "-order-[47]" 
        : content.poste == "Chargée d'accueil et de secrétariat" ? "-order-[46]" : ""}
        flex-col mx-auto flex h-[400px] md:h-[500px] w-[280px] sm:w-[350px] lg:w-[380px] relative`}>
            <div className={`h-3/4 bg-[url('${content.photo}')] bg-cover w-[280px] sm:w-[350px] lg:w-[380px] bg-[center_top_-2.3rem] rounded-tr-[15%] rounded-t-xl relative`}>
            </div>
            <div className="h-1/4 text-center border-2 border-gray-800 flex flex-wrap content-center justify-center  border-t-0 rounded-b-xl">
                <h4 className="font-extrabold text-[22px] sm:text-[28px] w-[100%] whitespace-nowrap">{content.surname} <span className="uppercase italic ">{content.name}</span></h4>
                <p className="italic">{content.poste}<span className="italic font-bold">{content.localisation == "null" ? "" :  " - " + content.localisation }</span></p>
            </div>
            
                <a href={content.linkedin} className={`absolute top-3 left-4  p-2 px-3 rounded-full
                ${ content.linkedin !== "" ?  "bg-main-white" : "bg-gray-500 cursor-default"} `}>
                    <i className="fa-brands fa-linkedin-in text-gray-800 text-xl rounded-full >"></i>
                </a>

            <button onClick={() => setShowText((showText) => !showText)} className={`absolute top-16  left-4 bg-main-white p-2 px-3 rounded-full ${ showText == false ? "animate-pulse" : "bg-gray-400"} `}>
                <i className="fa-solid fa-comment text-gray-800 text-xl rounded-full >"></i>
            </button>
            <div className={`absolute bottom-1/4 transition-all duration-[0.9s] ease-out ${ showText == false ? "translate-y-1/4 opacity-0" : "opacity-1" }`}>
                <div className="bg-gray-800 text-main-white">
                    <p className="p-4 text-sm md:text-lg">{content.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTeam;