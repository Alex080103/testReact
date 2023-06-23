const CardTeam = ({content}) => {
    return (
        <div className="flex-col flex h-[500px] w-[350px]">
            <div className={`h-3/4 bg-[url('${content.portrait}')] bg-cover w-[350px] bg-top rounded-t-lg`}>
            </div>
            <div className="h-1/4 text-center border-4 border-gray-800 flex flex-wrap content-center justify-center  border-t-0 rounded-b-lg">
                <h4 className="font-bold text-2xl w-[100%]">{content.nom} <span classNameName="uppercase italic">{content.prenom}</span></h4>
                <p className="italic">{content.role}</p>
            </div>
        </div>
    )
}

export default CardTeam;