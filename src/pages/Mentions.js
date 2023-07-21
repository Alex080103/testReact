import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Mentions () 
{
    const [error, setError] = useState();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Helmet>
                <meta name="description" content="Voici les mentions légales de la Mission Locale Sud 08"/>
                <title>Mission Locale Sud Ardennes / Mentions légales</title>
                <link rel="canonical" href="/Mentions"/>
            </Helmet>
            <h1 className="text-3xl md:text-5xl font-title text-center mt-8 md:my-8">Mentions légales </h1>
            <div className="grid xl:grid-cols-2 max-w-[95%] mx-auto pt-8">
                <div className="ml-8 grid md:grid-cols-2 [&>div]:mb-8 my-auto [&>div>h3]:text-xl md:[&>div>h3]:text-3xl [&>div>h3]:italic [&>div>h3]:font-bold">
                    <div>
                        <h3>Éditeur</h3>
                        <p>Mission Locale Sud Ardennes</p>
                        <p>16 Rue Louise Weiss, 08300, Rethel</p>
                        <p>tél : 03.24.38.29.17</p>
                        <p>Directeur: DANLOUP Laurent</p>
                    </div>
                    <div>
                        <h3>Hébergeur</h3>
                        <p>HOSTiNGER</p>
                        <p>INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                        <a href="https://www.hostinger.fr/contact" className="text-main-blue underline italic">https://www.hostinger.fr/contact</a>
                    </div>
                    <div>
                        <h3>Conception</h3>
                        <p>DERRIERE Alexandre</p>
                        <p>derriere.alexandre0103@gmail.com</p>
                        <p>tél : 06.07.38.30.28</p>
                    </div>
                    <div>
                        <h3>Développement</h3>
                        <p>DERRIERE Alexandre</p>
                        <p>derriere.alexandre0103@gmail.com</p>
                        <p>tél : 06.07.38.30.28</p>
                    </div>
                    <div>
                        <h3>Crédit Photos</h3>
                        <p>Hubert <em>LAPINTE</em></p>
                        <p>Christine <em>BINET</em></p>
                        <p><a href="https://fr.freepik.com/" className="text-main-blue underline italic">Freepik</a></p>
                    </div>
                </div>
                <img src="/assets/img/Mentions/mentions-legales-loupe.png" className="h-auto aspect-video pb-8 max-h-[60vh] mx-auto" alt="photo avec une loupe et une inscription 'mentions légales' "></img>
            </div>
        </div>
      );


      
}