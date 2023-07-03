import { useState } from "react";

import UnderAccordion from "../UnderAccordion";
import UnderAccordionContent from "../UnderAccordionContent";
import UnderAccordionContainer from "../UnderAccordionContainer";

const Apprentissage = () => {
    const [isUnderClicked, setIsUnderClicked] = useState("0");
    const [isUnderUnderClicked, setIsUnderUnderClicked] = useState("0");

    return (
        <section>
            <UnderAccordionContainer title="Contrat d'apprentissage" marginLeft={4}>

                <UnderAccordionContainer title="Qu'est ce que c'est ?" marginLeft={8}> 
                <div class="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md">
                    <div className="border-4 border-main-green p-4">
                        <h3 class="text-xl sm:text-3xl">C'est quoi ?</h3>
                        <p>L'apprentissage, c'est former un jeune à vos méthodes de travail,
                            dans le cadre de <strong>
                            la préparation d'un
                            diplôme d'État ou d'un titre à finalité professionnelle inscrit au RNCP.
                            </strong><br></br><br></br>
                            Recruter un apprenti présente de nombreux avantages pour une
                            entreprise comme celui de <strong>
                                 former un futur salarié, lui apprendre
                                un métier, l'intégrer à la vie et à la culture de l'entreprise.
                            </strong><br></br><br></br>
                            L'apprentissage repose sur le principe de l'alternance entre
                            <strong> enseignement théorique</strong> dans l'organisme de formation et <strong>
                                enseignement
                                du métie
                            </strong>r chez l'employeur. <strong><br></br><br></br>L'apprenti est un salarié à part entière, </strong>
                             son temps de travail est identique à celui des autres salariés de
                             l'entreprise incluant le temps de présence en centre de formation.<br></br><br></br>
                             L'apprenti est obligatoirement accompagné par un maître
                             d'apprentissage salarié de l'entreprise, justifiant d'une expérience
                              professionnelle et d'une qualification suffisantes. L'employeur
                              peut remplir cette fonction.
                        </p>
                    </div>
                    <div class="flex flex-wrap sm:flex-nowrap gap-4">
                        <div className="border-4 border-main-purple p-4">
                            <h3 class="text-xl sm:text-3xl">Quels publics ?</h3>
                            <ul className="list-disc ml-8">
                                <li> Les jeunes âgés de <strong>16 à 29 ans révolus</strong></li>
                                <li><strong>Certains publics peuvent rentrer en apprentissage au-delà de 29 ans : </strong>
                                les apprentis préparant un diplôme ou titre supérieur à celui obtenu, lorsqu'il y a eu rupture d'un précédent contrat pour des causes indépendantes de la volonté de rapprenti, les travailleurs handicapés, les personnes ayant un projet de création ou de reprise d'entreprise, les sportifs de haut niveau....</li>
                            </ul>
                        </div>
                        <div className="border-4 border-main-pink p-4">
                            <h3 class="text-xl sm:text-3xl">Quelle rémunération ?</h3>
                            <p> <strong>La rémunération du jeune varie entre 27 et 100% du SMIC en fonction de l'âge et de la progression dans le cycle de formation.</strong></p>
                        </div>
                    </div>
                    <div className="border-4 border-main-blue p-4">
                        <h3 class="text-xl sm:text-3xl">Quels employeurs?</h3>
                        <p>Toute entreprise du secteur privé, y compris les associations, peuvent embaucher un apprenti Le secteur public non industriel et commercial</p>
                    </div>
                    <div className="border-4 border-main-orange p-4">
                        <h3 class="text-xl sm:text-3xl">Quels type de contrat et quelle durée?</h3>
                        <ul className="list-disc ml-8">
                            <li> CDD de 6 mois à 3 ans (voire 4 ans dans certains cas)</li>
                            <li>ou CDI : le contrat débute alors par la période d'apprentissage d'une durée équivalente au cycle de la formation suivie. À l'issue de la période d'apprentissage, la relation contractuelle sera régie par les dispositions relatives au CDI de droit commun.</li>
                        </ul>
                    </div>
                    </div>
                </UnderAccordionContainer>
                
                <UnderAccordionContainer title="Les aides disponibles" marginLeft={8}> 

                    <div class="grid gap-4 md:w-11/12 [&>div>p]:text-sm [&>div>p]:md:text-md [&>div>ul]:text-sm [&>div>ul]:md:text-md [&>div>div>p]:text-sm [&>div>div>p]:md:text-md">
                        <div className="border-4 border-main-green p-4">
                            <h3 class="text-xl sm:text-3xl">Aide à l'embauche du 1er janvier au 31 décembre 2023</h3>
                            <ul className="list-disc ml-8">
                                <li><strong>6 000 € pour l'embauche d'un apprenti quel que soit son âge</strong> pour chaque contrat d'apprentissage conclu entre le 1er janvier 2023 et le 31 décembre 2023 préparant à un diplôme <strong>jusqu'au master (bac+5-niveau 7 du RNCP).</strong></li>
                                <p><strong>Cette aide</strong> sera versée :</p>
                                <li>aux entreprises de moins de 250 salariés sans condition</li>
                                <li>aux entreprises de plus 250 salariés à la condition qu'elles s'engagent à atteindre un seuil de contrats d'alternance ou de contrats favorisant l'insertion professionnelle dans leur effectif</li>
                                <li>aux associations</li>
                            </ul>
                            <p className="font-bold italic mt-4">Cette aide concerne la première année d'exécution du contrat et se substitue totalement à l'aide unique aux employeurs d'apprentis. Les contrats d'apprentissage du secteur public non industriel et commercial ne sont pas éligibles à l'aide (à titre d'exemple : collectivité territoriale, établissement public administratif...). Cette aide est cumulable avec l'aide à l'embauche d'un altemant en situation de handicap (aide Agefiph)</p>
                        </div>
                        <div className="border-4 border-main-blue p-4">
                            <h3 class="text-xl sm:text-3xl">Comment formaliser un contrat d'apprentissage?</h3>
                            <p>Le contrat d'apprentissage est conclu à l'aide d'un formulaire type (Cerfa) signé par l'employeur et l'apprenti 
                                (ou son représentant légal).<strong>
                                     Avant le début de l'exécution du contrat ou, au plus tard, dans les
                                    5 jours ouvrables qui suivent celui-ci, l'employeur transmet à son opérateur de compétences (OPCO)
                                    le contrat d'apprentissage accompagné de la convention de formation et le cas échéant de la convention
                                    d'aménagement de durée.
                                </strong> Les employeurs publics peuvent remplir et télétransmettre aux services administratifs leurs contrats d'apprentissage grâce à la plateforme digitale dédiée à l'apprentissage public développée par la DGEFP.</p>
                        </div>
                    </div>
                </UnderAccordionContainer>
            </UnderAccordionContainer>

        </section>
    )
}

export default Apprentissage