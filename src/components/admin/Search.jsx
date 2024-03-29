import { Link } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";

const Search = ({urlName, datas, setDatas, fetchTeam, fetchPost, setError}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenFinanceurModal, setIsOpenFinanceurModal] = useState(false);
    let [previousLength, setPreviousLength] = useState(0);

    function handleChange(event, previousLength) {
        let text = event.target.value;
        
        if (event.target.value.length < previousLength) {
            if (urlName == ":team") {
                fetchTeam();
            } else {
                fetchPost();
            }
            // return false;
        }
        setPreviousLength((previousLength) => previousLength = event.target.value.length);
        if (event.target.value.length == 0) {
            if (urlName == ":team") {
                fetchTeam();
            } else {
                fetchPost();
            }
        }
        const searchResults = datas.filter(data => {
            return Object.values(data).some(value => {
              if (typeof value === 'string') {
                return value.toLowerCase().includes(text.toLowerCase());
              }
              return false;
            });
          }
          );
          setDatas(searchResults);

    }
    // console.log(datas);
    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link to="/Crud/:team"  id="teamTabs"  type="button" className={`flex items-center justify-center text-white ${ urlName == ":team" ? "bg-main-green" : "bg-main-red" } font-medium rounded-lg text-sm px-4 py-2   focus:outline-none`}>
                    Gérer l'équipe
                </Link>
                <Link to="/Crud/:post"  id="teamTabs"  type="button" className={`flex items-center justify-center text-white ${ urlName == ":post" ? "bg-main-green" : "bg-main-red" } font-medium rounded-lg text-sm px-4 py-2   focus:outline-none`}>
                    Gérer les posts
                </Link>
                <button type="button" onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
                className="flex items-center justify-center text-white bg-main-gray hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2   focus:outline-none ">
                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    Ajouter
                </button>
                <button type="button" onClick={() => setIsOpenFinanceurModal((isOpenModal) => !isOpenModal)}
                className="flex items-center justify-center text-white bg-main-gray hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2   focus:outline-none ">
                    Financeurs
                </button>
            </div>
            <Modal isOpen={isOpenModal} type={urlName} action={"add"}  setIsOpen={setIsOpenModal} 
            fetchTeam={fetchTeam} fetchPost={fetchPost} setError={setError}></Modal>
            <Modal isOpen={isOpenFinanceurModal} type={"financeur"} setIsOpen={setIsOpenFinanceurModal}/>
        </div>


    )
}
export default Search;