import "./style.scss";
import {AiPrompt} from "@/types/models/ai-prompt.ts";
import {message} from "antd";
import React from "react";

type AIPromptProps = {
    aiPrompt: AiPrompt
}

export const AiPromptHome = (props: AIPromptProps) => {
    const {name, content} = props.aiPrompt;
    const [messageApi, contextHolder] = message.useMessage();
    const handleCopy = () => {
        if(navigator.clipboard){
            navigator.clipboard.writeText(content)
                .then(() => {
                    messageApi.open({
                        type: 'success',
                        content: 'The content have been copied to your clipboard',
                        duration: 2,
                        key: "copy-success"
                    });
                })
                .catch((error) => {
                    messageApi.open({
                        type: 'error',
                        content: 'Lỗi copy',
                        duration: 2,
                        key: "copy-error"
                    });
                });
        }


    }

    return (
        <div className={"ai-prompt-home-molecules pt-4 px-2 pb-2 bg-white"}>
            {contextHolder}
            <div className={"title"}>
                {name}
            </div>
            <div className={"content p-2 mt-2"}>
                <div>
                    {content}
                </div>

                <div className={"copy-icon flex justify-end"}>

                        <svg onClick={handleCopy} xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g clipPath="url(#clip0_554_6257)">
                            <path
                                d="M4.64286 0H7.41295C7.69643 0 7.96875 0.10957 8.16964 0.30293L9.68527 1.76172C9.88616 1.95508 10 2.21719 10 2.49004V7.21875C10 7.78809 9.52009 8.25 8.92857 8.25H4.64286C4.05134 8.25 3.57143 7.78809 3.57143 7.21875V1.03125C3.57143 0.461914 4.05134 0 4.64286 0ZM1.07143 2.75H2.85714V4.125H1.42857V9.625H5.71429V8.9375H7.14286V9.96875C7.14286 10.5381 6.66295 11 6.07143 11H1.07143C0.479911 11 0 10.5381 0 9.96875V3.78125C0 3.21191 0.479911 2.75 1.07143 2.75Z"
                                fill="#7C7C7C"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_554_6257">
                                <rect width="10" height="11" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}