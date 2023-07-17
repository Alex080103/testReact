import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Modal = ({isOpen, type, action, contentToModal, setIsOpen, fetchTeam, fetchPost, setError}) => {
    
    const [response, setResponse] = useState(false);

    let content = contentToModal;
    let form = null;

    function handleSubmit (event) {
        event.preventDefault();
        form = new FormData(event.target);
        // form.append("photo",form.photo);
        // console.log(...form);
        axios.post('http://localhost:8000/public/php/index.php', 
        // axios.post('../php/index.php',
        form,
         {headers: { 'Content-Type': 'multipart/form-data' }}).then(function(response) {
            setResponse(response.data);
            console.log(response.data);
            if (response.data == true) {
                setIsOpen((isOpen) => !isOpen);
                // setDatas(showDatas.push(content));
                if (type == ":post") {
                    fetchPost();
                } else {
                    fetchTeam();
                }
            } else if (response.data == false) {
                // setError("Erreur de traitement");
            } else if (response.data.error !== null) {
                // setError(response.data.error);
            }
        }).catch (error => {
            // setError("Une erreur est survenue");
        }
        )
    }
    // if (isOpen == true) {
    //     console.log(content.descriptionPost);

    // }
    return (
    <div id={type == ":team" && action == "add" ? "add-modal-team" : type == ":post" && action == "add" ? "add-modal-post" :
        type == ":team" && action == "modif" ? "modif-modal-team" : type == ":post" && action == "modif" ? "modif-modal-post" : "default-modal"
    }
    tabIndex="-1"  className={`fixed top-0 left-0 right-0 z-50 ${ isOpen == true ? "" :  "hidden"} w-full p-4 overflow-x-hidden overflow-y-auto mx-auto md:inset-y-0 h-[calc(100%-1rem)] max-h-full`} aria-hidden="true">
       <div className="relative inset-x-0 mx-auto w-full max-w-md max-h-auto bg-main-gray pb-4">
           <div className="relative  h-full rounded-lg shadow">
               <button type="button" onClick={() => setIsOpen()} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                   <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                   <span className="sr-only">Close modal</span>
               </button>

                </div>
                { type == "financeur" ?
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-white italic">Modifier les financeurs</h3>
                        <form className="space-y-6" action="#" onSubmit={() => handleSubmit(event)}>
                            <div>
                                <label htmlFor="financeur" className="block mb-2 text-sm font-medium text-white">Modifier l'image des logos financeurs</label>
                                <input type="file" name="founder" id="financeur" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                </input>
                            </div>
                            <div>
                                <label htmlFor="financeurMobil" className="block mb-2 text-sm font-medium text-white">Modifier l'image mobile des logos financeurs</label>
                                <input type="file" name="founderMobil" id="financeurMobil" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                </input>
                            </div>
                            <div>
                                <label htmlFor="activity" className="block mb-2 text-sm font-medium text-white">Modifier le pdf du rapport d'activité</label>
                                <input type="file" name="activity" id="activity" placeholder="Ajouter un lien" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                    </input>
                             </div>
                             <div>
                                <label htmlFor="year" className="block mb-2 text-sm font-medium text-white">Modifier l'année du rapport d'activité</label>
                                <input type="text" name="year" id="year" placeholder="Ajouter un lien" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                    </input>
                             </div>
                             <input type="hidden" name="action" value="modifFunders"/>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajoutez votre post</button>
                        </form>
                    </div>
                    : "" }
                   {type == ":post" ?
                       <div className="px-6 py-6 lg:px-8">
                           <h3 className="mb-4 text-xl font-medium text-white italic">{ action == "modif" ? `Modifier un post` : "Ajouter un post"}</h3>
                           <form className="space-y-6" action="#" onSubmit={() => handleSubmit(event)}>
                               <div>
                                   <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la description` : "Ajouter une description"}</label>
                                   <textarea type="text" name="post" defaultValue={ action == "modif" ? content['descriptionPost'] : ""}  id="description" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                        
                                   </textarea>
                               </div>
                               <div>
                                   <label htmlFor="link" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la lien de votre post facebook` : "Ajouter le lien de votre post facebook"}</label>
                                   <input type="text" name="link" id="link" defaultValue={ action == "modif" ? content['link'] : ""} placeholder="Ajouter un lien" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                       </input>
                                </div>
                                <div>
                                    <label htmlFor="linkYoutube" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la lien de la vidéo youtube` : "Ajouter un lien vers la vidéo youtube dédiée"}</label>
                                    <input type="text" name="linkYoutube" id="linkYoutube" defaultValue={ action == "modif" ? content['video_link']  : ""} placeholder="Ajouter un lien youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="poster" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier l'affiche (Taille max: 4mo)` : "Ajouter une affiche (Taille max: 4mo)"} <em>hauteur recommandé (1000px)</em></label>
                                    <input type="file" name="poster" id="poster"  placeholder="Ajouter une affiche" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" { ...action == "modif" ? "" : "required"}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="screen" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le screen de la vidéo youtube (Taille max: 4mo)` : "Ajouter un screen de la vidéo youtube (Taille max: 4mo)"}</label>
                                    <input type="file" name="screen" id="screen" placeholder="Ajouter une screen de la vidéo youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" { ...action == "modif" ? "" : "required"}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le statut` : "Ajouter un statut"}</label>
                                    <select name="status" id="status" placeholder="Ajoutez un status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                        <option value="A venir">A venir</option>
                                        <option value="Rétrospective">Rétrospective</option>
                                    </select>
                                </div>
                                <input type="hidden" name="action" value={`${action == "modif" ? "modifPost" : 'addPost'}`} />

                                { action == "modif" ?
                                <input type="hidden" name ="id" value={content['id']} />
                                : ""}
                               <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{ action == "modif" ? "Modifiez" : "Ajoutez"} votre post</button>
                           </form>
                       </div>
                    : type == ":team" ?
                    <div className="px-6 py-6 lg:px-8">
                           <h3 className="mb-4 text-xl font-medium text-white italic">{ action == "modif" ? `Modifier un utilisateur` : "Ajouter un utilisateur"}</h3>
                           <form className="space-y-6" action="#" onSubmit={() => handleSubmit(event)}>
                               <div>
                                   <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le nom` : "Ajouter un nom"}</label>
                                   <input type="text" name="name" id="name" defaultValue={ action == "modif" ? content['name'] : ""} placeholder="Ajoutez un nom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                   </input>
                               </div>
                               <div>
                                   <label htmlFor="surname" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le prénom` : "Ajouter un prénom"}</label>
                                   <input type="text" name="surname" id="surname" defaultValue={ action == "modif" ? content['surname'] : ""} placeholder="Ajoutez un prénom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                       </input>
                                </div>
                                <div>
                                    <label htmlFor="poste" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le rôle` : "Ajouter un rôle"}</label>
                                    <input type="text" name="poste" id="poste" defaultValue={ action == "modif" ? content['poste'] : ""} placeholder="Ajoutez un role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="descriptionUser" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier une description (max 250 caractères)` : "Ajoutez une description (max 250 caractères)"} </label>
                                    <textarea type="text" name="description" id="descriptionUser" 
                                    defaultValue={ action == "modif" ? content['description'] : ""} rows="5" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:text-white" required>
                                        
                                    </textarea>
                                </div>
                                <div>
                                    <label htmlFor="screen" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la photo de l'accueil` : "Ajouter une photo pour l'accueil"}<em> (format rond 142px/142px)</em></label>
                                    <input type="file" name="photoAccueil" id="screen"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" { ...action == "modif" ? "" : "required"}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="screen" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la photo général` : "Ajouter une photo général"}<em> (format largeur 283px/ hauteur 425px)</em></label>
                                    <input type="file" name="photo" id="screen"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" { ...action == "modif" ? "" : "required"}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="localisation" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la localisation` : "Ajouter une localisation"}</label>
                                    <select type="text" name="localisation" id="localisation" placeholder="Ajoutez une localisation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                        <option value="Rethel">Rethel</option>
                                        <option value="Vouziers">Vouziers</option>
                                        <option value="null">null</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="linkedin" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le linkedin` : "Ajouter un linkedin"}</label>
                                    <input type="text" name="linkedin" id="linkedin" defaultValue={ action == "modif" ? content['linkedin'] : ""} placeholder="Ajoutez un lien" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                    </input>
                                </div>
                                <input type="hidden" name="action" value={`${action == "modif" ? "modifUser" : 'addUser'}`} />
                                { action == "modif" ?
                                <input type="hidden" name ="id" value={content['id']} />
                                : ""}
                               <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                { action == "modif" ? "Modifiez" : "Ajoutez"} votre utilisateur</button>
                           </form>
                       </div>
                    : ""
                    }
           </div>

       </div>

    )
}

export default Modal;