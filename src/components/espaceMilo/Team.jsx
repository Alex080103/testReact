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
        }).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }   
    useEffect(() => {
        fetchTeam();
        // console.log(persons)
      }, [])
    console.log(persons);

    return (
        <section id="team" class="mt-8 md:mt-16">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 justify-items-center">
                <h2>Une équipe bienveillante qui vous accompagne dans vos projets</h2>
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