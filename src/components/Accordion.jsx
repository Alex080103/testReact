const Accordion = ({title, id, setIsClicked, isClicked}) => {
    const handleClick = () => {
        if (isClicked == id ) {
            setIsClicked("0")
        } else {
        setIsClicked(id);
        }
    }
    return (
        <div className="grid grid-cols-[10%_90%] items-center mb-2 ">
            <svg aria-hidden="true" onClick={handleClick} 
            className={`h-[32px] w-[32px] ${ isClicked == id ? "rotate-[270deg]" : "rotate-180"} text-main-white transition-all duration-[0.8s] border-2 rounded-full bg-main-pink  cursor-pointer sm:!w-[48px] sm:!h-[48px]`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <h3 className={`text-xl italic sm:text-3xl ml-2 `}>{title}</h3>
        </div>
    )
}
export default Accordion;