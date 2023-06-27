import {useEffect, useState} from "react";

import UnderAccordionContainer from "../UnderAccordionContainer";

const Cie = () => {
    const [isUnderClicked, setIsUnderClicked] = useState("0");
    const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");

    return (
        <section>
                <UnderAccordionContainer title="Le CIE (Contrat Initiative Emploi)" >

                <UnderAccordionContainer title="Qu'est ce que c'est ?" marginLeft={8}> 
                    <div class="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md [&>div>ul]:text-sm [&>div>ul]:md:text-md">
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">C'est quoi ?</h3>
                            <p><strong>Le Contrat Initiative Emploi (CIE)</strong> est un contrat dans <strong>le secteur marchand</strong> qui facilite l'insertion professionnelle des personnes sans emploi rencontrant des difficultés sociales et professionnelles particulières d'accès à l'emploi. Le CIE comporte des actions d'accompagnement professionnel.
                            </p>
                        </div>

                        <div className="border-4 border-main-blue p-4">
                            <h3 class="text-xl sm:text-3xl">Quels publics?</h3>
                            <p><strong>Le CIE (jeunes)</strong>  est destiné aux personnes <strong>âgées de 16 à 25 révolus </strong>(ou jusqu'à 30 ans pour les bénéficiaires en situation de handicap) <strong> les plus éloignées du marché du travail. L'évaluation de l'éligibilité des publics repose sur un diagnostic global réalisé par le conseiller du service public de l'emploi.</strong></p>
                        </div>
                        <div className="border-4 border-main-orange p-4">
                            <h3 class="text-xl sm:text-3xl">Quels employeurs?</h3>
                            <p><strong>Les employeurs du secteur non marchand qui :</strong></p>
                            <ul className="list-disc ml-8 mb-4">
                                <li> Démontrent une capacité à accompagner au quotidien le salarié</li>
                                <li>Offrent des postes permettant de développer la maitrise de comportements professionnels et des compétences techniques qui répondent à des besoins du bassin d'emploi ou transférables à d'autres métiers qui recrutent;</li>
                                <li>S'engagent à faciliter l'accès à la formation;</li>
                                <li>Le cas échéant, ont une capacité à pérenniser le poste.</li>
                            </ul>
                            <p>L'employeur doit également désigner <strong>un tuteur, salarié qualifié et volontaire</strong> qui doit justifier d'une expérience professionnelle d'au moins 2 ans. Exceptionnellement, sur autorisation du prescripteur, l'employeur peut assurer lui-même le tutorat mais il ne peut pas suivre plus de 3 salariés en contrat emploi compétences.</p>
                        </div>
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">Pour quelles qualifications ?</h3>
                            <p> Le contrat de professionnalisation a pour but d'acquérir une qualification professionnelle reconnue : <br></br><strong>Diplôme ou titre professionnel enregistré dans le Répertoire national des certifications professionnelles (RNCP), Certificat de qualification professionnelle (CQP) de branche ou interbranche, Qualification reconnue dans les classifications d'une convention collective nationale.</strong>
                            </p>
                        </div>
                    </div>
                </UnderAccordionContainer>
                <UnderAccordionContainer title="Les aides financières" marginLeft={8}> 

                <div class="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md [&>div>ul]:text-sm [&>div>ul]:md:text-md">
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">Quel type de contrat et quelle durée ?</h3>
                            <p>Le CIE (jeunes) prend la forme d'un <strong>CDI ou d'un CDD d'une durée de 6 à 9 mois.</strong><br></br> La durée hebdomadaire de travail prévue est comprise entre 20 et 35 heures. La durée hebdomadaire de référence pour la prise en charge de l'aide à l'insertion professionnelle est <strong>de 20 heures</strong>.<br></br><br></br> La durée de la convention initiale, comprise entre 6 à 9 mois, est fixée en fonction des circonstances particulières liées, soit à la situation du bénéficiaire, soit aux caractéristiques de l'emploi et sur la base du diagnostic du prescripteur. Le CIE (jeunes) peut être renouvelé sous conditions.
                            </p>
                        </div>

                        <div className="border-4 border-main-blue p-4">
                            <h3 class="text-xl sm:text-3xl">Quel accompagnement?</h3>
                            <p>Le CIE (jeunes) fait l'objet d'un accompagnement en <strong>4 phases</strong></p>
                            <ul className="list-decimal ml-8 space-y-2 my-2 mb-4">
                                <li> Diagnostic du prescripteur</li>
                                <li>Entretien tripartite qui réunit le prescripteur, l'employeur et le futur salarié au moment de la signature de la demande d'aide. Il formalise les engagements et la déclinaison des compétences que le poste doit permettre d'acquérir</li>
                                <li>Suivi pendant la durée du contrat</li>
                                <li>Entretien de sortie d'un à trois mois avant la fin du contrat</li>
                            </ul>
                            <p><strong> A l'issue du CDD, aucune indemnité de fin de contrat n'est due.</strong><br></br><br></br> <strong>En CDI : </strong> dans ce cas, les règles de durée maximale portent sur la période d'action de professionnalisation, c'est-à-dire la 1ère phase du contrat qui s'effectue en alternance, à l'issue de laquelle le contrat de travail se poursuit dans le cadre d'un CDI de droit commun.</p>
                        </div>
                        <div className="border-4 border-main-orange p-4">
                            <h3 class="text-xl sm:text-3xl">Aide financière</h3>
                            <p>L'employeur bénéficie d'une aide à l'insertion professionnelle de la part de l'État, dont le taux est fixé par un arrêté du Préfet de Région. Dans le Grand Est, l'aide est fixée <strong>au taux unique de 47 % par référence au SMIC.</strong></p>
                        </div>

                    </div>
                </UnderAccordionContainer>
            </UnderAccordionContainer>
        </section>
    )
}

export default Cie;