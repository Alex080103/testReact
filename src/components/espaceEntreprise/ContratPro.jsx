import {useEffect, useState} from "react";

import UnderAccordion from "../UnderAccordion";
import UnderAccordionContent from "../UnderAccordionContent";
import UnderAccordionContainer from "../UnderAccordionContainer";

const ContratPro = () => {
    const [isUnderClicked, setIsUnderClicked] = useState("0");
    const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");

    return (
        <section>
                <UnderAccordionContainer title="Contrat de Professionnalisation">

                <UnderAccordionContainer title="Qu'est ce que c'est" marginLeft={8}>  

                    <div class="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md [&>div>ul]:text-sm [&>div>ul]:md:text-md">
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">C'est quoi ?</h3>
                            <p>Le contrat de professionnalisation est un contrat de travail en alternance qui permet l'acquisition dans
                            le cadre de la formation continue 
                            <strong> d'une qualification professionnelle reconnue par l'État et/ou la branche professionnelle. </strong> <br></br><br></br>
                            Le temps de travail de l'apprenti <strong>est identique à celui des autres salariés.</strong> Le temps de formation est inclus dans le 
                            temps de travail.<br></br><br></br> Les enseignements généraux, professionnels et technologiques sont dispensés par un organisme de formation, ou par 
                            l'entreprise elle même si elle dispose d'un service de formation interne doté de moyens distincts de ceux des services de production. <br></br><br></br>
                            <strong>L'employeur doit obligatoirement désigner un tuteur</strong> pour accompagner le salarié en contrat de professionnalisation. Celui-ci doit être un salarié volontaire et qualifié justifiant d'une expérience professionnelle d'au moins 2 ans en rapport avec la qualification visée. L'employeur peut être lui-même tuteur sil remplit les conditions de qualification et d'expérience. Il ne peut pas assurer simultanément le tutorat à l'égard de plus de 2 salariés.
                            </p>
                        </div>

                        <div className="border-4 border-main-blue p-4">
                            <h3 class="text-xl sm:text-3xl">Quels employeurs?</h3>
                            <ul className="list-disc ml-8">
                                <li> <strong>Tout employeur de droit privé</strong> assujetti au financement de la formation professionnelle
                                    continue, à l'exception de l'État, des collectivités territoriales et de leurs établissements publics à caractère administratif</li>
                                <li><strong>Les établissements publics industriels et commerciaux </strong>assujettis au financement de la formation professionnelle continue et les entreprises d'armement maritime</li>
                            </ul>
                        </div>
                        <div className="border-4 border-main-orange p-4">
                            <h3 class="text-xl sm:text-3xl">Quels publics?</h3>
                            <ul className="list-disc ml-8">
                                <li> <strong>Jeunes âgés de 16 à 25 ans révolus</strong> afin de compléter leur formation initiale</li>
                                <li><strong>Demandeurs d'emploi</strong> de 26 ans et plus</li>
                                <li>Bénéficiaires du <strong>RSA</strong>, de l'allocation de solidarité spécifique <strong>(ASS)</strong> ou de l'allocation aux adultes handicapés <strong>(AAH)</strong></li>
                                <li>Personnes ayant bénéficié d'un contrat aidé (CUI)</li>
                            </ul>
                        </div>
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">Pour quelles qualifications ?</h3>
                            <p> Le contrat de professionnalisation a pour but d'acquérir une <strong>qualification professionnelle</strong> reconnue : Diplôme ou titre professionnel enregistré dans le Répertoire national des certifications professionnelles (RNCP), Certificat de qualification professionnelle (CQP) de branche ou interbranche, Qualification reconnue dans les classifications d'une convention collective nationale.
                            </p>
                        </div>
                    </div>
                </UnderAccordionContainer>
                <UnderAccordionContainer title="Les aides financières" marginLeft={8}>  

                    <div class="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md [&>div>ul]:text-sm [&>div>ul]:md:text-md">
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">La rémunération</h3>
                            <p>La rémunération varie en fonction de l'âge et du niveau de qualification de la personne recrutée. Elle est comprise entre<strong> 55 % et 100 % du SMIC</strong> (ou 85 % du salaire minimum conventionnel de branche si plus favorable).
                            </p>
                        </div>

                        <div className="border-4 border-main-blue p-4">
                            <h3 class="text-xl sm:text-3xl">Quel type de contrat et quelle durée?</h3>
                            <p><strong>En CDD de 6 à 12 mois.</strong> Cette durée peut être portée à 36 mois pour :</p>
                            <ul className="list-disc ml-8">
                                <li> Les jeunes âgés de 16 à 25 ans révolus qui n'ont pas validé un second cycle de l'enseignement secondaire et qui ne sont pas titulaires d'un diplôme de l'enseignement technologique ou professionnel</li>
                                <li>Les jeunes de 16 à 25 ans révolus et les demandeurs d'emploi de 26 ans et plus, dès lors qu'ils sont inscrits depuis plus d'un an chez Pôle emploi</li>
                                <li>Les bénéficiaires du RSA, de l'ASS, de l'AAH ou sortant d'un contrat unique d'insertion</li>
                            </ul>
                            <p> <strong>A l'issue du CDD, aucune indemnité de fin de contrat n'est due. <br></br><br></br> En CDI:</strong> dans ce cas, les règles de durée maximale portent sur la période d'action de professionnalisation, c'est-à-dire la 1ère phase du contrat qui s'effectue en alternance, à l'issue de laquelle le contrat de travail se poursuit dans le cadre d'un CDI de droit commun.</p>
                        </div>
                        <div className="border-4 border-main-orange p-4">
                            <h3 class="text-xl sm:text-3xl">Aide à l'embauche du 1er janvier au 31 décembre 2023:</h3>
                            <ul className="list-disc ml-8">
                                <li> <strong>6 000 €</strong> pour l'embauche d'un jeune de moins de 30 ans pour la 1ère année du contrat préparant à un diplôme jusqu'au master (bac +5 - niveau 7 du RNCP), un CQP ou un contrat de professionnalisation expérimental.</li>
                            </ul>
                            <p>Cette aide est attribuée <strong>sans condition pour les entreprises de moins de 250 salariés</strong> et <strong>sous condition pour les entreprises de plus de 250 salariés</strong> d'atteindre un seuil défini de contrats d'alternance ou de contrats favorisant l'insertion professionnelle dans leurs effectifs.</p>
                        </div>
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">Comment formaliser un contrat de professionnalisation?</h3>
                            <p>Le contrat est conclu à l'aide d'un <strong>formulaire type (Cerfa) signé par l'employeur et le salarié.</strong> Avant le début de l'exécution du contrat ou, au plus tard, dans les 5 jours ouvrables qui suivent celui-ci, l'employeur transmet à son opérateur de compétences (OPCO) le contrat accompagné de la convention de formation.
                            </p>
                        </div>
                    </div>
                </UnderAccordionContainer>
            </UnderAccordionContainer>
        </section>
    )
}

export default ContratPro;