
import { useState } from "react";

import UnderAccordion from "../UnderAccordion";
import UnderAccordionContent from "../UnderAccordionContent";
import UnderAccordionContainer from "../UnderAccordionContainer";

const Parrainage = () => {
    const [isUnderClicked, setIsUnderClicked] = useState("0");
    const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");

    return (
        <section>
                <UnderAccordionContainer title="Qu'est ce que c'est">  

                <div class="grid gap-4 md:w-11/12 border-2 border-main-blue p-4 ">
                    <p class="text-lg sm:text-xl uppercase text-center italic font-bold">Chaque parcours est particulier en fonction des contextes, des personnes et des objectifs à atteindre. Il n'y a pas de "Recette" idéale en matière de parrainage.</p>
                    <p class="text-2xl text-center">Quel est le rôle <span className="text-main-orange font-bold">du parrain et de la marraine?</span></p>
                    <div className="border-4 border-main-green p-4">
                        <p class="text-xl strong font-bold italic">Par exemple c'est : </p>
                        <ul className="ml-4">
                            <li><strong>Apporter des informations</strong> sur les entreprises, les logiques et les contraintes des employeurs.</li>
                            <li><strong>Faire profiter </strong>de son bon sens, de ses valeurs.</li>
                            <li><strong>Aider à structurer</strong> les démarches de recherche d'emploi,</li>
                            <li><strong>Faire part</strong> des points à &méliorer</li>
                        </ul>
                    </div>
                    <p class="text-2xl text-center">Les principales missions <span className="text-main-orange font-bold">du parrain et de la marraine :</span></p>
                    <ul className="text-center space-y-4 text-lg font-bold">
                        <li><span className="text-main-purple">Sensibiliser le jeune</span> aux réalités du monde du travail</li>
                        <li><span className="text-main-pink">Partager sa connaissance</span> de l'entreprise et de son environnement</li>
                        <li><span className="text-main-blue">Accompagner le jeune</span> dans son projet professionel</li>
                        <li><span className="text-main-green">Mobiliser son réseau</span> professionel et personnel</li>                    
                        <li><span className="text-main-orange">Aider à rétablir</span> la confiance en soi</li>                    
                    </ul>
                </div>
            </UnderAccordionContainer>
            <UnderAccordionContainer title="Un engagement réciproque">  

                <div class="grid gap-4 md:w-11/12 mt-4 border-2 border-main-green p-4 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md">
                        <h3 class="text-3xl text-center">Le parrainage, <span className="text-main-orange">un engagement réciproque</span></h3>
                        <p><span className="text-main-purple text-lg font-bold">Les parrains et marraines ne sont pas seuls:</span> ils font parties intégrante du réseau des Missions Locales.</p>
                        <p><span className="text-main-pink text-lg font-bold">Ils peuvent bénéficier d'informations</span> sur les dispositifs d'accompagnement ds jeunes vers et dans l'emploi.</p>

                    <div className="border-4 border-main-blue p-4">
                        <h3 class="text-xl sm:text-3xl">Le conseiller Mission Locale</h3>
                        <ul className="list-disc ml-6">
                            <li>Identifie le jeune</li>
                            <li>Informe, communique sur le parrainage auprès des entreprises, des jeunes.</li>
                            <li>Accompagne la constitution et suit le binôme parrain-marraine/ jeune-parrainé</li>
                            <li>Relaie les informations auprès des parrains/marraines.</li>
                        </ul>
                    </div>
                    <div className="border-4 border-main-orange p-4">
                        <h3 class="text-xl sm:text-3xl">Le/La jeune parrainé(e)</h3>
                        <ul className="list-disc ml-6">
                            <li>S'engage librement dans la démarche parrainage</li>
                            <li>Se rend au rendez vous fixés</li>
                            <li>Met tout en oeuvre pour atteindre les objectifs fixés</li>
                            <li>Tient compte des conseils</li>
                            <li>Informe le conseiller et son parrain/marraine de ses démarches et de leurs résultats</li>
                        </ul>
                    </div>
                    <div className="border-4 border-main-purple p-4">
                        <h3 class="text-xl sm:text-3xl">Le parrain / La marraine</h3>
                        <ul className="list-disc ml-6">
                            <li>Est disponible pour des rencontres régulières avec le jeune.</li>
                            <li>Fait bénéficier de son expérience et de sa connaissance socio-économiques du territoire</li>
                        </ul>
                    </div>
                </div>
                </UnderAccordionContainer>
        </section>

    )
}

export default Parrainage;