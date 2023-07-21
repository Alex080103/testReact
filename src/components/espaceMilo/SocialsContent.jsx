const SocialsContent = () => {
    return (
        <section id="socialContents" className="grid justify-center">

            <h2 className="text-center py-8 md:py-16 text-4xl md:text-5xl font-title">Retrouvez nos réseaux :</h2>
            <div className="w-[75%] mx-auto grid md:grid-cols-2 gap-8 ">
                <a href="https://www.facebook.com/milosudardennes" target="_blank" className="border-2 border-gray-800 max-h-[430px] overflow-y-hidden aspect-[13/9] hover:scale-105 transition-transform">
                    <img src="/assets/img/miloPage/screenFacebook.PNG" className="w-full" alt="screen de la page Facebook de la mission locale sud Ardennes"></img>
                    </a>
                <a href="https://www.instagram.com/mission_locale_sud_ardennes/" target="_blank" className="border-2 border-gray-800 max-h-[430px] aspect-[13/9] overflow-y-hidden hover:scale-105 transition-transform"
                ><img src="/assets/img/miloPage/screenInsta.PNG" className="w-full" alt="screen de la page Instagram de la mission locale sud Ardennes"></img>
                </a>
                <a href="https://www.facebook.com/groups/994160127762101" target="_blank" className="border-2 border-gray-800 max-h-[430px] aspect-[13/9] overflow-y-hidden hover:scale-105 transition-transform">
                    <img src="/assets/img/miloPage/groupeFacebook.PNG" className=" object-cover" alt="screen du groupe emploi Rethel et Alentours sur Facbook"></img>
                    </a>
                <a href="https://www.youtube.com/@missionlocalesudardennes5003/videos" target="_blank" className="border-2 border-gray-800 max-h-[430px] aspect-[13/9] overflow-y-hidden hover:scale-105 transition-transform">
                    <img src="/assets/img/miloPage/youtube.jpg" className=" object-cover" alt="screen de la page Youtube de la mission locale sud Ardennes"></img>
                    </a>
            </div>
            {/* <h3 className="text-center py-8 md:py-16 text-2xl md:text-4xl font-title">Retour sur nos derniers événements :</h3>
            <div className="flex flex-wrap">
                <iframe src="https://www.youtube.com/embed/9DpJQg9jGqM" className="aspect-video w-[40%] mx-auto"></iframe>
                <iframe src="https://www.youtube.com/embed/Uk0hpieQ8j0" className="aspect-video w-[40%] mx-auto"></iframe>
            </div> */}

        </section>
    )
}
export default SocialsContent;