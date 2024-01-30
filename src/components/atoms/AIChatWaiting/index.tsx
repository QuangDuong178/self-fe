import  "./style.scss"

export const AIChatWaiting = () => {
    return (
        <div className={"w-100 pl-14 relative d-flex"}>
            <div className={"p-4 py-2 animation-waiting rounded-[10px] bg-white"}>
                <div className={"waiting waiting-1"}></div>
                <div className={"waiting waiting-2"}></div>
                <div className={"waiting waiting-3"}></div>
            </div>
        </div>
    )
}