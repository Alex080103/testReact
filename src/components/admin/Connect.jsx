import axios from "axios";
import { useState } from "react";
import InfoPanel from "./InfoPanel";
import { useNavigate } from "react-router-dom";

const Connect = ({setIsConnected}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [response, setResponse] = useState(true);
    const [error, setError] = useState();
    const navigate = useNavigate();

    let form = null;

    function handleSubmit (event) {
        event.preventDefault();
        form = new FormData(event.target);
        form.append("action", "connect")

        axios.post('http://localhost:8000/public/php/index.php',
        form,
         {headers: { 'Content-Type': 'multipart/form-data' }}).then(function(response) {
            setResponse(response.data);

            if (response.data.connect == 'Connexion réussie')
            {
                setIsConnected(true);
                navigate('/Crud/:team');
            }    
        }).catch (error => {
            setError("Une erreur est survenue");
            // console.log(error);
        }
        )
    }

    return (
        
        <section class="block static" >
            {/* <h2 className="font-title w-full text-4xl md:text-5xl py-8 md:py-16 text-center">Mentions Légales</h2> */}
            

            <button onClick={() => setIsOpenModal(!isOpenModal)} className="block w-full text-white bg-main-pink hover:bg-pink-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
              Connexion administrateur
            </button>

            <div tabIndex="-1" aria-hidden="true" 
            className={`fixed -top-[90vh] mx-auto inset-x-0 !-inset-[70vh] right-0 z-[999] ${ isOpenModal == false ? "hidden" : "" } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[70vh] 
            `}>
            <InfoPanel error={error} setError={setError}/>

                <div className="relative w-full max-w-md max-h-full inset-0 mx-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={() => setIsOpenModal(!isOpenModal)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Fermer</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Connectez Vous</h3>
                            <form className="space-y-6" onSubmit={() => handleSubmit(event)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre mail</label>
                                    <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre password</label>
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