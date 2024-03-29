import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SliderForum from "../components/homepage/SliderForum";
import Socials from "../components/homepage/Socials";
import Contact from "../components/Contact";
import BanniereSuperficie from "../components/homepage/BanniereSuperficie";
import { Helmet } from "react-helmet-async";

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
    //  const forums = [
    //     {
    //         id : 1,
    //         date : '2023-06-14',
    //         image : '/assets/img/homepage/affiche_2023_sanitaire_social_-ecrans_rvb.jpg',
    //         texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",
    //         lien : 'assets/img/homepage/affiche.jpg',
    //         screen : "assets/img/homepage/video1.png"
    //     },
    //     {
    //         id : 2,
    //         date : '2023-06-13',
    //         image : '/assets/img/homepage/affiche_NOV_2023_job_dating-ecrans.jpg',
    //         texte : "C’est la 11ème édition… De nombreux postes sont à pourvoir dans les agences de travail temporaire. Un job dating leur est consacré le mardi 21 novembre à Rethel. Agent de conditionnement, peintre, assistant administratif, chaudronnier, maçon, électricien, boucher, assistant commercial, préparateur de commandes, conducteur routier… autant d’offres à pourvoir via les Agences pour l’emploi qui seront présentes. Cette manifestation se déroulera de 9h30 à 12h30 à la salle l’Atmosphère, 2 boulevard 4eme Armée à Rethel.", 
    //         screen : 'assets/img/homepage/video2.png'
    //     }
    // ]; 
   
    const urlName = useParams();
    const [persons, setPersons] = useState([]);
    const [forums, setForums] = useState([]);
    
    // function fetchTeam() {
    //     axios.get('php/crudTeam.php').then(function(response) {
    //         setPersons(response.data);
    //     })
    // }   

    function fetchTeam() {
        // axios.post('http://localhost:8000/public/php/index.php', {
        axios.post('php/index.php', {
            action : 'ShowRandomUsers'
        }).then(function(response) {
            setPersons(response.data);
        })
    }   
    function fetchPost() {
        // axios.post('http://localhost:8000/public/php/index.php', {
        axios.post('php/index.php', {
            action: 'showAllPosts'
        }).then(function(response) {
            setForums(response.data);
        })
    }   

    useEffect(() => {
        appearAll();
        fetchTeam();
        fetchPost();
        window.scrollTo(0, 0);
      }, [urlName])
    //   console.log(forums);

    return (
      <main>
        <Helmet>
            <meta name="description" content="Bienvenue à la Mission Locale Sud Ardennes : votre partenaire pour construire votre avenir professionnel et 
            personnel dans les Ardennes. Découvrez nos services d'accompagnement, de formation et d'insertion pour les jeunes."/>
            <title>Mission Locale Sud Ardennes / Accueil</title>
            <link rel="canonical" href="/Accueil"/>
        </Helmet>
        <section id="redirect" aria-label="fond avec des bulles" className="bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed pt-8 sm:pt-16 pb-16 md:pb-24">
        <h1 className="text-4xl px-4 sm:text-5xl mb-8 md:mb-16 text-center font-title">Mission Locale <span className="italic">Sud Ardennes</span></h1>
        {/* Apparition des éléments au fur et à mesure grâce au script appearAll */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-0 lg:grid-cols-4 w-full md:w-11/12 lg:w-[99%] xl:w-11/12 mx-auto">
            <Link to="/EspaceMilo" className="flex justify-start flex-col">
                <div className={`redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle7.jpg')] bg-cover bg-opacity-50`} title="photo chaleureuse">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center">La mission locale Sud 08</h2>
            </Link>
            <Link to="/EspaceJeune" className="flex justify-start flex-col h-full">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle4Cut.jpg')] bg-center bg-cover bg-opacity-50 " title="photo de jeunes motivés">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center">Jeunes 16/25 ans</h2>
            </Link>
            <Link to="/EspaceEntreprise" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle8.jpg')] bg-center bg-cover bg-opacity-50 " title="photo de personnes en entreprise">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center">Entreprises/Partenaires</h2>
            </Link>
            <Link to="/OneForAll" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle3.jpg')] bg-cover bg-opacity-50 bg-left " title="photo d'un public varié">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center">Tous publics</h2>
            </Link>
        </div>
          </section>
        {/* Partie comportant les réseaux et un slider avec l'équipe */}
        <Socials persons={persons}>
        </Socials>
        <section className="bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed text-center">
            <SliderForum forums={forums}>
            </SliderForum>
            <a href="https://www.facebook.com/milosudardennes" className="bg-main-pink whitespace-nowrap p-4 rounded-full md:p-6 text-md sm:text-lg font-bold border md:text-2xl text-main-white hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink">Découvrez toutes nos publications</a>
            <BanniereSuperficie/>
            {/* <SliderPosts posts={posts}>
            </SliderPosts> */}
        </section>
        <Contact></Contact>

      </main>
      );

}

export default Home;