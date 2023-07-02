import { useState } from "react";

export default function Mentions () 
{
    const [error, setError] = useState();

    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-title text-center my-8">Voici les mentions légales </h1>
            <div className="grid grid-cols-2 max-w-[95%] mx-auto pt-8">
                <div className="ml-8 grid grid-cols-2 [&>div]:mb-8 my-auto [&>div>h3]:text-xl md:[&>div>h3]:text-3xl [&>div>h3]:italic [&>div>h3]:font-bold">
                    <div>
                        <h3>Éditeur</h3>
                        <p>Mission Locale Sud Ardennes</p>
                        <p>16 Rue Louise Weiss, 08300, Rethel</p>
                        <p>tél : 03.24.38.29.17</p>
                        <p>Directeur: DANLOUP Laurent</p>
                    </div>
                    <div>
                        <h3>Hébergeur</h3>
                        <p>OVH</p>
                        <p>16 Rue Louise Weiss, 08300, Rethel</p>
                        <p>tél : 03 24 38 29 17</p>
                        <p>Directeur: DANLOUP Laurent</p>
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
                </div>
                <img src="/assets/img/Mentions/mentions-legales-loupe.png" className="h-auto aspect-video"></img>
            </div>
        </div>
      );


      
}