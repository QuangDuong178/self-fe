import  "./style.scss"

type UserChatTextProps = {
    text: string,
    cssClass?: string,
}

export const UserChatText = (props: UserChatTextProps) => {
    const {text, cssClass} = props;
    return (
        <div className={`w-100 pl-14 relative ` + cssClass}>
            <div className={`user-chat-atoms px-4 py-3 rounded-[10px]`}>
                <p className={""}>
                    {text}
                </p>
            </div>
        </div>
    )
}