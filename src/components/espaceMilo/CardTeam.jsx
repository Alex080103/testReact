import { useState } from "react";

const CardTeam = ({content}) => {
    const [showText, setShowText] = useState(false);
    return (
        <div className="flex-col flex h-[400px] md:h-[500px] w-[320px] md:w-[350px] lg:w-[380px] relative">
            <div className={`h-3/4 bg-[url('${content.portrait}')] bg-cover w-[320px] md:w-[350px] lg:w-[380px] bg-[center_top_-2.3rem] rounded-tr-[15%] rounded-t-xl relative`}>
            </div>
            <div className="h-1/4 text-center border-2 border-gray-800 flex flex-wrap content-center justify-center  border-t-0 rounded-b-xl">
                <h4 className="font-extrabold text-[28px] w-[100%]">{content.prenom} <span className="uppercase italic">{content.nom}</span></h4>
                <p className="italic">{content.role}<span className="italic font-bold"> - Vouziers</span></p>
            </div>
            <a href="" className="absolute top-3 left-4 bg-main-white p-2 px-3 rounded-full hover:animate-pulse">
                <i className="fa-brands fa-linkedin-in text-gray-800 text-xl rounded-full >"></i>
                </a>
            <button onClick={() => setShowText((showText) => !showText)} className="absolute top-16 left-4 bg-main-white p-2 px-3 rounded-full hover:animate-pulse">
                <i className="fa-solid fa-comment text-gray-800 text-xl rounded-full >"></i>
            </button>
            <div className={`absolute bottom-1/4 transition-all duration-[0.9s] ease-out ${ showText == false ? "translate-y-1/4 opacity-0" : "opacity-1" }`}>
                <div className="bg-gray-800 text-main-white">
                    <p className="p-4 text-md md:text-xl">{content.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTeam;