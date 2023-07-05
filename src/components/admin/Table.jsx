import { Link } from "react-router-dom";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import axios from "axios";

const Table = ({datas, onload, urlName, fetchTeam, fetchPost, setError}) => {
    const [showDatas, setDatas] = useState(datas);
    const [contentToModal, setModalContent] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [showPictures, setShowPictures] = useState(-1);
    // console.log(showPictures);

    function handleDelete(action, id) {
        axios.post('http://localhost:8000/public/php/index.php', {
            action : action,
            id : id
        }).then(function(response) {
            if (response.data == true) {
                if (urlName == ":post") {
                    fetchPost();
                } else {
                    fetchTeam();
                }
            } 
        })
    }
    
    function setContentToModal(content, index) {
        setIsOpenModal((isOpenModal) => !isOpenModal);
        setModalContent(content);
    }
    useEffect(() => {
        setDatas(datas);
    }, [datas]);
    

    return (
        <div>
            <table className="w-full text-sm text-left text-black " onLoad={onload}>
                <thead className="text-xs text-gray-800 uppercase bg-gray-50">
                    { urlName == ":post" ?
                    <tr>
                        <th scope="col" className="px-4 py-3">Date</th>
                        <th scope="col" className="px-4 py-3">Description</th>
                        <th scope="col" className="px-4 py-3">Affiche</th>
                        <th scope="col" className="px-4 py-3">Screen vidéo</th>
                        <th scope="col" className="px-4 py-3">Lien vidéo</th>
                        <th scope="col" className="px-4 py-3 text-center">Lien de la publication</th>
                        <th scope="col" className="px-4 py-3">Statut</th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    : urlName == ":team" ?
                    <tr>
                        <th scope="col" className="px-4 py-3">Nom/Prénom</th>
                        <th scope="col" className="px-4 py-3">Poste</th>
                        <th scope="col" className="px-4 py-3">Photos</th>
                        <th scope="col" className="px-4 py-3">Description</th>
                        <th scope="col" className="px-4 py-3">Localisation</th>
                        <th scope="col" className="px-4 py-3 text-center">Linkedin</th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    : <tr>
                        <th>null</th>
                    </tr> }
                </thead>
                <tbody className="[&>td]">
                    {showDatas.map((content, index) => {            
                        return (
                            urlName == ":team" ? 
                        <tr className="border-b max-h-[10px]" key={index}>
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{content['surname']}.{content['name']}</th>
                            <td className="px-4 py-3">{content['poste']}</td>
                            <td className="px-4 py-3 min-w-[250px] max-w-[350px] ">
                                {showPictures !== index ? 
                                <button className="w-full bg-blue-700 p-2 text-main-white" onClick={() => setShowPictures(index)}>Afficher les images</button>
                                : 
                                <button className="w-full bg-blue-700 p-2 text-main-white" onClick={() => setShowPictures(-1)}>Cacher les images</button>
                                }
                                
                                <div className={`grid  ${ showPictures !== index ? "max-h-0 opacity-0" : "max-h-[100%] opacity-100"} grid-cols-2 overflow-hidden items-center gap-4 transition-opacity tranision-[height] ease-out duration-[0.6s]`}>
                                    <img className="max-h-40" src={content['photo']}></img>
                                    <img className="max-h-40" src={content['photo_accueil']}></img>
                                </div>
                                
                            </td>
                            <td className="px-4 py-3">{content['description']}</td>
                            <td className="px-4 py-3">{content['localisation']}</td>
                            <td className="px-4 py-3">{content['linkedin']}</td>

                            <td  className="px-4 py-3 flex items-center justify-center text-center z-0">
                                <div className="w-44 z-10 bg-white rounded divide-y divide-gray-100 shadow  ">
                                    <ul className="py-1 text-sm text-gray-700 w-full">
                                        <li>
                                            <button onClick={() => setContentToModal(content, index)}
                                            className="block py-2 px-4 hover:bg-gray-100 w-full">Modifier</button>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <button onClick={() => handleDelete("deleteUser", content['id'])} className="block py-2 px-4 text-sm w-full text-gray-700 hover:bg-gray-100 ">Supprimer</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        : urlName == ":post" ?
                        <tr className="border-b max-h-[10px]" key={index}>
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{content['date']}</th>
                            <td className="px-4 py-3">{content['description']}</td>
                            <td className="px-4 py-3 "><img className="max-h-40" src={content['poster']}></img></td>
                            <td className="px-4 py-3"><img className="max-h-40" src={content['video']}></img></td>
                            <td className="px-4 py-3">{content['video_link']}</td>
                            <td className="px-4 py-3">{content['link']}</td>
                            <td className="px-4 py-3">{content['status']}</td>

                            <td  className="px-4 py-3 flex items-center justify-center mx-auto text-center z-0">
                                <div className="w-44 z-10 bg-white rounded divide-y divide-gray-100 shadow  ">
                                    <ul className="py-1 text-sm text-gray-700 w-full">
                                        <li>
                                            <button onClick={() => setContentToModal(content, index)}
                                            className="block py-2 px-4 hover:bg-gray-100 w-full">Modifier</button>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <button onClick={() => handleDelete("deletePost", content['id'])} className="block py-2 px-4 text-sm w-full text-gray-700 hover:bg-gray-100 ">Supprimer</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        : ""
                        )
                        })
                    }

                </tbody>
            </table>
                <Modal isOpen={isOpenModal} type={urlName} action={"modif"} contentToModal={contentToModal} 
                setIsOpen={setIsOpenModal} showDatas={showDatas} 
                setDatas={setDatas} fetchTeam={fetchTeam} fetchPost={fetchPost} setError={setError}></Modal>
        </div>

    )
}
export default Table;