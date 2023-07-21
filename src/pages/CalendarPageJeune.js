import { forwardRef, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import ModalRdv from "../components/calendar/ModalRdv";
import MultiSteps from "../components/multiSteps/MultiSteps";


const CalendarPageJeune = () => {
    const [actualDate, setActualDate] = useState(new Date());
    const [clickedDate, setClickedDate] = useState(new Date());
    const [rdvDate, setRdvDate] = useState();
    const [isDialogOpen, setIsDialogOpen] = useState (false);
    const [modalAction, setModalAction] = useState("add");

    useEffect(() => {
      let rdvDateUpdate = new Date( 2023, 6 ,25)
      // console.log(rdvDateUpdate);
      rdvDateUpdate.setHours(14);
      setRdvDate(rdvDateUpdate);
    }, [])

    // Définit la date maximum de prise de rdv à partir d'aujourd'hui
    const endDate = new Date();
    endDate.setDate(actualDate.getDate() + 30);

    function handleClickDay(value, action) {
      if (value.getDate() == rdvDate.getDate()) {
        handleModifRdv("modif");
        return false;
      }
      setIsDialogOpen(isDialogOpen => !isDialogOpen);
      setClickedDate(value);
      setModalAction(action);
    }

    function handleModifRdv(action) {
      setIsDialogOpen(isDialogOpen => !isDialogOpen);
      setModalAction(action);
    }

    return (
      <section>
        <section className="grid xl:grid-cols-[30%_70%] xl:w-[97%] mx-auto  ">
          <h1 className="font-title text-4xl md:text-5xl py-8 md:pt-16 md:pb-10 xl:py-10 text-center xl:col-start-1 xl:col-end-3">Votre Espace suivi</h1>
          <div className="grid order-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-1 w-[98%] md:w-[95%] mx-auto">
            <div className="text-center p-3 m-4 border-2 rounded-lg grid gap-4">
              <h3 className="text-3xl mt-2 "><i className="fa-solid fa-handshake mr-2 text-main-pink text-2xl "></i>Votre prochain rendez-vous : </h3>
              <p className="italic text-xl">Le <strong>25 juillet 2023</strong> à 14h avec Sylvie Duruisseau.</p>
              <button onClick={ () => handleModifRdv("modif")} type="submit" className="bg-main-pink font-bold w-full sm:w-[80%] px-2 md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg"
                >
                Demander une modification
              </button>
            </div>
            <div className="text-center p-3 m-4 border-2 rounded-lg grid gap-4">
              <h3 className="text-3xl mt-2 "><i className="fa-solid fa-user mr-2 text-main-pink text-2xl "></i>Votre conseillère attitrée : </h3>
              <p className="italic text-xl">Sylvie Duruisseau.</p>
              <button type="submit" className="bg-main-pink font-bold w-full sm:w-[80%] px-2 md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg"
                >
                Contact
              </button>
            </div>
            <div className="text-center p-3 m-4 border-2 rounded-lg grid gap-4 w-[95%] md:col-start-1 md:w-1/2 mx-auto xl:w-[92%] md:col-end-3 xl:col-start-auto xl:col-end-auto">
              <h3 className="text-3xl mt-2 "><i className="fa-solid fa-briefcase mr-2 text-main-pink text-2xl "></i>Nos ateliers : </h3>
              <p className="italic text-xl">Pas d'atelier prévu.</p>
              <button type="submit" className="bg-main-pink font-bold w-full sm:w-[80%] px-2 md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg"
                >
                Décourvir
              </button>
            </div>
          </div>
          <Calendar className="!w-[100vw] sm:!w-[90%] order-1 md:order-3" maxDate={endDate} minDate={actualDate} maxDetail="month" onClickDay={(value) => handleClickDay(value, "add")}
           tileDisabled={({date}) => rdvDate !== undefined && [0,6].includes(date.getDay())   } 
           tileClassName={({date, view}) => { 
            if ( date.getTime() > endDate.getTime() ) {
              return 'red';
            }
            if ( rdvDate == undefined) {
              return '';
            }
            if (date.toDateString() == rdvDate.toDateString() ) {
             return 'rdv';
           }}}
           tileContent={({date, view}) => { 
            
            if ( rdvDate == undefined) {
              return '';
            }
            if (date.toDateString() == rdvDate.toDateString() ) {
             return <p className="block text-center sm:p-2">RDV {rdvDate.getHours()}H</p>;
           }}}>
            </Calendar>
          { isDialogOpen == true ?
        <ModalRdv isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} clickedDate={clickedDate} handleClickDay={handleClickDay}
        modalAction={modalAction} rdvDate={rdvDate} endDate={endDate} actualDate={actualDate} setClickedDate={setClickedDate} />
    : ""}
        </section>
      </section>
    );
}

export default CalendarPageJeune;