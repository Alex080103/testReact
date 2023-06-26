import { Link } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";

const Table = ({datas, onload, urlName}) => {
    
    const [contentToModal, setContentToModal] = useState({});

    function salut()
    {
        alert('Salut');
    }


    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 " onLoad={onload}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                    <tr>
                        <th scope="col" className="px-4 py-3">Date</th>
                        <th scope="col" className="px-4 py-3">Description</th>
                        <th scope="col" className="px-4 py-3">Affiche</th>
                        <th scope="col" className="px-4 py-3">Screen vidéo</th>
                        <th scope="col" className="px-4 py-3">lien vidéo</th>
                        <th scope="col" className="px-4 py-3 text-center">lien</th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
            
                    {datas.map((content, index) => {
                        return (
                        <tr className="border-b max-h-[10px]" key={index}>
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{content['prenom']}</th>
                            <td className="px-4 py-3">{content['nom']}</td>
                            <td className="px-4 py-3">{content['prenom']}</td>
                            <td className="px-4 py-3"><img src={content['prenom']}></img></td>
                            <td className="px-4 py-3">{content['prenom']}</td>
                            <td  className="px-4 py-3 flex items-center justify-center text-center z-0">
                                <div className="w-44 z-10 bg-white rounded divide-y divide-gray-100 shadow  ">
                                    <ul className="py-1 text-sm text-gray-700 w-full">
                                        <li>
                                            <button onClick={() => setContentToModal(content)} data-modal-target={urlName == ":team" ? "add-modal-team" : urlName == ":post" ? "modif-modal-post" : "default-modal"}
                                            data-modal-show={urlName == ":team" ? "add-modal-team" : urlName == ":post" ? "modif-modal-post" : "default-modal"}
                                            className="block py-2 px-4 hover:bg-gray-100 w-full">Edit</button>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        )
                        })
                    }
                </tbody>
            </table>
                <Modal type={urlName} action={"modif"} content={contentToModal}></Modal>
        </div>

    )
}
export default Table;