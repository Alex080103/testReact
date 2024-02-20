import { useEffect, useRef, useState } from "react";
import { Link, NavLink} from "react-router-dom";

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    function toggleContact() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
            <div >
                <div id="contactButton" onClick={toggleContact} className={`fixed rounded-r-lg z-40 transition-all duration-[1.3s] ${ isOpen !== true ? "animate-pulse" : "translate-x-[220px] sm:translate-x-[350px]"} flex flex-col animate-pulse top-24 md:top-40 bg-main-pink cursor-pointer group`}>
                    <i className="fa-solid fa-circle-info text-3xl md:text-5xl  p-3 md:p-4 text-main-white"></i>
                </div>
                <div id="contactInfo" className={`fixed w-[220px] sm:w-[350px] rounded-br-lg top-24 md:top-40 z-40 ${ isOpen == true ? "" : " opacity-0 -translate-x-[220px] sm:-translate-x-[350px]"}  transition-all duration-[1.3s] bg-main-white group-hover:bg-slate-950 border-2 border-main-pink`}>
                    <div className="p-2 pl-4 sm:p-4">
                        <h4 className="text-xl sm:text-2xl font-bold">Mission Locale de Rethel</h4>
                        <p className="italic inline">16 Rue Louise Weiss</p><br></br>
                        <a href="tel:03.24.38.29.17"><i className="fa-solid fa-phone mr-2 text-main-pink"></i> 03 24 38 29 17</a>
                    </div>
                    <div className="p-2 pl-4 sm:p-4">
                        <h4 className="text-xl sm:text-2xl font-bold">Mission Locale de Vouziers</h4>
                        <p className="italic inline">2 Rue de l'Agriculture</p><br></br>
                        <a href="tel:03.24.71.95.91"><i className="fa-solid fa-phone mr-2 text-main-pink"></i>03 24 71 95 91</a>
                    </div>
                    <Link to="/Contact"><i className="fa-solid fa-envelope text-2xl p-2 md:p-4 text-center w-full bg-main-pink text-main-white"></i></Link>
                </div>
            </div>
    )
}

export default Contact;