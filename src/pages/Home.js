import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SliderPosts from "../components/homepage/SliderPosts";
import SliderForum from "../components/homepage/SliderForum";
import Socials from "../components/homepage/Socials";
import Contact from "../components/Contact";
import BanniereSuperficie from "../components/homepage/BanniereSuperficie";

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

        const [posts, setPosts ]= useState([
       {
         date: '2023-06-01',
         texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",

         image: 'https://picsum.photos/325/360?random=1'
       },
       {
         date: '2023-06-10',
         texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",

         image: 'https://picsum.photos/325/360?random=2'

       },
       {
         date: '2023-06-15',
         texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",
         image: 'https://picsum.photos/325/360?random=3'

       },
       {
        date: '2023-06-15',
        texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",
        image: 'https://picsum.photos/325/360?random=4'

      },        
      {
        date: '2023-06-15',
        texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",
        image: 'https://picsum.photos/325/360?random=5'

      },
      {
        date: '2023-06-15',
        texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",
        image: 'https://picsum.photos/325/360?random=6'

      }
     ]);
     const forums = [
        {
            id : 1,
            date : '2023-06-14',
            image : '/assets/img/homepage/affiche_2023_sanitaire_social_-ecrans_rvb.jpg',
            texte : "Que vous soyez demandeur d’emploi, étudiant, jeune diplômé, collégien, lycéen, salarié, venez découvrir notre forum SANITAIRE ET SOCIAL le jeudi 21 septembre à la salle l’Atmosphère de Rethel. Plus de  60 exposants et des ateliers ! Cette 5ème édition réunira plus de  60 entreprises, centres de formation, structures de santé et d’insertion de la filière sanitaire et sociale : service à la personne, médico-social, petite enfance, paramédical, sport et animation, social et santé, entretien… Vous trouverez :",
            lien : 'assets/img/homepage/affiche.jpg',
            screen : "assets/img/homepage/video1.png"
        },
        {
            id : 2,
            date : '2023-06-13',
            image : '/assets/img/homepage/affiche_NOV_2023_job_dating-ecrans.jpg',
            texte : "C’est la 11ème édition… De nombreux postes sont à pourvoir dans les agences de travail temporaire. Un job dating leur est consacré le mardi 21 novembre à Rethel. Agent de conditionnement, peintre, assistant administratif, chaudronnier, maçon, électricien, boucher, assistant commercial, préparateur de commandes, conducteur routier… autant d’offres à pourvoir via les Agences pour l’emploi qui seront présentes. Cette manifestation se déroulera de 9h30 à 12h30 à la salle l’Atmosphère, 2 boulevard 4eme Armée à Rethel.", 
            screen : 'assets/img/homepage/video2.png'
        }
    ]; 
   
    const urlName = useParams();
    const [persons, setPersons] = useState([]);
    
    function fetchTeam() {
        axios.get('http://localhost:8000/public/php/crudTeam.php').then(function(response) {
            setPersons(response.data);
        })
    }   
    useEffect(() => {
        appearAll();
        fetchTeam();
      }, [urlName])
    return (
      <main>
        <section id="redirect" aria-label="fond avec des bulles" className="bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed pt-8 sm:pt-16 pb-16 md:pb-24">
        <h1 className="text-4xl px-4 sm:text-5xl mb-8 md:mb-16 text-center font-title">Mission Locale <span className="italic">Sud Ardennes</span></h1>
        {/* Apparition des éléments au fur et à mesure grâce au script appearAll */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-0 lg:grid-cols-4 w-full md:w-11/12 lg:w-[99%] xl:w-11/12 mx-auto">
            <Link to="/EspaceMilo" className="flex justify-start flex-col">
                <div className={`redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle7.jpg')] bg-cover bg-opacity-50`} title="photo chaleureuse de l'équipe">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center">La mission locale Sud 08</h2>
            </Link>
            <Link to="/EspaceJeune" className="flex justify-start flex-col h-full">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle4Cut.jpg')] bg-center bg-cover bg-opacity-50 " title="photo de jeunes motivés">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center">Espace jeune</h2>
            </Link>
            <Link to="/EspaceEntreprise" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle8.jpg')] bg-center bg-cover bg-opacity-50 " title="photo de personnes en entreprise">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center">Espace entreprise</h2>
            </Link>
            <Link to="/OneForAll" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle3.jpg')] bg-cover bg-opacity-50 bg-bottom bg-left " title="photo de personnes heureuse">
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
            <a href="https://www.facebook.com/milosudardennes" className="bg-main-pink whitespace-nowrap p-4 md:p-6 text-md sm:text-lg font-bold md:text-2xl text-main-white">Découvrez toutes nos publications</a>
            <BanniereSuperficie/>
            {/* <SliderPosts posts={posts}>
            </SliderPosts> */}
        </section>
        <Contact></Contact>

      </main>
      );

}

export default Home;