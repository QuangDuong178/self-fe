import "./style.scss"
import React, {useEffect, useState} from "react";
import {RENDER_TIME} from "@/constant/common.ts";

type AIChatTextProps = {
    text: string,
    cssClass?: string,
}

export const AIChatText = (props: AIChatTextProps) => {
    const {text, cssClass} = props;

    const [textToDisplay, setTextToDisplay] = useState(text);

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            if (index <= textToDisplay.length) {
                setTextToDisplay(textToDisplay.slice(0, index));
                index += 1;
            } else {
                clearInterval(intervalId);
            }
        }, RENDER_TIME);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`w-100 relative ` + cssClass}>

            <div className={`text-typing ai-chat-atoms px-4 py-3 rounded-[10px] bg-white`}>
                <p className={""}>
                    {textToDisplay}
                </p>
            </div>
        </div>
    )
}