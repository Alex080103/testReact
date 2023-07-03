import Contact from "../components/Contact";

const OneForAll = () => {
    return (
        <section>
            <h1 className="font-title text-4xl md:text-5xl py-8 md:pt-12 md:pb-8 xl:py-16 text-center">Espace pour tous</h1>
            <div className="grid  lg:grid-cols-2 max-w-[95%] sm:w-11/12 gap-4 mx-auto mb-8" >
                 <div className="flex flex-col text-lg md:text-xl mt-4 lg:text-2xl">
                     <p className="">
                         Nos forums et recrutements sont ouverts à tous !! Suivez nos évènements sur notre page facebook
                         et consultez notre partage d’offres d’emploi sur le  <a href="https://www.facebook.com/groups/994160127762101/." class="text-main-blue underline"> groupe JOB EMPLOI Rethel et alentours (08-51-02) sur Facebook.</a>
                     </p><br></br>
                     <p>Vous pouvez également télécharger <strong>le guide de la reconversion</strong> pour en apprendre plus les différents dispositifs qui vout sont ouverts.</p>
                     <a href="download/guide_CEP_2023-MLSUDARDENNES-version_definitive (1).pdf" download="Guide_Reconversion_MLSUDARDENNES.pdf" className="font-bold bg-main-pink rounded-full text-main-white hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink mx-auto px-4 md:px-6 py-2 md:py-3 mt-4">Télécharger</a>
                 </div>
                 <img src="assets/img/homepage/pexels-fauxels-3184419(1).jpg" className="max-w-[90vw] md:max-w-[50vw] xl:max-w-[95%] mx-auto"></img>
            </div>
            <Contact></Contact>

        </section>
    )
}
export default OneForAll;