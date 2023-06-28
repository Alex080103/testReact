import { useState } from "react";
import UnderAccordion from "./UnderAccordion"
import UnderAccordionContent from "./UnderAccordionContent"

const AccordionContainer = ({title, marginLeft, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <UnderAccordion title={title} setIsClicked={setIsOpen} isOpen={isOpen} marginLeft={marginLeft}/> 
            <UnderAccordionContent isOpen={isOpen} children={children}>

            </UnderAccordionContent>
        </div>

    )
}
export default AccordionContainer;