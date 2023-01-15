export default function InformationPiece(props: {
    title: string
    value: number
}) {
    return (
        <div className={"pb-6"}>
            <h3 className={"text-sm font-semibold mb-3"}>{ props.title }</h3>
            <p className={"text-2xl font-bold"}>{ props.value }</p>
        </div>
    )
}