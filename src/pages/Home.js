import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SliderPosts from "../components/homepage/SliderPosts";
import SliderForum from "../components/homepage/SliderForum";
import Socials from "../components/homepage/Socials";
import Contact from "../components/Contact";

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
         texte: 'Premier élément',
         image: 'https://picsum.photos/200/300?random=1'
       },
       {
         date: '2023-06-10',
         texte: 'Deuxième élément',
         image: 'https://picsum.photos/200/300?random=2'
       },
       {
         date: '2023-06-15',
         texte: 'Troisième élément',
         image: 'https://picsum.photos/200/300?random=3'
       }
     ]);
     const forums = [
        {
            id : 1,
            date : '2023-06-14',
            image : 'assets/img/homepage/affiche.jpg',
            texte : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tellus eget lectus lacinia accumsan. Sed ac venenatis ligula. In aliquet, ligula vel suscipit scelerisque, diam ex posuere tellus, a tristique magna mauris vitae erat. Sed id est vitae felis cursus commodo nec eu odio. Donec eu dapibus ex, non laoreet urna. Nullam suscipit convallis justo, a luctus urna laoreet at. Donec efficitur bibendum purus a tincidunt. Nullam sit amet velit in erat efficitur fringilla in ut nisl. Donec at neque vel ex vulputate semper et a diam. Nullam luctus metus non ante efficitur, ut convallis elit fringilla. Sed aliquet, nisl ut semper volutpat, nisl justo lobortis urna, sed cursus tellus dui sed nulla.',
            lien : 'public/assets/img/homepage/affiche.jpg'
        },
        {
            id : 2,
            date : '2023-06-13',
            image : 'assets/img/homepage/affiche2.jpg',
            texte : 'Sed quis ipsum eu mi fringilla rutrum. Integer ac magna ut lorem rhoncus feugiat. Nullam vel est a risus venenatis egestas. Sed eleifend leo in feugiat hendrerit. Suspendisse vitae erat eget libero egestas ullamcorper. Phasellus congue purus sit amet nisi ultrices fringilla. Donec faucibus sapien id eleifend rutrum. Pellentesque sodales elit ut erat fringilla, non varius urna laoreet. Phasellus convallis pulvinar risus ut facilisis. Proin congue lacus in nibh interdum, at sollicitudin lacus facilisis.',
            lien : 'public/assets/img/homepage/affiche2.jpg'
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-0 lg:grid-cols-4 w-full md:w-11/12 lg:w-[99%] xl:w-11/12 mx-auto">
            <Link to="/MissionLocale" className="flex justify-start flex-col">
                <div className={`redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle7.jpg')] bg-cover bg-opacity-50`} title="photo chaleureuse de l'équipe">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">La mission locale Sud 08</h2>
            </Link>
            <Link to="/EspaceJeune" className="flex justify-start flex-col h-full">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle4Cut.jpg')] bg-center bg-cover bg-opacity-50 " title="photo de jeunes motivés">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">Espace jeune</h2>
            </Link>
            <Link to="/EspaceEntreprise" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle8.jpg')] bg-center bg-cover bg-opacity-50 " title="photo de personnes en entreprise">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">Espace entreprise</h2>
            </Link>
            <Link to="/PourTous" className="flex justify-start mt-4 md:mt-0 flex-col">
                <div className="redirect-item hover:scale-110 transition-all opacity-0 mx-auto rounded-full w-[250px] h-[250px] border-2
                    bg-[url('/assets/img/homepage/photoBulle5.jpg')] bg-cover bg-opacity-50 " title="photo de personnes heureuse">
                </div>
                    <h2 className="opacity-0 uppercase mt-4 lg:mt-8 text-xl sm:text-2xl font-bold text-center blur-none">Pour tous</h2>
            </Link>
        </div>
          </section>
        <Contact></Contact>
        <Socials persons={persons}>

        </Socials>
        <section className="bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed">
            <SliderForum forums={forums}>
            </SliderForum>
            <SliderPosts posts={posts}>
            </SliderPosts>
        </section>

      </main>
      );

}

export default Home;