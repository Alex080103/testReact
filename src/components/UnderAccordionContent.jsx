const UnderAccordionContent = ({id, isClicked, children}) => {
    if (id == isClicked) {
        let open = true;
    }
        return (
            <div className={`mb-4 transition-all duration-[0.3s] ease-out overflow-hidden ${ isClicked == id ? "opacity-100 max-h-[100%]" : "opacity-0 max-h-0 "}`}>
                { children }
            </div>
        )
    // } else {

    // }
    }

export default UnderAccordionContent;