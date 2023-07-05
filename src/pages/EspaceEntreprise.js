
import {useEffect, useState} from "react";
import Apprentissage from "../components/espaceEntreprise/Apprentissage";
import Pec from "../components/espaceEntreprise/Pec";
import ContratPro from "../components/espaceEntreprise/ContratPro";
import Cie from "../components/espaceEntreprise/Cie";
import PMSP from "../components/espaceEntreprise/PMSP";
import Parrainage from "../components/espaceEntreprise/Parrainage";
import UnderAccordionContainer from "../components/UnderAccordionContainer";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

const EspaceEntreprise = () => {
    const [isClicked, setIsClicked] = useState("0");
    // const [isUnderClicked, setIsUnderClicked] = useState("0");
    // const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");



    return (
<section id="" className="pb-8 min-h-[80vh] ">
    <Helmet>
        <meta name="description" content="Découvrez nos services sur mesure dédiés aux entreprises : recrutement, formation, conseils et soutien pour favoriser votre croissance et contribuer au développement économique de notre région. Ensemble, construisons un avenir prometteur pour votre entreprise "/>
        <title>Entreprises / Partenaires</title>
        <link rel="canonical" href="/EspaceEntreprise"/>
    </Helmet>
    <h1 className="font-title text-4xl md:text-5xl py-8 md:pt-12 md:pb-8 xl:py-16 text-center">L'espace Entreprises / Partenaires</h1>

        <div className="grid grid-cols-1 gap-4 xl:gap-0 xl:grid-cols-2">
            <div className="w-[99%] sm:w-11/12 flex mt-8 flex-col gap-4 ml-auto ">

                <UnderAccordionContainer title={"Vous recrutez ou souhaitez faire connaître votre activité ?"}>
                    <div className="md:w-11/12 mx-auto ml-4 md:ml-16">
                        <p className="text-lg">
                            Vous pouvez nous faire part de vos offres en nous les envoyant par mail (contact@mlsudardennes.fr), nous appeler au
                            <a href="tel:03 24 38 29 17" className="underline"><em> 03 24 38 29 17</em></a> ou la poster directement sur notre groupe <a href="https://www.facebook.com/groups/994160127762101/." className="text-main-blue underline">facebook JOB EMPLOI Rethel et alentours (08-51-02).</a>
                            <br></br> Il est aussi possible de vous accueillir dans nos locaux pour
                            une info/recrutement…vous pouvez aussi participer à nos forums thématiques ou nous proposer une visite de votre entreprise.
                        </p>
                    </div>
                </UnderAccordionContainer>



                <UnderAccordionContainer title={"Les périodes de stage"}>
                    <PMSP/>
                </UnderAccordionContainer>
                 
                <UnderAccordionContainer title={"Les aides à l'embauche des jeunes"}>
                    <Apprentissage/>
                    <ContratPro/>
                    <Pec/>
                    <Cie/>
                </UnderAccordionContainer>

                <UnderAccordionContainer title={"Parrainage"}>

                    <Parrainage/>
                </UnderAccordionContainer>


            </div>
            <img src="assets\img\homepage\pexels-jopwell-2422294.jpg" className="w-[80%] mx-auto"></img>
        </div>
        <Contact></Contact>
    </section>
    );
}

export default EspaceEntreprise