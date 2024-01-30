import "./style.scss"

type AIChatNoteProps = {
    title: string,
    content: string,
    cssClass: string,
}

export const AIChatNote = (props: AIChatNoteProps) => {
    const {title, content, cssClass} = props
    return (
        <div className={"ai-agent-note-atom " + cssClass}>
            <h3>
                {title}
            </h3>
            <span className={"rounded-[10px] mt-2 h-fit border w-full flex py-1.5 px-4 bg-neutral-100 whitespace-pre-line"}>
                {content}
            </span>
        </div>
    )
}