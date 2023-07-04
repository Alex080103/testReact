import { useEffect, useRef, useState } from "react"
import AccordionContent from "../components/AccordionContent";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";
import {register} from 'swiper/element/bundle';
register();



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

    const [isClicked, setIsClicked] = useState("1");
    const [isOpen, setIsOpen] = useState(true);
    const openList = useRef();
    const rotateArrow = useRef();

    const [allPhotos, setAllPhotos] = useState([
    ]);

    function addPhotos() {
        if (allPhotos.length == 0) {
            for (let i = 1; i < 19; i++) {
                let newElement = "plaquette" + i + ".jpg";
                setAllPhotos(allPhotos => [...allPhotos, newElement]);
            };
        }
    }
    console.log(allPhotos);
    useEffect(() => {
        appearAllBranch();
        addPhotos();
    }, [])
    const handleClick = (id) => {
        if (isClicked == id ) {
            setIsClicked("0");
        } else {
        setIsClicked(id);
        }
    }
    // const [images, setImages] = useState([]);
    const handleOpen = () => {
        setIsOpen((isOpen) => !isOpen);
        openList.current.classList.toggle("translate-x-[50px]");
        rotateArrow.current.classList.toggle("-rotate-180")
    }
    return (
        <main>
            <Helmet>
                <meta name="description" content="La Mission Locale Sud Ardennes : ton alliée dédiée pour concrétiser tes ambitions professionnelles.
                Découvre nos services d'accompagnement sur mesure, de formations adaptées et d'aide à l'insertion pour te guider vers un avenir prometteur. 
                Ensemble, donnons vie à tes projets et ouvrons les portes de l'emploi et de l'épanouissement"/>
                <title>Jeunes 16/25 ans</title>
                <link rel="canonical" href="/EspaceJeune"/>
            </Helmet>
            <section class="bg-[url('assets/img/homepage/bulles.jpg')] z-0 relative after:z-0 after:bg-gray-400 after:content-['] 
            after:opacity-10 after:w-full after:h-full after:absolute after:top-0 bg-cover bg-fixed">
                <h1 class="hidden md:block font-title text-4xl z-40 md:text-5xl md:pt-16 text-center">Espace Jeunes de 16 à 25 ans</h1>
                <div className="h-auto md:max-w-[100%] z-20 lg:max-w-[90vw] mx-auto aspect-video relative ">
                    <div id="branchContainer" className='hidden md:block  h-full w-full'>
                        {/* <button id="1" onClick={() => handleClick(1)} className=" w-[47%] h-[170px] z-10 absolute top-[4%] right-[10%]"></button> */}
                        <img src="assets\img\jeunePage\1-_SHEMA_ORIENTATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>

                        {/* <button id="2" onClick={() => handleClick(2)} className="w-[45%] h-[170px] z-10 absolute top-[45%] left-1/2"></button> */}
                        <img src="assets\img\jeunePage\2-_SHEMA_FORMATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>

                        {/* <button id="3" onClick={() => handleClick(3)} className=" w-[45%] h-[170px] z-10 absolute top-[65%] left-1/2"></button> */}
                        <img src="assets\img\jeunePage\3-_SHEMA_EMPLOI.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>

                        {/* <button id="4" onClick={() => handleClick(4)} className=" w-[40%] h-[200px] z-10 absolute top-[4%] left-0"></button> */}
                        <img src="assets\img\jeunePage\4-_SHEMA_PROMO_DES_METIERS.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>

                        {/* <button id="5" onClick={() => handleClick(5)} className="w-[40%] h-[200px] z-10 absolute top-[70%] left-[4%]"></button> */}
                        <img src="assets\img\jeunePage\5-_SHEMA_VIE_QUOTIDIENNE.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>

                        {/* <button id="6" onClick={() => handleClick(6)} className="w-[47%] h-[150px] z-10 absolute top-[25%] right-[5%]"></button> */}
                        <img src="assets\img\jeunePage\6-_SHEMA_INFORMATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full" alt="schéma retracant les objectifs de la mission locale"></img>
                    </div>
                    <img src="assets\img\jeunePage\page_jeunes_thematiques-mobile.jpg" className="object-cover md:hidden w-full"></img>
                </div>
            </section>
            <section className="text mt-8 min-h-[20vh]" >
            <h2 class="md:block font-title text-3xl md:text-5xl py-4 md:pt-4 pb-8 text-center">Nos Accompagnements</h2>
            <p class="text-md md:text-xl font-bold max-w-[95%] md:max-w-[85%] mx-auto">Selon ta situation, tu peux être accompagné de manière individuelle « classique » mais il est aussi possible de t’engager dans un accompagnement plus intensif.
                    Ton/ta conseiller/conseillère te donnera toutes les infos et t’orientera vers la solution la plus adaptée à ta situation !
                    Parmi l’éventail des possibilités, zoom sur quelques dispositifs :</p>
                <div class="md:flex mx-auto w-auto justify-center  mt-8 font-bold">

                    {/* <button onClick={() => handleOpen()} className="w-full sm:w-auto  justify-center flex items-center bg-main-pink px-4 lg:px-6 py-2 lg:py-4 text-main-white text-2xl lg:text-3xl mr-4">Voir nos Accompagnements <i ref={rotateArrow} className="fa-solid fa-arrow-right duration-[1s] -rotate-180 ease-out  transition-transform ml-2 mt-[1%]"></i> </button> */}
                    <ol ref={openList} className={`list-disc flex flex-col xl:w-[90%] md:flex-row justify-around gap-8 pl-8 bg-main-pink px-4 py-6 
                    md:py-2 text-main-white items-center text-2xl md:text-xl lg:text-3xl md:px-16 text-center relative after:duration-[1s] 
                    ease-out after:content-[""] after:w-[110%] after:bg-main-white
                    transition-all after:z-30 after:transition-all after:h-[105%] after:absolute after:-top-[0.8px] after:-left-0
                    ${ isOpen == true ? "block after:translate-x-full" : "hidden md:flex"}`}>
                        <li >
                            <button className={`${ isClicked == 1 ? "italic underline" : "" }`} onClick={() => handleClick(1)}>CEJ</button>
                        </li>
                        <li >
                            <button className={`${ isClicked == 2 ? "italic underline" : "" }`} onClick={() => handleClick(2)}>PACEA</button>
                        </li>
                        <li>
                            <button className={`${ isClicked == 3 ? "italic underline" : "" }`} onClick={() => handleClick(3)}>Parrainage</button>
                        </li>
                        <li>
                            <button className={`${ isClicked == 4 ? "italic underline" : "" }`} onClick={() => handleClick(4)}>Guide logement</button>
                        </li>
                    </ol>
                </div>
                <div class=" mt-8 mb-8 md:mb-16 max-w-full xl:max-w-[90%] mx-auto grid justify-items-center">
                    <AccordionContent id="1" isClicked={isClicked}>
                        <div className="grid items-center justify-items-center gap-4 mx-1 grid-cols-1 lg:grid-cols-2 md:mx-6 xl:gap-2 xl:w-11/12 xl:mx-auto">
                            <div className="w-full md:w-2/3 lg:w-full mx-auto text-center">
                                <h3 className="text-3xl md:text-4xl gap-2 mb-8">
                                    Le Contrat d’Engagement <br></br>Jeune <span className="font-">(CEJ)</span> :
                                </h3>
                                <p className="text-lg md:text-2xl "> Un accompagnement personnalisé avec un conseiller dédié, un programme intensif, une allocation possible.</p>
                                <a href="https://www.1jeune1solution.gouv.fr/contrat-engagement-jeune" target="_blank" className="text-2xl underline text-main-blue mb-8">En savoir plus</a>
                                <iframe src="https://www.youtube.com/embed/c2RQR84BrMk" className="h-50 md:h-64 aspect-video mt-8 mx-auto">

                                </iframe>
                            </div>
                            <img src="assets/img/jeunePage/CEJ.jpg" className="w-full md:w-[50%] sm:w-3/4 lg:w-full"></img>
                        </div>
                    </AccordionContent>
                    <AccordionContent id="2" isClicked={isClicked}>
                    <div className="grid items-center gap-2 grid-cols-1 lg:grid-cols-2 mx-6 xl:w-10/12 xl:mx-auto">
                            <div>
                                <h3 className="text-3xl md:text-4xl mb-8 text-center lg:text-left">
                                    Le PACEA<br></br> (Parcours contractualisé d'accompagnement vers l'emploi et l'autonomie) :
                                </h3>
                                <p className="text-lg md:text-2xl "> Le PACEA se déroule en différentes « Phases », l’accompagnement peut durer jusqu’à 24 mois d’affilé.<br></br>
                                C’est le conseiller qui détermine la durée et le nombre de phases d’accompagnement.<br></br> L’idée étant d’être en phase avec le jeune accompagné, <span class="italic">une allocation peut être versée.</span></p>
                                <a href="https://travail-emploi.gouv.fr/emploi-et-insertion/mesures-jeunes/pacea " target="_blank" className="text-2xl underline text-main-blue mb-8">En savoir plus</a>
                            </div>
                            <img src="assets/img/jeunePage/pacea.png" className="w-full sm:w-3/4 lg:w-full mx-auto"></img>
                        </div>
                    </AccordionContent>
                    <AccordionContent id="3" isClicked={isClicked}>
                        <h3 className="text-3xl md:text-4xl font-bold my-4 italic text-center">
                            Le parrainage :
                        </h3>
                        <div className="grid gap-8 items-center mx-6 xl:w-10/12 xl:mx-auto">
                           
                            <div>

                                <p className="text-lg md:text-2xl "> C’est un accompagnement bénévole et personnalisé d’une durée maximum de 6 mois,
                                réalisé par un parrain ou une marraine sur la base du partage de son expérience professionnelle et de son réseau.
                                <br></br>
                                <span class="font-bold">Cet accompagnement apporte à un(e) jeune parrainé(e), les conseils et le soutien dans ses démarches professionnelles.</span>
                                <br></br>
                                 La relation « parrain-marraine-jeune parrainé(e) » établit des passerelles entre le monde de l’entreprise et le jeune.
                                 Elle propose une démarche complémentaire aux actions des conseillers Missions Locales.
                                 <br></br>
                                 <span class="font-bold italic">Le parrainage vise à faciliter l’accès et le maintien dans l’emploi des jeunes de 16 à 25 ans.</span></p>
                            </div>
                            <iframe loading="lazy" src="https://www.youtube.com/embed/Cob8lspOv8g" className="w-full bg-black border-red border-2 h-auto aspect-video mt-8" >
                            </iframe>
                        </div>
                    </AccordionContent>
                    {/* <AccordionContent id="4" isClicked={isClicked}>
                    <swiper-container>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
                    </AccordionContent> */}
                </div>
            </section>
        <Contact></Contact>

        </main>
    )
}

export default EspaceJeune