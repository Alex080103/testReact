import { useState } from "react";

const Modal = ({type, action, content}) => {
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // function handleClick {
    //     setModalIsOpen((modalIsOpen) => !modalIsOpen);
    // }${ modalIsOpen == true ? "" : "hidden"}
    return (
    <div id={type == ":team" && action == "add" ? "add-modal-team" : type == ":post" && action == "add" ? "add-modal-post" :
        type == ":team" && action == "modif" ? "modif-modal-team" : type == ":post" && action == "modif" ? "modif-modal-post" : "default-modal"
    } 
    tabIndex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 z-50  hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
       <div className="relative w-full max-w-md max-h-full bg-main-gray pb-12">
           <div className="relative  h-full rounded-lg shadow">
               <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" 
               data-modal-hide={type == ":team" && action == "add" ? "add-modal-team" : type == ":post" && action == "add" ? "add-modal-post" :
               type == ":team" && action == "modif" ? "modif-modal-team" : type == ":post" && action == "modif" ? "modif-modal-post" : "default-modal"
                }>
                   <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                   <span className="sr-only">Close modal</span>
               </button>
               
                </div>
                   {type == ":post" ?  
                       <div className="px-6 py-6 lg:px-8">
                           <h3 className="mb-4 text-xl font-medium text-white italic">{ action == "modif" ? `Modifier un post` : "Ajouter un post"}</h3>
                           <form className="space-y-6" action="#">
                               <div>
                                   <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la description` : "Ajouter une description"}</label>
                                   <textarea type="text" name="post" defaultValue={ action == "modif" ? content['description'] : ""} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                   </textarea>
                               </div>
                               <div>
                                   <label htmlFor="link" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la lien de votre post facebook` : "Ajouter le lien de votre post facebook"}</label>
                                   <input type="text" name="link" id="link" defaultValue={ action == "modif" ? content['nom'] : ""} placeholder="Ajouter un lien" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                       </input>                                
                                </div>
                                <div>
                                    <label htmlFor="linkYoutube" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la lien de la vidéo youtube` : "Ajouter un lien vers la vidéo youtube dédiée"}</label>
                                    <input type="text" name="linkYoutube" id="linkYoutube" defaultValue={ action == "modif" ? content['prenom']  : ""} placeholder="Ajouter un lien youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </input>                                
                                </div>
                                <div>
                                    <label htmlFor="poster" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier l'affiche (Taille max: 4mo)` : "Ajouter une affiche (Taille max: 4mo)"}</label>
                                    <input type="file" name="poster" id="poster"  placeholder="Ajouter une affiche" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </input>                                
                                </div>
                                <div>
                                    <label htmlFor="screen" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le screen de la vidéo youtube (Taille max: 4mo)` : "Ajouter un screen de la vidéo youtube (Taille max: 4mo)"}</label>
                                    <input type="file" name="screen" id="screen" placeholder="Ajouter une screen de la vidéo youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </input>                                
                                </div>
                               <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajoutez votre post</button>
                           </form>
                       </div>
                    : type == ":team" ?
                    <div className="px-6 py-6 lg:px-8">
                           <h3 className="mb-4 text-xl font-medium text-white italic">{ action == "modif" ? `Modifier un utilisateur` : "Ajouter un utilisateur"}</h3>
                           <form className="space-y-6" action="#">
                               <div>
                                   <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le nom` : "Ajouter un nom"}</label>
                                   <input type="text" name="name" id="name" defaultValue={ action == "modif" ? content['nom'] : ""} placeholder="Ajoutez un nom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                   </input>
                               </div>
                               <div>
                                   <label htmlFor="surname" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le prénom` : "Ajouter un prénom"}</label>
                                   <input type="text" name="surname" id="surname" defaultValue={ action == "modif" ? content['prenom'] : ""} placeholder="Ajoutez un prénom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                       </input>                                
                                </div>
                                <div>
                                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier le rôle` : "Ajouter un rôle"}</label>
                                    <input type="text" name="role" id="role" defaultValue={ action == "modif" ? content['description'] : ""} placeholder="Ajoutez un role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </input>                                
                                </div>
                                <div>
                                    <label htmlFor="poster" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier une description (max 135 caractères)` : "Ajoutez une description (max 135 caractères)"} </label>
                                    <textarea type="text" name="poster" id="poster" defaultValue={ action == "modif" ? content['description'] : ""} placeholder="Ajoutez une description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </textarea>                                
                                </div>
                                <div>
                                    <label htmlFor="screen" className="block mb-2 text-sm font-medium text-white">{ action == "modif" ? `Modifier la photo` : "Ajouter une photo"}</label>
                                    <input type="file" name="screen" id="screen" placeholder="Ajoutez une screen de la vidéo youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </input>                                
                                </div>
                               <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajoutez votre post</button>
                           </form>
                       </div>
                    : ""
                    }
           </div>

       </div>

    )
}

export default Modal;