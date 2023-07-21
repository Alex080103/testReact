import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ModalRdv from "../components/calendar/ModalRdv";
import { Link } from "react-router-dom";

const CalendarPageConseiller = () => {
    const [actualDate, setActualDate] = useState(new Date());
    const [clickedDate, setClickedDate] = useState(new Date());
    const [todayRdv, setTodayRdv] = useState([]);
    const [rdvDate, setRdvDate] = useState();
    const [isDialogOpen, setIsDialogOpen] = useState (false);
    const [modalAction, setModalAction] = useState("add");

    useEffect(() => {
        actualDate.setHours(0, 0, 0, 0);
        searchRdv(actualDate);
    }, [])
    const allRdv = [
        [
            {
                date: new Date(2023, 6, 21),
            },
            { 
                jeune : "Roger",
                heure : 10,
            },
            { 
                jeune : "Didier",
                heure : 15,
            },
            { 
                jeune : "Gérard",
                heure : 16,
            }   
        ],
        [
            {
                date: new Date(2023, 6, 26)
            },
            { 
                jeune : "Karine",
                heure : 12,
            },
            { 
                jeune : "Aristide",
                heure : 15,
            },
            { 
                jeune : "Napoléon",
                heure : 17,
            }   
        ]
    ];

    function searchRdv(date) {
        for (let i = 0; i < allRdv.length; i++) {
                var isTarget = allRdv[i][0].date.toLocaleDateString() == date.toLocaleDateString();
                if (isTarget !== false) {
                    var find = i;
                }
            if (isTarget !== false) {
                const newTodayRdv = allRdv[find];
                setTodayRdv(newTodayRdv);
                break;
            }
        }
        return isTarget;

    }


    // Définit la date maximum de prise de rdv à partir d'aujourd'hui
    const endDate = new Date();
    endDate.setDate(actualDate.getDate() + 30);

    function handleClickDay(value, action) {
        let isTarget = searchRdv(value);
        if (isTarget !== false){
            setClickedDate(value);
        }
    }

    function handleOpenModal(action, value) {
        setIsDialogOpen(isDialogOpen => !isDialogOpen);
        setModalAction("modif"); 
        setRdvDate([todayRdv[0].date, value.jeune]);
    }

    function handleDeleteRdv(value) {
        setIsDialogOpen(isDialogOpen => !isDialogOpen);
        setModalAction("delete");
        setRdvDate([todayRdv[0].date, value.jeune]);
    }

    return (
      <section className=" bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed pb-8">
        <section className="grid xl:grid-cols-[30%_70%] xl:w-[97%] mx-auto mb-8">
          <h1 className="font-title text-4xl md:text-5xl py-8 md:pt-16 md:pb-10 xl:py-10 text-center xl:col-start-1 xl:col-end-3">Votre Espace suivi</h1>
          <div className="grid order-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-1 w-[98%] md:w-[95%] mx-auto">
            <div className="text-center p-3 h-fit m-4 border-2 bg-main-white rounded-lg grid gap-4">
              <h3 className="text-3xl mt-2 "><i className="fa-solid fa-handshake mr-2 text-main-pink text-2xl "></i>Vos rendez-vous du {clickedDate.toLocaleDateString()} : </h3>
                <ul className="leading-10 flex flex-col text-lg">
                    { todayRdv.length > 0 ? todayRdv.map((rdv, index) => {

                        return (
                            <div class="flex justify-center items-center" key={index}>
                            { rdv.heure == undefined ? null :
                                <>
                                    <button onClick={() => handleDeleteRdv(rdv)}><i className="fa-xmark fa-solid text-main-red ml-2 mt-2 pt-[0.2px] text-xl"></i></button>
                                    <button onClick={() => handleOpenModal("conseiller", rdv)}><i className="fa-pen fa-solid text-blue-700 ml-4 text-sm"></i></button>
                                    <li className="ml-auto" key={index}>Rendez vous à <strong>{rdv.heure}h</strong> avec <em>{rdv.jeune}.</em></li>
                                </>
                            }
                            </div>
                        )
                    }) : null } 
                </ul>
            </div>
            <div className="text-center p-3 m-4 border-2 bg-main-white rounded-lg grid gap-4">
              <h3 className="text-3xl mt-2 "><i className="fa-solid fa-user mr-2 text-main-pink text-2xl "></i>Ajoutez un membre : </h3>
              <Link to={'/Formulaire/:addMember'} className="bg-main-pink font-bold w-full my-auto sm:w-[80%] px-2 md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg"
                >
                Ajouter
              </Link>
            </div>
            <div className="text-center bg-main-white p-3 m-4 border-2 rounded-lg grid gap-4">
              <h3 className="text-3xl mt-2 "><i className="fa-solid fa-users mr-2 text-main-pink text-2xl "></i>Tout vos suivis : </h3>
              <Link to={'/Formulaire/:addMember'} className="bg-main-pink font-bold w-full my-auto sm:w-[80%] px-2 md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg"
                >
                Voir
              </Link>
            </div>
          </div>
          <Calendar className="!w-[100vw] sm:!w-[90%] my-auto order-1 md:order-3" maxDate={endDate} minDate={actualDate} maxDetail="month" onClickDay={(value) => handleClickDay(value, "add")}
           tileDisabled={({date}) =>  [0,6].includes(date.getDay())   } 
           tileClassName={({date, view}) => { 
                if ( date.getTime() > endDate.getTime() ) {
                  return 'red';
                }
                for (let i = 0; i < allRdv.length; i++) {
                    let gotRdv = allRdv[i][0].date.toLocaleDateString() == date.toLocaleDateString();
                    if (gotRdv !== false) {
                        return 'rdv';
                    }
                }}
            }
            >
            </Calendar>
            <ModalRdv isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} clickedDate={clickedDate} handleClickDay={handleClickDay}
            modalAction={modalAction} rdvDate={rdvDate} endDate={endDate} actualDate={actualDate} setClickedDate={setClickedDate} action={"conseiller"}/>
        </section>
      </section>
    );
}

export default CalendarPageConseiller;