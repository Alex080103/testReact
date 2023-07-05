const AccordionContent = ({id, isClicked, children}) => {
    // if (id == isClicked) {
        return (
            <div className={`  ease-out overflow-hidden ${ isClicked == id ? "opacity-100 max-h-[100%] mb-4" : "opacity-0 max-h-0"}`}>
                { children }
            </div>
        )
    //     )
    // } else {

    // }
    }

export default AccordionContent;