const AccordionContent = ({id, isClicked, children}) => {
    if (id == isClicked) {
        return (
            <div className="w-10/12 mb-4">
                { children }
            </div>
        )
    } else {

    }
    }

export default AccordionContent;