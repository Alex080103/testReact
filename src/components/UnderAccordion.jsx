const UnderAccordion = ({title, id, setIsClicked, isClicked , marginLeft}) => {
    const handleClick = () => {
        if (isClicked == id ) {
            setIsClicked("0")
        } else {
        setIsClicked(id);
        }
    }
    return (
        <div className={`grid grid-cols-[10%_90%] items-center mb-2 ${ marginLeft !== undefined ? "ml-8" : "ml-4"}`}>
            <svg aria-hidden="true" onClick={handleClick} 
            className={`${ marginLeft !== undefined ? "w-6 h-6" : "w-7 h-7 bg-black text-main-white"} ${ isClicked == id ? "rotate-[270deg]" : "rotate-180"}  transition-all duration-[0.8s] border-2 rounded-full  cursor-pointer ${ marginLeft !== undefined ? "sm:w-8 sm:h-8" : "sm:w-10 sm:h-10"} `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <h3 className={`text-xl italic sm:text-2xl ml-2`}>{title}</h3>
        </div>

    )
}

export default UnderAccordion;