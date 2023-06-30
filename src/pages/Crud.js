import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Search from "../components/admin/Search";
import Pagination from "../components/admin/Pagination";
import Table from "../components/admin/Table";
import Modal from "../components/Modal";
import InfoPanel from "../components/admin/InfoPanel";

const Crud = () =>
{
    const [error, setError] = useState();
    const [datas, setDatas] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const {name} = useParams();

      useEffect(() => {
            if (name == ":team") {
                fetchTeam();
            } else {
                fetchPost();
            }
        }, [name]);

        function fetchTeam() {
            axios.post('http://localhost:8000/public/php/index.php', {
                action : 'showAllUsers'
            }).then(function(response) {
                setDatas(response.data);
                setIsLoad((isLoad) => !isLoad);
            })
        }   
        function fetchPost() {
            axios.post('http://localhost:8000/public/php/index.php', {
                action: 'showAllPosts'
            }).then(function(response) {
                setDatas(response.data);
                setIsLoad((isLoad) => !isLoad);
            })
        }   



        return (
            
            <main>
                <section className="bg-main-white mt-8 mb-16 pr-2">
                    <InfoPanel error={error} setError={setError}/>
                    <h2 className="text-center text-4xl my-8 font-title"> Gestion { name == ":team" ? "Equipe" : "Post"}</h2>
                    <div className="mx-auto w-full">
                        <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                            <Search  urlName={name} datas={datas} setDatas={setDatas} fetchTeam={fetchTeam} fetchPost={fetchPost} setError={setError}></Search>
                            <div className="overflow-x-auto">
                                {datas.length !== 0 ? <Table datas={datas} render={isLoad} urlName={name} fetchTeam={fetchTeam} fetchPost={fetchPost} setError={setError}></Table> : <div>Loading</div>}
                            </div>
                            <Pagination></Pagination>
                        </div>
                    </div>
                </section>
            </main>
    
        )
    
}
export default Crud;