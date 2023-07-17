import {register} from 'swiper/element/bundle';
register();

const SliderForum = ({forums}) => {
    return (
        <section id="forums" className="mb-4 md:mb-8">
            <div className="w-11/12 justify-self-center mx-auto md:justify-self-auto pt-8 pb-12">
                {forums.length > 0 ?
                <swiper-container slides-per-view="1" speed="1500" loop="true" navigation="true"    
                autoplay="true" delay="500" disable-on-interaction="true"
                >
                    {forums.map((forum, index) =>{
                        return (
            <swiper-slide key={index}>
                <div className="bg-main-white grid md:grid-cols-[60%_40%] relative border-2 w-[95%] sm:w-[95%] max-h-[1200px] rounded-r-xl h-auto md:max-w-auto lg:max-w-[80%] xl:w-2/3 mx-auto border-main-gray shadow-xl shadow-main-gray">
                <p className=" hidden sm:block w-[100%]  sm:p-2 md:p-3 bg-main-pink text-main-white rounded-tr-[11px] 
                font-title sm:text-xl md:text-2xl col-start-1 col-end-3">{forum.status} !</p>
                    <div className=" h-full border-b md:border-b-0 border-r-2 border-gray-800">
                        <img src={forum.poster} className="object-cover object-center w-full aspect-[181/256]"></img>
                    </div>
                    <div className="sm:p-4 flex flex-col justify-center md:justify-start md:items-end ">
                        <div className="hidden  sm:flex items-center text-center  md:text-right">
                            <div className=" mx-auto">
                                <a href="https://www.facebook.com/milosudardennes" target="_blank" className="text-blue-500 text-center md:text-right text-2xl underline">Mission Locale Sud Ardennes</a>
                                <p><em>{forum.date}</em></p>
                            </div>
                            <div className="bg-[url('assets/img/LOGO_MILO_ILLUSTRATOR.jpg')] hidden md:block bg-cover bg-center rounded-full mr h-24 w-32 sm:h-16 sm:w-24"></div>
                        </div>
                        <p className="mt-4 text-right hidden sm:inline mr sm:!line-clamp-3 md:!line-clamp-[10]">{forum.descriptionPost}</p>
                        <div className="flex sm:mb-12 md:mb-0 md:flex-wrap justify-center">
                            <a href={forum.link} target='_blank' className="w-2/3 sm:w-auto bg-blue-600 sm:rounded-full text-sm sm:text-xl font-bold px-4 py-2 sm:mt-2 md:mt-8 border text-main-white mx-auto hover:text-blue-600
                            hover:border hover:bg-main-white transition-all hover:border-blue-600">Voir la publication</a>
                            <a href={forum.video_link} target='_blank' className="mx-auto w-full hidden lg:block"><img src={forum.video} className="aspect-video h-32  mx-auto mt-8"/></a>
                            <a href={forum.video_link} target='_blank'  className="w-2/3 flex justify-center items-center sm:rounded-full sm:w-auto bg-main-pink border text-sm sm:text-xl font-bold px-4 py-2 sm:mt-2 md:mt-8 text-main-white mx-auto hover:bg-main-white hover:text-main-pink 
                            hover:border transition-all hover:border-main-pink">Voir la vidéo</a>
                        </div>
                        <p className=" sm:hidden block w-[100%] border-t-main-white border-t-2 rounded-br-[10px]  sm:p-2 md:p-3 bg-main-pink text-main-white font-title text-xl">{forum.status} !</p>

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