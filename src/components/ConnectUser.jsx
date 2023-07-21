import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConnectUser = ({setIsOpenConnect, isOpenConnect, setIsConnected}) => {
    const [response, setResponse] = useState(true);
    const [error, setError] = useState();
    const navigate = useNavigate();
    // console.log(isOpenConnect);
    let form = null;

    function handleSubmit (event) {
        event.preventDefault();
        form = new FormData(event.target);
        form.append("action", "connect")

        // axios.post('php/index.php',
        axios.post('http://localhost:8000/public/php/index.php', 
        form,
         {headers: { 'Content-Type': 'multipart/form-data' }}).then(function(response) {
            setResponse(response.data);

            if (response.data.connect == 'Connexion réussie')
            {
                setIsConnected(true);
                navigate('/Crud/:team');
            } 
            else if (response.data.connect == 'Connexion échouée') {
                setError('Identifiant Incorrect');
                console.log('Identifiant Incorrect');
            }  
        }).catch (error => {
            setError("Une erreur est survenue");
            // console.log(error);
        }
        )
    }

    return (
        
        <section className="block static" >
            <div tabIndex="-1" aria-hidden="true" 
            className={`fixed mx-auto inset-x-0 inset-y-0 mt-[10%] z-[999] ${ isOpenConnect == false ? "hidden" : "" } 
            w-full p-4 
            `}>
                {/* <InfoPanel error={error} setError={setError} connect={true}/> */}

                <div className="relative w-full max-w-md max-h-full inset-0 mx-auto">
                    <div className="relative bg-main-white rounded-lg shadow-[50px] border-2 border-main-pink">
                        <button type="button" onClick={() => setIsOpenConnect(!isOpenConnect)} className="absolute top-3 right-2.5 text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Fermer</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-title md:text-3xl font-medium ">Connectez Vous</h3>
                            <form className="space-y-6" onSubmit={() => handleSubmit(event)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-md md:text-xl font-medium text-gray-900 ">Votre mail</label>
                                    <input type="text" name="email" id="email" className="bg-gray-50 border border-main-pink text-gray-900 text-sm rounded-lg focus-visible:outline-main-pink block w-full p-2.5 " placeholder="name@company.com" required></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-md md:text-xl font-medium text-gray-900 ">Votre mot de passe</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-main-pink text-gray-900 text-sm rounded-lg focus-visible:outline-main-pink block w-full p-2.5 " required></input>
                                </div>
                                <p className={`text-main-white bg-main-red italic p-4 ${ error !==undefined ? "" : "hidden"} text-xl`}>{error}</p>
                                <button type="submit" className="w-full bg-main-pink text-main-white hover:bg-main-white border hover:text-main-pink hover:border hover:border-main-pink transition-all focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Connectez vous</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ConnectUser;