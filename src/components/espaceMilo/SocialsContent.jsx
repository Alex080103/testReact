const SocialsContent = () => {
    return (
        <section id="socialContents" className="grid justify-center">

            <h2 className="text-center py-8 md:py-16 text-4xl md:text-5xl font-title">Retrouvez nos réseaux :</h2>
            <div className="w-[75%] mx-auto grid md:grid-cols-2 gap-8 ">
                <a href="https://www.facebook.com/milosudardennes" className="border-2 border-gray-800 max-h-[430px] overflow-y-hidden hover:scale-105 transition-transform"><img src="/assets/img/miloPage/screenFacebook.PNG" className="w-full" alt="screen de la page Facebook de la mission locale sud Ardennes"></img></a>
                <a href="https://www.instagram.com/mission_locale_sud_ardennes/" className="border-2 border-gray-800 max-h-[430px] overflow-y-hidden hover:scale-105 transition-transform"><img src="/assets/img/miloPage/screenInsta.PNG" className="w-full" alt="screen de la page Instagram de la mission locale sud Ardennes"></img></a>
            </div>
            <h3 className="text-center py-8 md:py-16 text-2xl md:text-4xl font-title">Retour sur nos derniers événements :</h3>
            <div className="flex flex-wrap">
                <iframe src="https://www.youtube.com/embed/9DpJQg9jGqM" className="aspect-video w-[40%] mx-auto"></iframe>
                <iframe src="https://www.youtube.com/embed/Uk0hpieQ8j0" className="aspect-video w-[40%] mx-auto"></iframe>
            </div>

        </section>
    )
}
export default SocialsContent;