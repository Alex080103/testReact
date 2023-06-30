const InfoPanel = ({error, setError}) => {
    console.log(error);
    return (
        <div className={`fixed  top-[85px] md:top-[105px] z-[999] right-2 ${ error !== undefined ? "" : "translate-x-[100vw]"} 
        transition-transform bg-main-red ease-in text-main-white p-8 text-xl`}>
            <button onClick={() => setError()} className="w-6 h-6 absolute top-2 right-2">
                <svg aria-hidden="true"  fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            { error !== undefined ? error : ""
            }
        </div>
    )
}
export default InfoPanel;