import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Search from "../components/admin/Search";
import Pagination from "../components/admin/Pagination";
import Table from "../components/admin/Table";
import Modal from "../components/Modal";

const Crud = () =>
{
    const [datas, setDatas] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const {name} = useParams();

      useEffect(() => {
            if (name == ":team") {
                fetchTeam()
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
                <section className="bg-main-white my-16 pr-2">
                    <div className="mx-auto w-full">
                        <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                            <Search  urlName={name}></Search>
                            <div className="overflow-x-auto">
                                {datas.length !== 0 ? <Table datas={datas} render={isLoad} urlName={name} fetchs={{fetchTeam, fetchPost}}></Table> : <div>Loading</div>}
                            </div>
                            <Pagination></Pagination>
                        </div>
                    </div>
                </section>
            </main>
    
        )
    
}
export default Crud;