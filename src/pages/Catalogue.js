import { Link, useParams } from "react-router-dom";
import AtelierCard from "../components/catalogue/AtelierCard";

const Catalogue = () => {

    const peoples = [
        1,2,3,4,5,6,7,8,9,10,11,12
    ];
    const name = useParams();
    console.log(name.jeunes);

    return (
        <section className="">
            <h1 className="font-title text-4xl md:text-5xl py-8 md:pt-16 md:pb-10 xl:py-10 text-center ">Nos ateliers</h1>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2 mb-4">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Recherche</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input onChange={() => handleChange(event, previousLength)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " placeholder="Search" required="">
                            </input>
                        </div>
                    </form>
                </div>
                <button type="button" onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
                    className="flex items-center justify-center text-white bg-main-gray hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2   focus:outline-none ">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Ajouter
                    </button>           </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 w-[95%] mx-auto">
            { peoples.map(people => {
                return (
                    <div>
                        { name.jeunes == ":jeunes" ? 
                        <div className="duration-700 ease-in-out flex items-center justify-center" key={people}>
                            <div className="max-w-[98%] sm:max-w-[80%]  md:max-w-md bg-[url('assets/img/homepage/bullesPetit.jpg')] bg-contain border-2 border-main-pink  shadow-lg ${hidden} rounded-lg overflow-hidden my-2 sm:my-4">
                                <div className="py-2 sm:py-4 px-6">
                                    <div className="grid grid-cols-2 items-center">
                                        <img className="w-32 mx-auto h-32 rounded-full object-cover object-top"
                                        src="../assets/img/equipe/armelle.png" alt="membre de l'équipe">
                                        </img>
                                        <div>
                                            <p className="text-2xl font-semibold text-gray-800 text-center italic uppercase"><span className="capitalize">Gérard</span> DANTIER </p>
                                            <p className="text-md text-blue-800 text-center italic"> 18 ans </p>
                                        </div>
                                    </div>
                                    <p className="py-2 sm:text-lg text-gray-700 text-center line-clamp-5">Le dernier rdv date du 18/05/2023</p>
                                    <p className="py-2 sm:text-lg text-gray-700 text-center line-clamp-5">Habite à Signy l'abbaye.</p>
                                    <div className="flex justify-center w-full items-center">
                                        <button to="/EspaceMilo" className="bg-main-pink py-2 px-4 w-[98%] sm:w-4/6 transition-all  rounded-full text-center text-main-white my-2 border border-main-white hover:bg-main-white hover:text-main-pink hover:border hover:border-main-red">
                                            Modifier le rendez - vous
                                        </button>
                                        <button to="/EspaceMilo" className="bg-main-pink py-2 px-4 w-[98%] sm:w-4/6 transition-all  rounded-full text-center text-main-white my-2 border border-main-white hover:bg-main-white hover:text-main-pink hover:border hover:border-main-red">
                                            Proposer un rendez - vous
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :  <AtelierCard/> }
                     </div>    
                        
                )
            }) }
            </div>
        </section>
    )
}

export default Catalogue;