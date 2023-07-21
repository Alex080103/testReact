const ProgressSteps = ({isOpenStep, numberOfSteps}) => {
    const progressSteps = [];
    for (let i = 0; i < numberOfSteps; i++) {
        progressSteps.push(
        <div className="flex" key={i}>
            <i className={`${ isOpenStep == i ? "fa-solid text-gray-600 animate-pulse" : isOpenStep > i ? "fa-solid text-main-pink" : "fa-regular text-main-gray"} fa-circle text-xl relative`}>
                { isOpenStep == i || isOpenStep > i ? <i className="fa-solid absolute text-sm text-main-white left-[3px] top-[5px] fa-check"></i> : ""}
            </i>
            { i !== numberOfSteps - 1 ? 
            <svg width="20" height="20" className="my-auto mx-2">
              <line x1="0" y1="8" x2="50" y2="8" stroke="black" strokeWidth="2" />
            </svg> 
            : ""}
        </div>
        )
    }
    // console.log(progressSteps);
    return (
        <div className="flex mx-auto mt-4 ">
            {progressSteps.map(step => {
                return (
                    step
                )
            })}
        </div>
    )
}
export default ProgressSteps;