const Connect = () => {
    return (
        
        <section >
            {/* <h2 className="font-title w-full text-4xl md:text-5xl py-8 md:py-16 text-center">Mentions Légales</h2> */}
            <div className="grid grid-cols-2 max-w-[95%] mx-auto pt-8">
                <div className="ml-8 grid grid-cols-2 [&>div]:mb-8 my-auto [&>div>h3]:text-3xl [&>div>h3]:italic [&>div>h3]:font-bold">
                    <div>
                        <h3>Éditeur</h3>
                        <p>Mission Locale Sud Ardennes</p>
                        <p>16 Rue Louise Weiss, 08300, Rethel</p>
                        <p>tél : 03.24.38.29.17</p>
                        <p>Directeur: DANLOUP Laurent</p>
                    </div>
                    <div>
                        <h3>Hébergeur</h3>
                        <p>OVS</p>
                        <p>16 Rue Louise Weiss, 08300, Rethel</p>
                        <p>tél : 03 24 38 29 17</p>
                        <p>Directeur: DANLOUP Laurent</p>
                    </div>
                    <div>
                        <h3>Conception</h3>
                        <p>DERRIERE Alexandre</p>
                        <p>derriere.alexandre0103@gmail.com</p>
                        <p>tél : 06.07.38.30.28</p>
                    </div>
                    <div>
                        <h3>Développement</h3>
                        <p>DERRIERE Alexandre</p>
                        <p>derriere.alexandre0103@gmail.com</p>
                        <p>tél : 06.07.38.30.28</p>
                    </div>
                </div>
                <img src="/assets/img/Mentions/mentions-legales-loupe.png" className="h-auto aspect-video"></img>
            </div>

            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              Connexion administrateur
            </button>

            <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Fermer</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Connectez Vous</h3>
                            <form className="space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre mail</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                                </div>

                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connectez vous</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Connect;