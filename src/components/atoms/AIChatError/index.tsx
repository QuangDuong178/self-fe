import  "./style.scss"
import dallE from "@/assets/img/dall-e.png";
import React from "react";

type AIChatErrorProps = {
    text: string,
    botName: string,
    cssClass?: string,
}

export const AIChatError = (props: AIChatErrorProps) => {
    const {text, cssClass, botName} = props;
    return (
        <div className={`w-100 pl-14 relative ` + cssClass}>
            <img src={dallE} className={"rounded-full border-4 absolute top-1 left-1.5"}/>
            <p className={"chatbot-name mb-1.5"}>{botName}</p>
            <div className={`text-typing ai-chat-error px-4 py-3 rounded-[10px]` }>
                <p className={""}>
                    {text}
                </p>
            </div>
        </div>
    )
}