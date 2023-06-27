
import { useState } from "react";

import UnderAccordion from "../UnderAccordion";
import UnderAccordionContent from "../UnderAccordionContent";

const PMSP = () => {
    const [isUnderClicked, setIsUnderClicked] = useState("0");
    const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");

    return (
        <section>
            <UnderAccordion title="Qu'est ce que c'est ?" id="3" setIsClicked={setIsUnderClicked} isClicked={isUnderClicked}/>
            <UnderAccordionContent  id="3" isClicked={isUnderClicked}>
                <div class="grid gap-4 w-full md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md">
                    <div className="border-4 border-main-green p-4">
                        <h3 className="text-xl sm:text-3xl">C'est quoi ?</h3>
                        <p class="text-sm sm:text-md">La PMSMP est une <strong>immersion professionnelle au sein de votre entreprise.</strong> Vous accueillez pendant une durée limitée un jeune pour lui
                        permettre de découvrir vos métiers, votre secteur d'activité, valider son projet ou pour initer un projet de recrutement.</p>
                    </div>
                    <div class="flex-wrap sm:flex-nowrap flex gap-4">
                        <div className="border-4 border-main-purple p-4">
                            <h3 class="text-xl sm:text-3xl">Quels publics ?</h3>
                            <p class="text-sm sm:text-md"> <strong>Toute personne faisant l'objet d'un accompagnement professionnel personnalisé,</strong> sous réserve d'être orientée par le Service Public de l'Emploi (en l'occurence la Mission Locale).</p>
                        </div>
                        <div className="border-4 border-main-pink p-4">
                            <h3 class="text-xl sm:text-3xl">Quels employeurs ?</h3>
                            <p class="text-sm sm:text-md"> <strong>Toute personne moral disposant d'un SIRET </strong>peut accueillir un jeune en PMSMP si l'employeur déclare prendre les mesures nécessaires à l'organisation de cette immersion (entreprise, association, etc..).</p>
                        </div>
                    </div>
                    <div className="border-4 border-main-blue p-4">
                        <h3 className="text-xl sm:text-3xl">Pourquoi ?</h3>
                        <ul className="list-disc ml-4">
                            <li><strong>Faire connaître vos métiers: </strong>les immersions visent à promouvoir et valoriser les métiers et secteurs d'activité du territoire auprés des jeunes.</li>
                            <li><strong>Faire valider un projet professionnel: </strong> une immersion peut permettre à un jeune de conforter le choix d'un métier, grâce à une expérience en situation de travail auprès de professionnels confirmés.</li>
                            <li><strong>Initier un projet de recrutement</strong></li>
                        </ul>
                    </div>
                </div>
            </UnderAccordionContent>
            <UnderAccordion title="Les conditions de la PMSP" id="1" setIsClicked={setIsUnderClicked} isClicked={isUnderClicked}/>
            <UnderAccordionContent id="1" isClicked={isUnderClicked}>
                <div class="grid gap-4 md:w-11/12 mt-4 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md">
                    <div className="border-4 border-main-orange p-4">
                        <h3 className="text-xl sm:text-3xl">Quels conditions ?</h3>
                        <p className="text-sm sm:text-md">L'entreprise d'accueil doit désigner un <strong>tuteur responsable du suivi du stagiaire</strong>, qui
                            peut être le Chef d'entreprise ou l'un des salariés et remplir les obligations liées à
                            cette fonction.<br></br><br></br>
                            La structure d'accueil <strong>ne peut pas confier</strong> au jeune une <strong>tâche régulière</strong> correspondant à un poste de travail permanent, ni l'accueillir pour <strong>
                                faire face
                                à un surcroît d'activité
                            </strong> ou remplacer un salarié absent. La PMSMP ne peut se substituer à une période d'essai.
                            <strong>Le bénéficiaire de la PMSMP n'est pas salarié</strong> de la structure d'accueil. Vous n'avez
                            donc <strong>pas à lui verser de rémunération.</strong><br></br><br></br>
                            Le bénéficiaire effectue sa période d'immersion selon <strong>
                                les règles applicables aux
                                salariés de la structure d'accueil
                            </strong>, (respect du règlement intérieur, des règles
                            d'hygiène et de sécurité, règles relatives à la durée du travail).
                            Pendant la durée de l'immersion,<strong>
                                 le jeune conserve le statut dont il bénéficie
                                avant la PMSMP
                            </strong> (demandeur d'emploi, salarié...).</p>
                    </div>
                    <div className="border-4 border-main-blue p-4">
                        <h3 className="text-xl sm:text-3xl">Quels documents  ?</h3>
                        <p className="text-sm sm:text-md">La PMSMP fait l'objet d'une <strong>
                            convention normalisée conclue entre le jeune, la
                                structure d'accueil et la Mission Locale.
                        </strong>
                            La convention de mise en situation en milieu professionnel est matérialisée par un <strong>formulaire Cerfa </strong>
                            qui précisera notamment le cadre lié à cette immersion (dates, horaires, lieu, objectifs et tâches confiées).</p>
                    </div>
                    <div className="border-4 border-main-green p-4">
                        <h3 className="text-xl sm:text-3xl">Quelle couverture  ?</h3>
                        <p><strong>Le bénéficiaire d'une PMSMP est couvert</strong> pour les risques accident du travail et
                            maladie professionnelle.</p>
                    </div>
                </div>
                </UnderAccordionContent>
        </section>

    )
}

export default PMSP;