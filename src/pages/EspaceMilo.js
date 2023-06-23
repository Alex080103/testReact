import { useState } from "react";
import Tab from "../components/Tab.jsx";
import TabContent from "../components/TabContent.jsx";
import Team from "../components/espaceMilo/Team.jsx";


const EspaceMilo = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <main>
            <section id="visual">
                <div className="bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-center">
                    <picture>
                        <source media="(max-width: 500px)" srcSet="assets/img/miloPage/Plan_de_travail_2.png"></source>
                        <source media="(min-width: 500px)" srcSet="assets/img/miloPage/Plan_de_travail_1.png"></source>

                        <img src="assets/img/miloPage/Plan_de_travail_2.png"
                            className="pt-10 pb-16 w-full"
                            alt ="visuel décrivant les missions de la mission locale (emploi, mobilité, formation, santé, 
                            Orientation, Logement, Formations, Promotions des métier), et le public visé (Jeunes 16/25 ans vor tout 
                            puvlic sur certaines aides)"></img>
                    </picture>
                </div>
            </section>
            <section id="tabulationContainer" className="grid grid-cols-1 sm:grid-cols-3 w-full my-8 md:my-16 mb-32 text-lg sm:text-2xl font-bold text-main-white ">
                <Tab title="L'EQUIPE" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
                <Tab title="SUIVEZ NOUS" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
                <Tab title="NOS FINANCEURS" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
            </section>
                <TabContent id="tab1" activeTab={activeTab} value="1">
                    <Team></Team>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab} value="2">
                    <div className="w-[75%] mx-auto flex-col flex gap-8">
                        <img src="/assets/img/miloPage/screenFacebook.PNG" className="w-full"></img>
                        <img src="/assets/img/miloPage/screenInsta.PNG" className="w-full"></img>
                        <iframe src="https://www.youtube.com/embed/9DpJQg9jGqM" className="aspect-video"></iframe>
                    </div>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab} value="1">
                    <p>salut3</p>
                </TabContent>
        </main>
    )
}

export default EspaceMilo