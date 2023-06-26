import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Search from "../components/admin/Search";
import Pagination from "../components/admin/Pagination";
import Table from "../components/admin/Table";
import Modal from "../components/Modal";

const Crud = () =>
{
    const [posts, setPosts] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const {name} = useParams();

      useEffect(() => {
        name == ":team" ? fetchTeam() : fetchPost();
        }, [name]);

        function fetchPost() {
            axios.get('http://localhost:8000/public/php/crudPost.php').then(function(response) {
                setPosts(response.data);
                setIsLoad((isLoad) => !isLoad);
            })
        }   
        function fetchTeam() {
            axios.get('http://localhost:8000/public/php/crudTeam.php').then(function(response) {
                setPosts(response.data);
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
                                {posts.length !== 0 ? <Table datas={posts} render={isLoad} urlName={name} ></Table> : <div>Loading</div>}
                            </div>
                            <Pagination></Pagination>
                        </div>
                    </div>
                </section>
            </main>
    
        )
    
}
export default Crud;