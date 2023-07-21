import { useEffect, useRef, useState } from "react";
import MultiSteps from "../multiSteps/MultiSteps";
import Calendar from "react-calendar";
import ProgressSteps from "../multiSteps/ProgessSteps";

const ModalRdv = ({ isDialogOpen, setIsDialogOpen, clickedDate, modalAction, rdvDate, endDate, actualDate, setClickedDate}) => {
    const [hours, setHours] = useState([]);
    const [isOpenStep, setIsOpenStep] = useState(0);
    const [justification, setJustification] = useState("");
    const [newRdvDate, setNewRdvDate] = useState();

    const textarea= useRef(textarea);

    const dialog = useRef(dialog);

    useEffect(() => { 
      addHours();
      if (isDialogOpen == true) {
        dialog.current.showModal();
      }
    }, [isDialogOpen])

    function addHours() {
      for (let i = 9; i <= 16; i++) {
        setHours(hours => [...hours, i]);
      }
    }

    function modifRdv(value) {
      setNewRdvDate(value);
    }

    function modifRdvHour(event) {
      setNewRdvDate(prevDate => {
        const updatedDate = new Date(prevDate);
        updatedDate.setHours(event.target.value);
        return updatedDate;
      });
    }

      function handleSubmit (event, action) {
        if (action == "justify") {
          setJustification(textarea.current.value)
        }
        event.preventDefault();
        setIsOpenStep(isOpenStep => isOpenStep+1);

        // form = new FormData(event.target);
        // axios.post('../php/index.php',
        // form,
        //  {headers: { 'Content-Type': 'multipart/form-data' }}).then(function(response) {
        //     setResponse(response.data);
        //     console.log(response.data);
        //     if (response.data == true) {
        //         setIsOpen((isOpen) => !isOpen);
        //         // setDatas(showDatas.push(content));
        //         if (type == ":post") {
        //             fetchPost();
        //         } else {
        //             fetchTeam();
        //         }
        //     } else if (response.data == false) {
        //         setError("Erreur de traitement");
        //     } else if (response.data.error !== null) {
        //         setError(response.data.error);
        //     }
        // }).catch (error => {
        //     setError("Une erreur est survenue");
        // }
        // )
    }


    return (
      <dialog ref={dialog} className="dialog w-[100vw] sm:w-[95%] lg:w-[70vw] xl:w-[50vw] h-fit max-h-auto border-main-pink rounded-lg border-2">
        <button type="button" onClick={() => setIsDialogOpen(isDialogOpen => ! isDialogOpen)} className="absolute top-3 right-2.5 bg-main-pink text-main-white border
        hover:bg-main-white hover:text-main-pink hover:border-main-pink rounded-lg text-md p-1.5 ml-auto inline-flex items-center" >
          <svg aria-hidden="true" className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-2">
        { modalAction == "add" ? 
        <form onSubmit={ () => handleSubmit()} className="grid p-2">
          <p className="text-3xl md:text-4xl font-title text-center mt-2">Prendre rendez vous</p>
          <p className="mt-4 mb-2 text-center text-xl italic">Avec votre conseillère Christine BINET,<br></br> le {clickedDate.toLocaleDateString()}.</p>
          <select className="w-full sm:w-[70%] text-center text-3xl border-main-pink border-2 rounded-lg bg-gray-100 focus:outline-main-pink mx-auto">
            { hours.map((hour, index) => {
              return (
                  <option value={hour} key={index}>
                    {hour}h
                  </option>
                )
              })
            }
          </select>
          <p className="mb-4 mt-2 italic md:text-lg text-center">Le rendez vous dure en moyenne de 45 min à 1 heure.</p>
          <button type="submit" className="bg-main-pink font-bold w-full md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg" onClick={() => dialog.current.close()}>Valider
          </button>  
        </form>
        : modalAction == "modif" ?
        <MultiSteps isOpenStep={isOpenStep} numberOfSteps={4}  content={[

          // GESTION JUSTIFICATION
          <form onSubmit={ (event) => handleSubmit(event, "justify")} className="grid p-2">
            <p className="text-3xl mt-8 md:text-4xl font-title text-center sm:mt-4">Modifier le rendez vous</p>
            <p className="mt-4 mb-2 text-center text-xl italic">Avec votre conseillère Christine BINET,<br></br> <strong>le {rdvDate.toLocaleDateString()}</strong></p>
            <label for="justification" className="ml-4 text-lg sm:text-xl italic underline mb-2 mt-4 text-center">Merci de justifier votre demande</label>
            <textarea defaultValue={justification} onChange={(event) => setJustification(event.target.value)} ref={textarea} className="border-2 p-2 rounded-lg w-[99%] border-main-pink mb-4 md:w-[70%] mx-auto" rows={5} id="justification" name="justification">
            </textarea>
            
            <button type="submit" className={` ${ justification !== "" ? "bg-main-pink" : "pointer-none bg-main-gray pointer-events-none cursor-wait"} font-bold  w-full md:w-1/2 py-2 text-main-white border mx-auto
             hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg`}
            >Suivant
            </button>
            
            <ProgressSteps isOpenStep={isOpenStep} numberOfSteps={4}/>
          </form>
          ,
          // GESTION DATE
          <form onSubmit={ (event) => handleSubmit(event)} className="grid p-2">
            <p className="text-3xl mt-8 md:text-4xl sm:mt-4 mb-2 font-title text-center">Choisissez la nouvelle date<br></br> de votre rendez-vous</p>
            { newRdvDate !== undefined ? <p className="text-center text-lg mt-4"> Vous avez séléctionné le {newRdvDate.toLocaleDateString()} comme nouvelle date de rdv.</p> : "" }
            <Calendar onClickDay={(value) => modifRdv(value)} maxDate={endDate} minDate={actualDate} 
            maxDetail="month" tileDisabled={({date}) => [0,6].includes(date.getDay())} />
            <div className="flex flex-col md:flex-row gap-2  mt-4">
              <button onClick={() => setIsOpenStep(isOpenStep => isOpenStep - 1)} className="bg-main-pink font-bold w-full md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg" >
                Retour
              </button>
              <button type="submit" className={` ${ newRdvDate !== undefined ? "bg-main-pink" : "pointer-none bg-main-gray pointer-events-none cursor-wait"} font-bold  w-full md:w-1/2 py-2 text-main-white border mx-auto
             hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg`}
            >Suivant
            </button>
            </div>
            <ProgressSteps isOpenStep={isOpenStep} numberOfSteps={4}/>
          </form>
          , 
          // GESTION HEURE
          <form onSubmit={ (event) => handleSubmit(event)} className="grid p-2"> 
            <p className="text-3xl mt-8 mb-4 md:text-4xl sm:my-4 font-title text-center">Choisissez la nouvelle heure<br></br> de votre rendez-vous</p>
            <label for="justification" className="ml-4 text-lg sm:text-xl italic underline mb-2 mt-4 text-center">Choissisez l'heure du nouveau rendez-vous</label>
            <select onChange={(value, event) => modifRdvHour(value, event)} className="w-full md:w-[70%] text-center text-3xl border-main-pink border-2 rounded-lg bg-gray-100 focus:outline-main-pink mx-auto">
              { hours.map((hour, index) => {
                return (
                    <option value={hour} key={index} >
                      {hour}h
                    </option>
                  )
                })
              }
            { newRdvDate !== undefined ? <p className="text-center text-lg mt-4"> Vous avez séléctionné le {newRdvDate.toLocaleDateString()} comme nouvelle date de rdv.</p> : "" }
            </select>
            <p className="mb-4 mt-2 italic md:text-lg text-center">Le rendez vous dure en moyenne de 45 min à 1 heure.</p>
            <div className="flex flex-col md:flex-row gap-2  mt-4">
              <button onClick={() => setIsOpenStep(isOpenStep => isOpenStep - 1)} className="bg-main-pink font-bold w-full md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg" >
                Retour
              </button>
              <button type="submit" className={` ${ newRdvDate !== undefined && newRdvDate.getHours() !== 0 ? "bg-main-pink" : "pointer-none bg-main-gray pointer-events-none cursor-wait"} font-bold  w-full md:w-1/2 py-2 text-main-white border mx-auto
               hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg`}
              >Suivant
              </button>
            </div>

            <ProgressSteps isOpenStep={isOpenStep} numberOfSteps={4}/>

          </form>
          ,
          // GESTION VALIDATION
          <form className="grid p-2">
            <p className="text-3xl mt-8 mb-4 md:text-4xl sm:my-4 font-title text-center">Confirmer votre nouveau <br></br> rendez-vous</p>
            <label for="justification" className="ml-4 text-lg sm:text-xl italic underline mb-2 mt-4 text-center">Voici votre justification :</label>
            <textarea onChange={(event) => setJustification(event.target.value)} ref={textarea} defaultValue={justification} className="border-2 p-2 w-[99%] rounded-lg border-main-pink mb-4 md:w-[70%] mx-auto" rows={5} id="justification" name="justification">
            </textarea>
            { newRdvDate !== undefined ? <p className="text-center text-lg md:text-xl mt-4"> Confirmez vous demander une nouvelle date de rdv le {newRdvDate.toLocaleDateString()} à {newRdvDate.getHours()}h.</p> : "" }
            <p className="mb-2 mt-4 italic md:text-lg text-center">Le rendez vous dure en moyenne de 45 min à 1 heure.</p>
            <p className="mb-4 mt-2 italic md:text-lg text-center">Une réponse vous seras fait par mail et sera visible sur votre espace personnel en cas de validation.</p>
            <div className="flex flex-col md:flex-row gap-2  mt-4">
              <button onClick={() => setIsOpenStep(isOpenStep => isOpenStep - 1)} className="bg-main-pink font-bold w-full md:w-1/2 py-2 text-main-white border mx-auto hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg" >
                Retour
              </button>
              <button type="submit" className={` ${ newRdvDate !== undefined && justification !== "" ? "bg-main-pink" : "pointer-none bg-main-gray pointer-events-none cursor-wait"} font-bold  w-full md:w-1/2 py-2 text-main-white border mx-auto
             hover:bg-main-white hover:text-main-pink hover:border transition-all hover:border-main-pink rounded-lg`}
              >Valider
              </button>
            </div>
            <ProgressSteps isOpenStep={isOpenStep} numberOfSteps={4}/>
            <input type="hidden" name="newRdvDate" value={newRdvDate} />
          </form>
        ]}/>
          
        : null }
        </div>
      </dialog>
    )
}
export default ModalRdv;