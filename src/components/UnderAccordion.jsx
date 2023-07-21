const UnderAccordion = ({title, setIsClicked, isOpen,  marginLeft}) => {
    const handleClick = () => {
        setIsClicked((isOpen => !isOpen));
    }
    return (
        <div className={`grid grid-cols-[10%_90%] items-center mb-2 ${ marginLeft == 8 ? "ml-8 md:ml-10" : marginLeft == 4 ? "ml-4" : ""}`}>
            <svg aria-hidden="true" onClick={handleClick} 
            className={`${ marginLeft == 8 ? "w-6 h-6 sm:w-8 sm:h-8 mt-2" : marginLeft == 4 ? "w-7 h-7 sm:w-10 sm:h-10 bg-black text-main-white" : "h-[32px] w-[32px] sm:!w-[48px] sm:!h-[48px] bg-main-pink text-main-white "} ${ isOpen == true ? "rotate-[270deg]" : "rotate-180"}  transition-all duration-[0.8s] border-2 rounded-full  cursor-pointer `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <h3 onClick={handleClick} className={` cursor-pointer text-xl italic ${ marginLeft == undefined ? "sm:text-3xl" : "sm:text-2xl"} ${ isOpen == true ? "font-bold" : ""} ml-2`}>{title}</h3>
        </div>

    )
}

export default UnderAccordion;