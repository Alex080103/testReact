import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../assets/js/navbar/nav";


export default function Nav()
{
    const[isOpen, setOpen] = useState(true);
    const navMobile = useRef();

    const toggleDisplayNavMobile = () => {
        navMobile.current.classList.toggle("translate-x-[99vw]");
        setOpen((isOpen) => !isOpen);
    }

    const closeDisplayNavMobile = () => {
        navMobile.current.classList.add("translate-x-[99vw]");
        setOpen((isOpen) => true);
    }

    // navMobileButtons.current.addEventListener("click", toggleDisplayNavMobile);
    const urlName = useLocation();

    //render
    return (
        <header>
            <nav id="nav" className="fixed transition-all duration-[0.8s] top-0 bg-main-white z-50 shadow-2 border-b-2">
            <div className="grid grid-cols-2 md:grid-cols-[20%_80%] ld:grid-cols-[30%_70%] z-50  w-[100vw]">
                <Link to="/" onClick={closeDisplayNavMobile}>
                    <img src={"/assets/img/LOGO_MILO_ILLUSTRATOR.jpg"} className="justify-self-start h-[80px] md:h-[100px]"></img>
                </Link>
                <div className="hidden md:grid grid-cols-[30%_30%_30%_10%] xl:grid-cols-[22%_23%_23%_30%] w-full items-center justify-items-center md:overflow-y-hidden text-[18px] lg:text-[22px] grid-rows-1 h-full">
                <div className="flex items-center  relative">
                    <Link to="/EspaceJeune" className={`font-caviar animate-nav ${urlName.pathname == "/EspaceJeune" ? "after:!w-[94%]" : ""} after:!bg-main-orange relative`}>Espace jeune</Link>
                </div>
                <div className="flex  items-center relative">
                    <Link to="/EspaceEntreprise" className={`font-caviar animate-nav ${urlName.pathname == "/EspaceEntreprise" ? "after:!w-[94%]" : ""} after:!bg-main-green relative`}>Espace entreprise</Link>
                </div>
                <div className="flex   items-center relative">
                    <Link to="/EspaceMilo" className={`font-caviar animate-nav ${urlName.pathname == "/EspaceMilo" ? "after:!w-[94%]" : ""} after:!bg-main-pink relative`}>La mission locale</Link>
                </div>
                <div className="flex  items-center text-2xl lg:text-3xl relative">
                    <Link to="tel:03 24 38 29 17" className="font-caviar italic text-main-pink uppercase font-bold w-full">
                        <i className="fa-solid fa-mobile-screen text-main-pink mr-2"></i>
                        <span className="hidden xl:inline">03 24 38 29 17</span>
                    </Link>
                </div>
                </div>
                <div id="changeNav" className=" md:hidden flex justify-end  items-center">
                    <i onClick={toggleDisplayNavMobile} className={`fa-solid fa-bars mr-2 sm:mr-8 cursor-pointer text-[36px] ${!isOpen ? "hidden" : ""}`}></i>
                    <i  onClick={toggleDisplayNavMobile} className={`fa-solid fa-xmark mr-2 sm:mr-8 cursor-pointer text-[40px] ${isOpen ? "!hidden" : ""}`}></i>
                </div>
            </div>
            <div id="animate-move" className="absolute -bottom-[0.5px] -left-[50vw] w-[150vw] grid grid-cols-5 grid-rows-1">
                <div className="h-[1.5px] bg-main-blue"></div>
                <div className="h-[1.5px] bg-main-orange"></div>
                <div className="h-[1.5px] bg-main-green"></div>
                <div className="h-[1.5px] bg-main-purple"></div>
                <div className="h-[1.5px] bg-main-pink"></div>
            </div>

            </nav>
                <div ref={navMobile} id="navMobile" className=" md:hidden fixed bg-main-white z-50 top-[86px] flex flex-col h-[100vh] w-[99vw]
                transition-all right-0 border-main-pink border-l-2 translate-x-[99vw] items-center justify-start gap-8
                text-[32px] sm:text-[45px]">
            <div className="flex items-center mt-8 relative">
                   <Link to="/EspaceJeune" onClick={toggleDisplayNavMobile} className="font-caviar animate-nav after:bg-main-orange relative">Espace jeune</Link>
            </div>
            <div className="flex  items-center relative">
                    <Link to="/EspaceEntreprise" onClick={toggleDisplayNavMobile} className="font-caviar animate-nav after:bg-main-green relative">Espace entreprise</Link>
            </div>
            <div className="flex   items-center relative">
                   <Link to="/EspaceMilo" onClick={toggleDisplayNavMobile} className="font-caviar animate-nav after:bg-main-pink relative">La mission locale</Link>
            </div>
            <div className="flex  items-center text-[32px] sm:text-[45px] relative">
                <a href="tel:03 24 38 29 17" className="font-caviar italic text-main-pink uppercase font-bold w-full">
                    <i className="fa-solid fa-mobile-screen text-main-pink mr-2"></i>
                    <span className="inline">03 24 38 29 17</span>
                </a>
            </div>
                </div>

        </header>
        );
}