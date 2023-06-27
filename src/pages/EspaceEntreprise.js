
import {useEffect, useState} from "react";
import Accordion from "../components/Accordion";
import AccordionContent from "../components/AccordionContent";
import UnderAccordion from "../components/UnderAccordion";
import UnderAccordionContent from "../components/UnderAccordionContent";
import Apprentissage from "../components/espaceEntreprise/Apprentissage";
import Pec from "../components/espaceEntreprise/Pec";
import ContratPro from "../components/espaceEntreprise/ContratPro";
import Cie from "../components/espaceEntreprise/Cie";
import PMSP from "../components/espaceEntreprise/PMSP";
import Parrainage from "../components/espaceEntreprise/Parrainage";

const EspaceEntreprise = () => {
    const [isClicked, setIsClicked] = useState("0");
    // const [isUnderClicked, setIsUnderClicked] = useState("0");
    // const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");



    return (
<section id="" className="pb-8">
    <h1 class="font-title text-4xl md:text-5xl py-8 md:pt-12 md:pb-8 xl:py-16 text-center">L'espace Entreprise / Partenaire</h1>

        <div className="grid grid-cols-1 gap-4 xl:gap-0 xl:grid-cols-2">
            <div className="w-[99%] sm:w-11/12 flex mt-8 flex-col gap-4 ml-auto">

                <Accordion title="Vous recrutez ou souhaitez faire connaître votre activité ?" id="1" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="1" isClicked={isClicked} height={200}>
                <div class="md:w-11/12 mx-auto">
                    <p className="text-lg">
                        Vous pouvez nous faire part de vos offres en nous les envoyant par mail (contact@mlsudardennes.fr), nous appeler au
                        <a href="tel:03 24 38 29 17" className="underline"><em> 03 24 38 29 17</em></a> ou la poster directement sur notre groupe <a href="https://www.facebook.com/groups/994160127762101/." class="text-main-blue underline">facebook JOB EMPLOI Rethel et alentours (08-51-02).</a>
                        <br></br> Il est aussi possible de vous accueillir dans nos locaux pour
                        une info/recrutement…vous pouvez aussi participer à nos forums thématiques ou nous proposer une visite de votre entreprise.
                    </p>
                </div>
                </AccordionContent>

                <Accordion title="PMSMP" id="2" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="2" isClicked={isClicked}>
                    <PMSP/>
                </AccordionContent>

                <Accordion title="Les périodes de stage" id="3" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="3" isClicked={isClicked}>
                    <Apprentissage/>
                    <ContratPro/>
                    <Pec/>
                    <Cie/>
                </AccordionContent>

                <Accordion title="Parrainage" id="4" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="4" isClicked={isClicked}>
                    <Parrainage/>
                </AccordionContent>


            </div>
            <img src="assets\img\homepage\pexels-jopwell-2422294.jpg" class="w-[80%] mx-auto"></img>
        </div>
        </section>
    );
}

export default EspaceEntreprise