import { Link } from "react-router-dom";

const Atelier = () => {
    return (
        <section>
            <div className="grid grid-cols-2 gap-8 w-[90%]  mx-auto my-16">
                <div className="grid justify-center">
                    <div className="border-b-2 mb-4">
                        <h3 className="font-title text-3xl lg:text-4xl italic mb-3 tracking-[0.1em]">Venez participer à notre atelier</h3>
                        <div class="flex flex-wrap justify-starts items-center pb-6  text-md text-white font-medium">
                            <span class="m-1 px-2 py-1 rounded bg-main-pink">
                                #online
                            </span>
                            <span class="m-1 px-2 py-1 rounded bg-main-pink">
                                #internet
                            </span>
                            <span class="m-1 px-2 py-1 rounded bg-main-pink">
                                #education
                            </span>
                        </div>
                        
                        <p>
                            Il est difficile de croire à quel point nous nous sommes habitués à avoir un accès instantané à l'information à portée de main. Grâce aux progrès technologiques, nous vivons dans une ère où une quantité incroyable de connaissances est accessible en quelques clics seulement. Des bibliothèques de savoir entières, autrefois enfermées dans de volumineux volumes, sont maintenant à notre disposition à travers des moteurs de recherche et des plateformes en ligne.
                        </p>
                        <br></br>
                        <p>
                            Cette révolution de l'information a eu un impact profond sur tous les aspects de nos vies. Pourtant, il est essentiel de prendre du recul et de réfléchir à la façon dont cela affecte notre façon de penser et de traiter les données. L'abondance d'informations a parfois conduit à une surcharge cognitive, où trier et filtrer les données pertinentes des tonnes de résultats peut être épuisant. Nous devons donc développer des compétences critiques pour évaluer la crédibilité des sources et discerner les faits des opinions et des fausses nouvelles.
                        </p>
                        <p className="italic mb-0 mt-4">Cet atelier aura lieu le 23/08/2023</p>
                    </div>
                    <div className="flex justify-around">
                        <Link to={"/Catalogue/:jeunes"}
                        className="py-3 px-16 text-lg mx-auto font-medium text-center text-main-white bg-main-pink border  hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg ">
                        <i className="fa-solid fa-arrow-left  text-main-white hover:text-main-pink mr-2"></i>
                        Revenir aux ateliers
                        </Link>
                        <button 
                        className="py-3 px-16 text-lg  mx-auto font-medium text-center text-main-white bg-main-pink border  hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg ">
                        Participer à cet atelier
                        </button>
                    </div>
                </div>
                <div className="flex flex-col flex-wrap text-center text-lg font-bold">
                    <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" 
                    class="w-full object-cover"/>
                    <p className="bg-main-pink text-main-white w-full py-2">Nombre de places: 10</p>
                </div>

            </div>
        </section>
    )
}
export default Atelier;