import axios from "axios";
import { useEffect, useState } from "react";
import CardTeam from "./CardTeam";

const Team = () => {
    const [persons, setPersons] = useState([]);

    function fetchTeam() {
        axios.post('php/index.php', {
            action: "showAllUsers"
        }).then(function(response) {
            setPersons(response.data);
        })
    }   
    useEffect(() => {
        fetchTeam();
        console.log(persons)
      }, [])
    console.log(persons);

    return (
        <section id="team" class="mt-8 md:mt-16">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 justify-items-center">
                {persons.map((person, index) => {
                    console.log(person.user_name)
                    return (
                        <CardTeam content={person} key={index}></CardTeam>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Team;