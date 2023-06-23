const SocialsContent = () => {
    return (
        <section id="socialContents" class="grid justify-center">
            <h2 className="text-center py-8 md:py-16 text-4xl font-title">Retrouvez nos réseaux :</h2>
            <div className="w-[75%] mx-auto grid md:grid-cols-2 gap-8">
                <img src="/assets/img/miloPage/screenFacebook.PNG" className="w-full"></img>
                <img src="/assets/img/miloPage/screenInsta.PNG" className="w-full"></img>
                <iframe src="https://www.youtube.com/embed/9DpJQg9jGqM" className="aspect-video"></iframe>
            </div>
        </section>
    )
}
export default SocialsContent;