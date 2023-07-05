import { Link } from "react-router-dom";

const Socials = ({persons}) => {
    
    return (
        <section id="socials" className="bg-[url('assets/img/homepage/photoReseaux.jpg')] bg-center md:bg-fixed bg-cover" title="photo de personnes en groupe">
        <div className="h-auto md:h-auto w-full relative bg-gray-600 bg-opacity-70 ">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-row-1 items-center pt-[50px] text-main-white  md:py-12">
                <div className="flex ml-8 gap-8 items-center">
                    {/* <img src="/assets/img/homepage/288f6585103987.5d716fde758fd.gif" className="hidden xl:block w-[250px]">
                    </img> */}
                    <div className="w-[99%] lg:w-10/12 ml-auto flex flex-col md:mb-12 gap-4 text-xl lg:text-2xl h-fit">
                        <h3 className="font-title text-4xl lg:text-5xl italic mb-6 tracking-[0.1em]">Rejoignez la communauté</h3>
                        <div>
                            <i className="fa-brands fa-square-facebook mr-2 text-main-blue"></i>
                            <a href="#"> Sur Facebook</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-youtube mr-2 text-main-red"></i>
                            <a href="#"> Sur Youtube</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-instagram mr-2 text-yellow-500"></i>
                            <a href="#"> Sur Instagram</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-square-facebook mr-2 text-main-blue"></i>
                            <a href="#"> Sur le groupe Job Emploi Rethel</a>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 justify-self-center md:justify-self-auto pt-8 pb-12">
                    {persons.length > 0 ?
                    <swiper-container  className="lg:h-[380px]" slides-per-view="1" speed="500" loop="true" navigation="true"    
                    autoplay="true" delay="500" disable-on-interaction="false" >
                        {persons.map((person, index) =>{
                            return (
                            <swiper-slide key={index} className="lg:h-[380px]">
                                <div className="duration-700 ease-in-out flex items-center justify-center" key={index}>
                                    <div className="max-w-[98%] sm:max-w-[80%]  md:max-w-md bg-[url('assets/img/homepage/bullesPetit.jpg')] bg-contain border-2 border-main-pink  shadow-lg ${hidden} rounded-lg overflow-hidden my-2 sm:my-4">
                                        <div className="py-2 sm:py-4 px-6">
                                            <div className="grid grid-cols-2 items-center">
                                                <img className="w-32 mx-auto h-32 rounded-full object-cover object-center" 
                                                src={person['photo']} alt="membre de l'équipe">
                                                </img>
                                                <div>
                                                    <p className="text-2xl font-semibold text-gray-800 text-center italic">{person['name']} <span>{person['surname']}</span> </p>
                                                    <p className="text-md text-blue-800 text-center italic"> {person['poste']} </p>
                                                </div>
                                            </div>
                                            <p className="py-2 sm:text-lg text-gray-700 text-center line-clamp-5">""{person['description']}""</p>
                                            <div className="flex justify-center w-full items-center">
                                                <Link to="/EspaceMilo" className="bg-main-pink py-2 px-4 w-[98%] sm:w-4/6 transition-all  rounded-full text-center text-main-white my-2 border border-main-white hover:bg-main-white hover:text-main-pink hover:border hover:border-main-red">
                                                    Découvrir toute notre équipe
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            )

                        })}
                        
                    </swiper-container>
                    : <p>No slides</p>}
                </div>
            </div>
        </div>
        </section>
    )
}

export default Socials;