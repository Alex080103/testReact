const AccordionContent = ({id, isClicked, children}) => {
    if (id == isClicked) {
        return (
            <div className="mb-4">
                { children }
            </div>
        )
    } else {

    }
    }

export default AccordionContent;