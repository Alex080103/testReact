import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

const OneForAll = () => {
    return (
        <section>
            <Helmet>
                <meta name="description" content="Peu importe votre situation, découvrez les dispositifs disponible pour booster votre parcours professionnel et votre épanouissement."/>
                <title>Mission Locale Sud Ardennes / Tous publics</title>
                <link rel="canonical" href="/OneForAll"/>
            </Helmet>
            <h1 className="font-title text-4xl md:text-5xl py-8 md:pt-12 md:pb-8 xl:py-16 text-center">Espace pour tous</h1>
            <div className="grid  lg:grid-cols-2 max-w-[95%] text-center lg:text-left sm:w-11/12 gap-4 mx-auto mb-8 overflow-x-hidden" >
                 <div className="flex flex-col text-lg md:text-xl mt-4 lg:text-xl">
                     <ul className="">
                         <span className="text-2xl font-bold text-center">Nos forums et recrutements sont ouverts à tous !!</span><br></br> 
                         <ul className="text-lg md:ml-4 italic mt-2"> Nous organisons chaque année :
                            <li>
                                - des jobs datings-recrutement avec de nombreuses agences d'interim 
                            </li>
                            <li>
                                - un forum emploi-métiers-formations, le plus gros événement de l'année qui regroupe plus de 80 partenaires 
                            </li>
                            <li>
                                - un forum spécialisé sur les carrières sanitaires et sociales regroupant aussi des organismes santé
                            </li>
                         </ul>

                         <br></br>  Suivez nos évènements sur notre <a className="text-main-blue underline" href="">page facebook </a>
                         et consultez notre partage d’offres d’emploi sur le  <a href="https://www.facebook.com/groups/994160127762101/." className="text-main-blue underline"> groupe JOB EMPLOI Rethel et alentours (08-51-02) sur Facebook.</a>
                     </ul><br></br>
                     <p>Vous pouvez également télécharger <strong>le guide de la reconversion</strong> pour en apprendre plus les différents dispositifs qui vout sont ouverts.</p>
                     <a href="download/guide_CEP_2023-MLSUDARDENNES-version_definitive (1).pdf" download="Guide_Reconversion_MLSUDARDENNES.pdf" className="font-bold bg-main-pink rounded-full text-main-white hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink mx-auto px-4 md:px-6 py-2 md:py-3 mt-4">Télécharger</a>
                 </div>
                 <img src="assets/img/homepage/pexels-fauxels-3184419(1).jpg" className="max-w-[90vw] md:max-w-[50vw] my-auto xl:max-w-[95%] mx-auto"></img>
            </div>
            <Contact></Contact>

        </section>
    )
}
export default OneForAll;