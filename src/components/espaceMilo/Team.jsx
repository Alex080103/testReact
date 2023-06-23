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
        <section id="team" class="mt-8 md:mt-16">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 justify-items-center">
                {persons.map((person, index) => {
                    return (
                        <CardTeam content={person} key={index}></CardTeam>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Team;