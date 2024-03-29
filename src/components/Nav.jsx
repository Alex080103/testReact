import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../assets/js/navbar/nav";
import ConnectUser from "./ConnectUser";


export default function Nav({isConnected, setIsConnected})
{
    const [isOpenConnect, setIsOpenConnect] = useState(false);
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
            <nav id="nav" className="fixed transition-all duration-[0.8s] ease-out top-0 bg-main-white z-50 shadow-2 border-b-2">
            <div className="grid grid-cols-2 lg:grid-cols-[15%_85%] ld:grid-cols-[30%_70%] z-50  w-[100vw]">
                <Link to="/Accueil" onClick={closeDisplayNavMobile} aria-label="Accédez à l'accueil">
                    <img src={"/assets/img/LOGO_MILO_ILLUSTRATOR.jpg"} className="justify-self-start w-auto h-[80px] md:h-[100px]" alt="Logo Mission Locale"></img>
                </Link>
                <div className="hidden lg:grid grid-cols-[22%_24%_28%_18%_2%] xl:grid-cols-[18%_20%_22%_15%_25%] w-full items-center justify-items-center md:overflow-y-hidden text-[18px] xl:text-[22px] grid-rows-1 h-full">
                <div className="flex   items-center relative">
                    <Link to="/EspaceMilo" aria-label="Accédez à la page parlant de la Mission locale" className={`font-caviar animate-nav ${urlName.pathname == "/EspaceMilo" ? "after:!w-[94%]" : ""} after:!bg-main-pink relative`}>La mission locale</Link>
                </div>
                <div className="flex items-center  relative">
                    <Link to="/EspaceJeune" aria-label="Accédez à la page réservé aux jeunes" className={`font-caviar animate-nav ${urlName.pathname == "/EspaceJeune" ? "after:!w-[94%]" : ""} after:!bg-main-orange relative`}>Jeunes 16/25 ans</Link>
                </div>
                <div className="flex  items-center relative">
                    <Link to="/EspaceEntreprise" aria-label="Accédez à la page dédiée aux entreprises et aux partenaires" className={`font-caviar animate-nav ${urlName.pathname == "/EspaceEntreprise" ? "after:!w-[94%]" : ""} after:!bg-main-green relative`}>Entreprises/Partenaires</Link>
                </div>
                <div className="flex   items-center relative">
                    <Link to="/OneForAll" aria-label="Accédez à la page ouvert à tous"  className={`font-caviar animate-nav ${urlName.pathname == "/pourTous" ? "after:!w-[94%]" : ""} after:!bg-main-blue relative`}>Tous publics</Link>
                </div>

                <div className="flex  items-center text-2xl lg:text-3xl relative">
                { isConnected == true ?  
                    <Link to="/Crud/:team" className="font-caviar italic text-main-pink uppercase font-bold w-full">
                        Admin
                    </Link>
                : 
                    <button onClick={() => setIsOpenConnect(!isOpenConnect)} className="font-caviar italic text-main-pink uppercase font-bold w-full">
                        {/* <i className="fa-solid fa-mobile-screen text-main-pink mr-2"></i> */}
                        <span className="hidden xl:inline">Connexion</span>
                    </button>
                }

                </div>
                </div>
                <div id="changeNav" className=" lg:hidden flex justify-end  items-center">
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
            <div ref={navMobile} id="navMobile" className=" lg:hidden fixed bg-main-white z-50 top-[80px] md:top-[100px] flex flex-col h-[100vh] w-[99vw]
                transition-all right-0 border-main-pink border-l-2 translate-x-[99vw] items-center justify-start gap-8
                text-[32px] sm:text-[45px]">
                <div className="flex  mt-8 items-center relative">
                    <Link to="/EspaceMilo" aria-label="Accédez à la page dédiée aux entreprises et aux partenaires" onClick={toggleDisplayNavMobile} className="font-caviar animate-nav after:bg-main-pink relative">La mission locale</Link>
                </div>
                <div className="flex items-center  relative">
                    <Link to="/EspaceJeune" aria-label="Accédez à la page parlant de la Mission locale" onClick={toggleDisplayNavMobile} className="font-caviar animate-nav after:bg-main-orange relative">Jeunes 16/25 ans</Link>
                </div>
                <div className="flex  items-center relative">
                    <Link to="/EspaceEntreprise" aria-label="Accédez à la page réservé aux jeunes" onClick={toggleDisplayNavMobile} className="font-caviar animate-nav after:bg-main-green relative">Espace entreprises</Link>
                </div>
                <div className="flex   items-center relative">
                    <Link to="/OneForAll" aria-label="Accédez à la page ouvert à tous" onClick={toggleDisplayNavMobile} className={`font-caviar animate-nav ${urlName.pathname == "/pourTous" ? "after:!w-[94%]" : ""} after:!bg-main-blue relative`}>Tous public</Link>
                </div>
                <div className="flex  items-center text-[32px] sm:text-[45px] relative">
                    { isConnected == true ?  
                        <Link to="/Crud/:team" className="font-caviar italic text-main-pink uppercase font-bold w-full">
                            Admin
                        </Link>
                    : 
                        <a href="tel:03 24 38 29 17" className="font-caviar italic text-main-pink uppercase font-bold w-full">
                            <i className="fa-solid fa-mobile-screen text-main-pink mr-2"></i>
                            <span className="inline">03 24 38 29 17</span>
                        </a>
                    }

                </div>
            </div>
            <ConnectUser isOpenConnect={isOpenConnect} setIsOpenConnect={setIsOpenConnect} setIsConnected={setIsConnected}></ConnectUser>
        </header>

        );
}