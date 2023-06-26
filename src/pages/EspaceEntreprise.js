
import {useEffect, useState} from "react";
import Accordion from "../components/Accordion";
import AccordionContent from "../components/AccordionContent";
const EspaceEntreprise = () => {
    const [isClicked, setIsClicked] = useState("0");


    return (
<section id="" className="pb-8">
    <h1 class="font-title text-4xl md:text-5xl py-8 md:py-16 text-center">L'espace Entreprise</h1>

        <div className="grid grid-cols-2">
            <div className="w-10/12 flex mt-8 flex-col ml-auto">

                <Accordion title="Aide au recrutement" id="1" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="1" isClicked={isClicked}>
                    <ol className="list-disc [&>li]:ml-8 my-4">La Cellule de Recrutement vous propose un vivier de candidats et une équipe de professionnels de l’emploi pour vous accompagner dans toutes les étapes de votre recrutement :
                        <li className="mt-2">Recueillir les exigences et définir vos besoins </li>
                        <li>Établir vos fiches de poste</li>
                        <li>Promouvoir et animer vos offres d’emploi</li>
                        <li>Présélectionner les candidats et les coacher pour répondre à vos attentes </li>
                        <li>Proposer des portraits candidats correspondants au profil recherché</li>
                        <li>Suivre et accompagner la période d’essai</li>
                    </ol>
                </AccordionContent>

                <Accordion title="Parrainage" id="2" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="2" isClicked={isClicked}>
                    <p>C’est un accompagnement des jeunes par des professionnels bénévoles qui transmettent leur savoir et leurs conseils sur le monde du travail. Le lien entre parrains/ marraines et filleul(e) permet également de développer le réseau professionnel des jeunes accédant au marché du travail.</p>

                </AccordionContent>

                <Accordion title="Faites découvrir votre activité" id="3" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="3" isClicked={isClicked}>
                    <p>Vous souhaitez parler de votre métier, votre entreprise, organiser une visiter de vos locaux afin de faire découvrir votre secteur et promouvoir votre activité contactez-nous.</p>

                </AccordionContent>

                <Accordion title="PMSMP" id="4" setIsClicked={setIsClicked} isClicked={isClicked}/>
                <AccordionContent id="4" isClicked={isClicked}>
                    <p>La Période de Mise en Situation en Milieu Professionnel est une période d’immersion en entreprise pouvant aller jusqu’à 35h par semaine, non rémunérée et soumise au préalable à la rédaction d’une convention.</p>

                </AccordionContent>

            </div>
            <img src="assets\img\homepage\pexels-jopwell-2422294.jpg" class="w-[80%]"></img>
        </div>
        </section>
    );
}

export default EspaceEntreprise