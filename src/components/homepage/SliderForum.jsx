const SliderForum = ({forums}) => {
    return (
        <section id="forums">
            <div className="w-11/12 justify-self-center mx-auto md:justify-self-auto pt-8 pb-12">
                {forums.length > 0 ?
                <swiper-container slides-per-view="1" speed="1500" loop="true" navigation="true"    
                autoplay="true" delay="500" disable-on-interaction="true" paralax="true"
                >
                    {forums.map((forum, index) =>{
                        return (
            <swiper-slide key={index}>
                <div className="bg-main-white grid md:grid-cols-[60%_40%] border-2 w-[95%] sm:w-[95%] h-auto md:max-w-auto lg:max-w-[80%] xl:w-2/3 mx-auto border-main-gray shadow-xl shadow-main-gray">
                    <div className=" h-full border-b md:border-b-0 border-r-2 border-gray-800">
                        <img src={forum.image} className="object-cover object-center w-full aspect-[181/256]"></img>
                    </div>
                    <div className="p-4 flex-col justify-center md:justify-start md:items-end flex">
                        <div className="flex items-center text-center  md:text-right">
                            <div className="sm:mr-4 mx-auto">
                                <a href="https://www.facebook.com/milosudardennes" target="_blank" className="text-blue-500 text-center md:text-right text-2xl underline">Mission Locale Sud Ardennes</a>
                                <p><em>{forum.date}</em></p>
                            </div>
                            <div className="bg-[url('assets/img/LOGO_MILO_ILLUSTRATOR.jpg')] hidden sm:block bg-cover bg-center rounded-full mr h-24 w-32 sm:h-16 sm:w-24"></div>
                        </div>
                        <p className="mt-4 text-right hidden sm:inline mr sm:!line-clamp-3 md:!line-clamp-[10]">{forum.texte}
                        </p>
                        <button className="bg-blue-600 px-4 py-2 mt-2 md:mt-8 text-main-white mx-auto w-auto">Voir la publication</button>
                        <a href="https://www.facebook.com/milosudardennes" className="mx-auto"><img src="assets/img/homepage/video.png" className="aspect-video h-32 hidden lg:block mx-auto mt-8"/></a>
                        <button className="bg-red-600 px-4 py-2 mt-2 md:mt-8 text-main-white mx-auto w-auto">Voir la vidéo</button>
                    </div>
                </div>
                </swiper-slide>
                        )
                        
                    })}

                </swiper-container>
                : <p>No slides</p>}
            </div>
        </section>  
    )
}
export default SliderForum;