const SliderLogement = () => {
    return (
            <div className="grid items-center justify-items-center gap-4 mx-1 grid-cols-1 md:p-2 lg:grid-cols-2 md:mx-6 xl:gap-2 xl:w-11/12 xl:mx-auto">
                <div className="w-full md:w-2/3 lg:w-full mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl gap-2 mb-8">
                        Le guide logement
                    </h3>
                    <p className="text-lg md:text-2xl mb-8"> Découvrez le guide logement qui vous permettra de vous accompagner dans toutes vos démarches.</p>
                    <a href="download/Rapport_2022.pdf" download="Rapport_D'activité_Mission_Locale_Sud_Ardennes_2022.pdf"
                            className="text-center rounded-none font-bold italic text-md lg:text-xl bg-main-pink  px-8 py-4
                              text-main-white md:rounded-lg">Guide Logement 
                            <i className="fa-solid fa-download bg-main-pink text-main-white ml-2"></i>
                        </a>
                </div>

                <img src="assets\img\jeunePage\jpg\plaquette1.jpg"></img>

            </div>
    )
}
export default SliderLogement;