const UnderAccordionContent = ({ isOpen, children}) => {

        return (
            <div className={`mb-4 transition-all duration-[0.5s] overflow-hidden ${ isOpen == true ? "opacity-100 max-h-[100%]" : "opacity-0 max-h-0 "}`}>
                { children }
            </div>
        )
    // } else {

    // }
    }

export default UnderAccordionContent;