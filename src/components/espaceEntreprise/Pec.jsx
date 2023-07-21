import {useEffect, useState} from "react";

import UnderAccordion from "../UnderAccordion";
import UnderAccordionContent from "../UnderAccordionContent";
import UnderAccordionContainer from "../UnderAccordionContainer";

const Pec = () => {
    const [isUnderClicked, setIsUnderClicked] = useState("0");
    const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");

    return (
        <section>
            <UnderAccordionContainer title="Le PEC (Parcours Emploi Compétences)"  marginLeft={4}>  
                <UnderAccordionContainer title="Qu'est ce que c'est ?" marginLeft={8}>  

                    <div className="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md [&>div>ul]:text-sm [&>div>ul]:md:text-md">
                        <div className="border-4 border-main-green p-4">
                            <h3 className="text-xl sm:text-3xl">C'est quoi ?</h3>
                            <p><strong>Le PEC est un contrat dans le secteur non marchand</strong> qui facilite l'insertion professionnelle des personnes sans emploi rencontrant des difficultés sociales et professionnelles particulières d'accès à l'emploi.<br></br><br></br> MAJ mars 2023 La mise en œuvre d'un PEC repose sur le triptyque <strong>emploi-formation-accompagnement:</strong> un emploi permettant de développer des compétences transférables, un accès facilité à la formation et un accompagnement tout au long du parcours.
                            </p>
                        </div>

                        <div className="border-4 border-main-blue p-4">
                            <h3 className="text-xl sm:text-3xl">Quels publics?</h3>
                            <p className="font-bold">Les PEC sont destinés aux personnes les plus éloignées du marché du travail. L'orientation vers un parcours emploi compétence repose avant tout sur le diagnostic réalisé par le conseiller du service public de l'emploi.</p>
                        </div>
                        <div className="border-4 border-main-orange p-4">
                            <h3 className="text-xl sm:text-3xl">Quels employeurs?</h3>
                            <p><strong>Les employeurs du secteur non marchand qui :</strong></p>
                            <ul className="list-disc ml-8">
                                <li> Démontrent une capacité à accompagner au quotidien le salarié</li>
                                <li>Offrent des postes permettant de développer la maitrise de comportements professionnels et des compétences techniques qui répondent à des besoins du bassin d'emploi ou transférables à d'autres métiers qui recrutent;</li>
                                <li>S'engagent à faciliter l'accès à la formation;</li>
                                <li>Le cas échéant, ont une capacité à pérenniser le poste.</li>
                            </ul>
                            <br></br>
                            <p>L'employeur doit également désigner <strong>un tuteur, salarié qualifié et volontaire</strong> qui doit justifier d'une expérience professionnelle d'au moins 2 ans. Exceptionnellement, sur autorisation du prescripteur, l'employeur peut assurer lui-même le tutorat mais il ne peut pas suivre plus de 3 salariés en contrat emploi compétences.</p>
                        </div>
                        <div className="border-4 border-main-green p-4">
                            <h3 className="text-xl sm:text-3xl">Pour quelles qualifications ?</h3>
                            <p> Le contrat de professionnalisation a pour but d'acquérir une qualification professionnelle reconnue : Diplôme ou titre professionnel enregistré dans le Répertoire national des certifications professionnelles (RNCP), Certificat de qualification professionnelle (CQP) de branche ou interbranche, Qualification reconnue dans les classifications d'une convention collective nationale.
                            </p>
                        </div>
                    </div>
                </UnderAccordionContainer>
                <UnderAccordionContainer title="Informations complémentaires" marginLeft={8}>  

                <div className="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md [&>div>ul]:text-sm [&>div>ul]:md:text-md">
                        <div className="border-4 border-main-green p-4">
                            <h3 className="text-xl sm:text-3xl">Quel type de contrat et quelle durée ?</h3>
                            <p>Le PEC prend la forme d'un <strong>CDI ou d'un CDD d'une durée de 9 mois</strong> (voire jusqu'à 12 mois à titre exceptionnel).<br></br><br></br>
                             <strong>La durée de la convention d'aide initiale</strong> est comprise entre 9 à 12 mois et fixée en fonction des circonstances 
                             particulières liées, soit à la situation du bénéficiaire, soit aux caractéristiques de l'emploi et sur la base du diagnostic du 
                             prescripteur.<br></br><br></br><strong>La durée hebdomadaire de référence pour la prise en charge de l'aide est de 26 heures maximum. </strong><br></br>
                             Le PEC peut être renouvelé sous conditions.
                            </p>
                        </div>

                        <div className="border-4 border-main-blue p-4">
                            <h3 className="text-xl sm:text-3xl">Quel accompagnement?</h3>
                            <p>Le CIE (jeunes) fait l'objet d'un accompagnement en <strong>4 phases :</strong></p>
                            <ul className="list-decimal ml-8 space-y-2 my-4">
                                <li> Diagnostic du prescripteur</li>
                                <li>Entretien tripartite qui réunit le prescripteur, l'employeur et le futur salarié au moment de la signature de la demande d'aide. Il formalise les engagements et la déclinaison des compétences que le poste doit permettre d'acquérir</li>
                                <li>Suivi pendant la durée du contrat</li>
                                <li>Entretien de sortie d'un à trois mois avant la fin du contrat</li>
                            </ul>
                            <p><strong> A l'issue du CDD, aucune indemnité de fin de contrat n'est due.</strong><br></br> <strong>En CDI :</strong> dans ce cas, les règles de durée maximale portent sur la période d'action de professionnalisation, c'est-à-dire la 1ère phase du contrat qui s'effectue en alternance, à l'issue de laquelle le contrat de travail se poursuit dans le cadre d'un CDI de droit commun.</p>
                        </div>
                        <div className="border-4 border-main-orange p-4">
                            <h3 className="text-xl sm:text-3xl">Aide financière</h3>
                            <p>L'employeur bénéficie d'une aide à l'insertion professionnelle de la part de l'État, dont le taux est fixé par un
                                 arrêté du Préfet de Région. <br></br><br></br><strong>Le taux de prise en charge des PEC est de 30% du SMIC horaire brut. </strong><br></br><br></br>
                                 Pour les PEC conclus avec des publics prioritaires (travailleurs handicapés, personnes résidant en QPV ou ZRR, demandeurs d'emploi de longue durée etc.), le taux de prise en charge est de 60% du SMIC horaire brut.<br></br><br></br> Pour les PEC conclus dans le cadre des Conventions Annuelles d'Objectifs et de Moyens (CAOM), le taux de prise en charge est de 60 % du SMIC horaire brut ou celui de la CAOM s'il est plus favorable.</p>
                        </div>

                    </div>
                </UnderAccordionContainer>
            </UnderAccordionContainer>
        </section>
    )
}

export default Pec;