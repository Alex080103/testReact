import { useState } from "react";
import Tab from "../components/Tab.jsx";
import TabContent from "../components/TabContent.jsx";
import Team from "../components/espaceMilo/Team.jsx";
import SocialsContent from "../components/espaceMilo/SocialsContent.jsx";


const EspaceMilo = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <main>
            <section id="visual">
                <h1 className="font-title text-4xl md:text-5xl py-8 md:py-16 text-center">La Mission Locale Sud Ardennes</h1>
                <div className="grid md:grid-cols-1 lg:grid-cols-[40%_60%] items-center xl:grid-cols-[57%_40%] gap-8 lg:mb-16">
                    <picture>
                        <source media="(max-width: 500px)" srcSet="assets/img/miloPage/Plan_de_travail_2.png"></source>
                        <source media="(min-width: 500px)" srcSet="assets/img/miloPage/Plan_de_travail_1.png"></source>

                        <img src="assets/img/miloPage/Plan_de_travail_2.png"
                            className="md:aspect-video h-full md:w-full xl:w-[57vw] my-auto mx-auto"
                            alt ="visuel décrivant les missions de la mission locale (emploi, mobilité, formation, santé, 
                            Orientation, Logement, Formations, Promotions des métier), et le public visé (Jeunes 16/25 ans vor tout 
                            puvlic sur certaines aides)"></img>
                    </picture>
                    <div className="px-4 pb-2 mx-auto w-[90%] lg:w-auto -order-1 lg:order-1">
                        <h2 className="font-title text-3xl md:text-4xl py-6">La Mission Locale, c'est quoi ?</h2>
                            <p>
                                Une mission locale est un espace pour les jeunes de 16 à 25 ans. Chaque jeune accueilli est aidé au niveau de l’emploi, de la formation, du logement et de la santé.
                                <br></br><br></br><span className="italic font-bold">Les Missions Locales, <span className="text-main-orange">c’est </span>
                                 <span className="text-main-pink">pour</span> <span className="text-main-green"> tout</span> <span className="text-main-blue">le monde !</span></span><br></br><br></br>
                                Peu importe tes diplômes, peu importe ton genre, peu importe tes croyances, peu importe ta situation. La seule condition pour être accompagné par une Mission Locale, c’est d’avoir entre 16 et 25 ans.
                                <br></br><br></br><span className="font-bold">Les Missions Locales, <span className="text-main-green">ce n’est pas que pour l’emploi !</span></span><br></br><br></br>
                                <span className="italic">On qualifie souvent les Missions Locales de « Pôle emploi pour les jeunes ». Ce n’est pas vrai.</span><br></br>
                                <span className="font-bold italic">En effet, la Mission Locale accompagne aussi les 16-25 ans dans des thématiques sociales comme le logement, l’accès aux soins, la mobilité, la formation etc.</span>
                            </p>
                        </div>
                </div>
            </section>
            <section id="tabulationContainer" className="grid grid-cols-1 sm:grid-cols-3 w-full text-2xl sm:text-xl lg:text-2xl font-bold text-main-white ">
                <Tab title="L'EQUIPE" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
                <Tab title="SUIVEZ-NOUS" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
                <Tab title="NOS FINANCEURS" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
            </section>
                <TabContent id="tab1" activeTab={activeTab} value="1">
                    <Team></Team>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab} value="2">
                    <SocialsContent/>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab} value="1">
                    <div className="relative">
                        <a href="download/Rapport_2022.pdf" download="Rapport_D'activité_Mission_Locale_Sud_Ardennes_2022.pdf"
                            className="absolute -bottom-10 md:bottom-auto md:top-10 lg:top-16 xl:top-20 right-8 font-bold italic text-md lg:text-xl bg-main-pink p-1 px-2 lg:p-2 lg:px-4 text-main-white rounded-lg">Rapport d'activité 2022 
                            <i class="fa-solid fa-download bg-main-pink text-main-white p-2 lg:p-4"></i>
                        </a>
                        <picture>
                            <source media="(max-width: 500px)" srcSet="assets/img/miloPage/financeurs_mobile.jpg"></source>
                            <source media="(min-width: 500px)" srcSet="assets/img/miloPage/financeurs.jpg"></source>
                            <img src="assets/img/miloPage/Plan_de_travail_2.png"
                                className="w-[95%] mx-auto rounded-lg"
                                alt ="visuel décrivant les missions de la mission locale (emploi, mobilité, formation, santé,
                                Orientation, Logement, Formations, Promotions des métier), et le public visé (Jeunes 16/25 ans vor tout
                                puvlic sur certaines aides)"></img>
                        </picture>
                    </div>
                </TabContent>
        </main>
    )
}

export default EspaceMilo