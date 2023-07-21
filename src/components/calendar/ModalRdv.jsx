import { useEffect, useRef, useState } from "react";

import GestionJeune from "./GestionJeune";

const ModalRdv = ({ isDialogOpen, setIsDialogOpen, clickedDate, modalAction, rdvDate, endDate, actualDate, setClickedDate, action}) => {
    const [hours, setHours] = useState([]);
    const [isOpenStep, setIsOpenStep] = useState(0);

    const dialog = useRef(dialog);

    useEffect(() => { 
      addHours();
      if (isDialogOpen == true) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }, [isDialogOpen])

    function addHours() {
      for (let i = 9; i <= 16; i++) {
        setHours(hours => [...hours, i]);
      }
    }
    return (
      <dialog ref={dialog} className="dialog w-[100vw] sm:w-[95%] lg:w-[70vw] xl:w-[50vw] h-fit max-h-auto border-main-pink rounded-lg border-2">
        <button type="button" onClick={() => setIsDialogOpen(isDialogOpen => ! isDialogOpen)} className="absolute top-3 right-2.5 bg-main-pink text-main-white border
        hover:bg-main-white hover:text-main-pink hover:border-main-pink rounded-lg text-md p-1.5 ml-auto inline-flex items-center" >
          <svg aria-hidden="true" className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close modal</span>
        </button>
        <GestionJeune isOpenStep={isOpenStep} setIsOpenStep={setIsOpenStep} hours={hours} clickedDate={clickedDate} modalAction={modalAction} rdvDate={rdvDate} endDate={endDate} actualDate={actualDate} setClickedDate={setClickedDate} action={action}/>
      </dialog>
    )
}
export default ModalRdv;