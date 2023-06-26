import { useEffect, useRef, useState } from "react"
import AccordionContent from "../components/AccordionContent";

function appearAllBranch() {
    const redirect = document.getElementById("branchContainer");
    const bubbles = redirect.querySelectorAll(".branch");
  
    function showItem (bubble) { // Fait apparaitre un element avec un degrade
        bubble.classList.add("animate-appear");
    }
    
    bubbles.forEach(function(bubble, index) { // Fait apparaitre chaque bulle de l'accueil
        setTimeout(function() {
            showItem(bubble);
        }, index * 1500);
    })

  }


const EspaceJeune = () => {

    const [isClicked, setIsClicked] = useState("0");
    const [isOpen, setIsOpen] = useState(false);
    const openList = useRef();
    const rotateArrow = useRef();

    useEffect(() => {
        appearAllBranch();
    }, [])
    const handleClick = (id) => {
        if (isClicked == id ) {
            setIsClicked("0");
        } else {
        setIsClicked(id);
        }
        scrollTo(0, 2500);
    }
    // const [images, setImages] = useState([]);
    const handleOpen = () => {
        setIsOpen((isOpen) => !isOpen);
        openList.current.classList.toggle("translate-x-[50px]");
        rotateArrow.current.classList.toggle("-rotate-180")
    }
    return (
        <main>
            <section class="bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed">
                <h1 class="hidden md:block font-title text-4xl md:text-5xl md:pt-16 text-center">Espace Jeunes de 16 à 25 ans</h1>
                <div className="h-auto md:max-w-[100%] lg:max-w-[100vw] mx-auto aspect-video relative ">
                    <div id="branchContainer" className='hidden md:block h-full w-full'>
                        <button id="1" onClick={() => handleClick(1)} className=" w-[47%] h-[170px] z-10 absolute top-[4%] right-[10%]"></button>
                        <img src="assets\img\jeunePage\1-_SHEMA_ORIENTATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>
                        
                        <button id="2" onClick={() => handleClick(2)} className="w-[45%] h-[170px] z-10 absolute top-[45%] left-1/2"></button>
                        <img src="assets\img\jeunePage\2-_SHEMA_FORMATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>
                        
                        <button id="3" onClick={() => handleClick(3)} className=" w-[45%] h-[170px] z-10 absolute top-[65%] left-1/2"></button>
                        <img src="assets\img\jeunePage\3-_SHEMA_EMPLOI.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>
                        
                        <button id="4" onClick={() => handleClick(4)} className=" w-[40%] h-[200px] z-10 absolute top-[4%] left-0"></button>
                        <img src="assets\img\jeunePage\4-_SHEMA_PROMO_DES_METIERS.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>
                        
                        <button id="5" onClick={() => handleClick(5)} className="w-[40%] h-[200px] z-10 absolute top-[70%] left-[4%]"></button>
                        <img src="assets\img\jeunePage\5-_SHEMA_VIE_QUOTIDIENNE.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>
                        
                        <button id="6" onClick={() => handleClick(6)} className="w-[47%] h-[150px] z-10 absolute top-[25%] right-[5%]"></button>
                        <img src="assets\img\jeunePage\6-_SHEMA_INFORMATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>
                    </div>
                    <img src="assets\img\jeunePage\page_jeunes_thematiques-mobile.jpg" className="object-cover md:hidden w-full"></img>
                </div>
            </section>
            <section className="text mt-8 min-h-[20vh]" >
            <h2 class="hidden md:block font-title text-3xl md:text-5xl py-4 md:pt-4 pb-8 text-center">Toutes nos missions</h2>

                <div class="flex mx-auto w-auto justify-center font-bold">
                    <button onClick={() => handleOpen()} className="flex items-center bg-main-pink px-4 py-2 text-main-white text-2xl mr-4">Voir nos missions <i ref={rotateArrow} className="fa-solid fa-arrow-right duration-[1s] ease-out  transition-transform ml-2 mt-[1%]"></i> </button>
                    <ol ref={openList} className={`list-disc flex gap-8 pl-8 bg-main-pink px-4 py-2 text-main-white items-center text-xl relative after:duration-[1s] ease-out justify-center after:content-[""] after:w-[110%] after:bg-main-white 
                    transition-all after:z-30 after:transition-all after:h-[105%] after:absolute after:-top-[0.8px] after:-left-0
                    ${ isOpen == true ? "after:translate-x-full" : ""}`}>
                        <li>
                            <button onClick={() => handleClick(1)}>Orientation</button>
                        </li>
                        <li >
                            <button onClick={() => handleClick(2)}>Formation</button>
                        </li>
                        <li>
                            <button onClick={() => handleClick(3)}>Emploi</button>
                        </li>
                        <li >
                            <button onClick={() => handleClick(4)}>Promotions des métiers</button>
                        </li>
                        <li>
                            <button onClick={() => handleClick(5)}>Vie quotidienne</button>
                        </li>
                        <li >
                            <button onClick={() => handleClick(6)}>Information</button>
                        </li>
                    </ol>
                </div>
                <div class="text-3xl mt-8 max-w-[90%] mx-auto">
                    <AccordionContent id="1" isClicked={isClicked}>
                        Orientation
                    </AccordionContent>
                    <AccordionContent id="2" isClicked={isClicked}>
                        Formation
                    </AccordionContent>
                    <AccordionContent id="3" isClicked={isClicked}>
                        Emploi
                    </AccordionContent>
                    <AccordionContent id="4" isClicked={isClicked}>
                        Promotions des métiers
                    </AccordionContent>
                    <AccordionContent id="5" isClicked={isClicked}>
                        Vie quotidienne
                    </AccordionContent>
                    <AccordionContent id="6" isClicked={isClicked}>
                        Shéma d'information
                    </AccordionContent>
                </div>
            </section>
        </main>
    )
}

export default EspaceJeune