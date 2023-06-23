import axios from "axios";
import { useEffect, useState } from "react";
import CardTeam from "./CardTeam";

const Team = () => {
    const [persons, setPersons] = useState([]);

    function fetchTeam() {
        axios.get('http://localhost:8000/public/php/crudTeam.php').then(function(response) {
            setPersons(response.data);
        })
    }   
    useEffect(() => {
        fetchTeam();
      }, [])
    return (
        <section id="team">
            <div class="grid grid-cols-3 gap-8 justify-items-center">
                {persons.map((person) => {
                    return (
                        <CardTeam content={person}></CardTeam>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Team;