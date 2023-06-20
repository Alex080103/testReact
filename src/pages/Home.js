import { useEffect } from "react";
import { Link } from "react-router-dom";

function appearAll() {
    const redirect = document.getElementById("redirect");
    const bubbles = redirect.querySelectorAll(".redirect-item");
    const titles = redirect.querySelectorAll("h2");
  
    function showItem (bubble) { // Fait apparaitre un element avec un degrade
        bubble.classList.add("animate-appear");
    }
    
    bubbles.forEach(function(bubble, index) { // Fait apparaitre chaque bulle de l'accueil
        setTimeout(function() {
            showItem(bubble);
        }, index * 1000);
    })
    
    titles.forEach(function(title, index) { // Fait apparaitre chaque titre de l'accueil
        setTimeout(function() {
            showItem(title);
        }, index * 1000);
    })
  }


const Home =  () =>
{
    useEffect(() => {
        appearAll();
    
      })
    return (
      <main>
        <section id="redirect" aria-label="fond avec des bulles" className="bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed pt-8 sm:pt-16 pb-16 md:pb-24">
        <h1 className="text-4xl px-4 sm:text-5xl mb-8 md:mb-16 text-center font-title">Mission Locale <span className="italic">Sud Ardennes</span></h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-0 lg:grid-cols-4 w-full md:w-11/12 lg:w-[99%] xl:w-11/12 mx-auto">
            <Link to="/MissionLocale" className="flex justify-start flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('assets/img/homepage/photoBulle1.jpg')] bg-cover bg-opacity-50" title="photo chaleureuse de l'équipe">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">La mission locale Sud 08</h2>
            </Link>
            <Link to="/EspaceJeune" className="flex justify-start flex-col h-full">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('assets/img/homepage/photoBulle4.jpg')] bg-cover bg-opacity-50 " title="photo de jeunes motivés">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">Espace jeune</h2>
            </Link>
            <Link to="/EspaceEntreprise" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('assets/img/homepage/pexels-jopwell-2422294.jpg')] bg-cover bg-opacity-50 " title="photo de personnes en entreprise">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">Espace entreprise</h2>
            </Link>
            <Link to="/PourTous" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('assets/img/homepage/photoBulle3.jpg')] bg-cover bg-opacity-50 " title="photo de personnes heureuse">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">Pour tous</h2>
            </Link>
        </div>
          </section>
          <section id="socials" className="bg-[url('assets/img/homepage/pexels-fauxels-3184419(1).jpg')]  bg-fixed bg-cover" title="photo de personnes en groupe">
        <div className="h-auto md:h-[500px] w-full relative bg-gray-600 bg-opacity-80">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-row-1 items-center pt-[50px] text-main-white  md:py-12">
                <div className="flex ml-8 gap-8">
                    <img src="../.." className="hidden xl:block w-[250px]"></img>
                    <div className="w-[99%] lg:w-10/12 ml-auto flex flex-col gap-4 text-xl h-fit">
                        <h3 className="font-title text-4xl italic tracking-[0.1em]">Rejoignez la communauté</h3>
                        <div>
                            <i className="fa-brands fa-square-facebook mr-2 text-main-blue"></i>
                            <a href="#"> Sur Facebook</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-youtube mr-2 text-main-red"></i>
                            <a href="#"> Sur Youtube</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-instagram mr-2 text-main-purple"></i>
                            <a href="#"> Sur Instagram</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-square-facebook mr-2 text-main-blue"></i>
                            <a href="#"> Sur le groupe Facebook dédié</a>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 justify-self-center md:justify-self-auto pt-8 pb-12">
                    <div id="default-carousel" className="relative w-full" data-carousel="slide">
                        <div className="relative h-96 sm:h-80 overflow-hidden rounded-lg md:h-96">
                                <div className="hidden duration-700 ease-in-out flex items-center justify-center" data-carousel-item>
                                    <div className="max-w-[98%] sm:max-w-[80%] md:max-w-md bg-[url('assets/img/homepage/bullesPetit.jpg')] bg-contain border-2 border-main-pink  shadow-lg ${hidden} rounded-lg overflow-hidden my-2 sm:my-4">
                                        <div className="py-2 sm:py-4 px-6">
                                            <div className="grid grid-cols-2 items-center">
                                                <img className="w-32 mx-auto h-32 rounded-full object-cover object-center" 
                                                src="assets/img/homepage/pexels-kevin-bidwell-2380794.jpg" alt="membre de l'équipe">
                                                </img>
                                                <p className="text-2xl font-semibold text-gray-800 text-center italic">=$person </p>
                                            </div>
                                            <p className="py-2 sm:text-lg text-gray-700 text-center line-clamp-5">“Bienvenue dans notre mission locale chaleureuse et bienveillante ! En tant que conseiller dévoué, mon objectif est de t'accompagner."</p>
                                            <div className="flex justify-center w-full items-center">
                                                <a href="#" className="bg-main-pink py-2 px-4 w-[98%] sm:w-4/6  rounded-full text-center text-main-white my-2 border border-main-white hover:bg-main-white hover:text-main-pink hover:border hover:border-main-red">
                                                    Découvrir toute notre équipe
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 !bg-main-white !active:dark:bg-gray-800 rounded-full" aria-current="true" aria-label="Slide <?= $i ?>" data-carousel-slide-to="0"></button>

        
                        </div>
                         Slider controls 
                        <button type="button" className="absolute top-0 -left-8 z-30 flex items-center  justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-main-pink border-2 sm:w-10 sm:h-10 bg-main-white group-hover:bg-white  group-focus:ring-4 group-focus:ring-main-pink  group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-800 sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 -right-8 z-30 flex items-center  justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-main-pink border-2 sm:w-10 sm:h-10 bg-main-white group-hover:bg-white  group-focus:ring-4 group-focus:ring-main-pink  group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-800 sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
          </section>
      </main>
      );

}

export default Home;