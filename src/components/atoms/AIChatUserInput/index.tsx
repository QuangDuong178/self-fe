import "./style.scss"
import React, {useRef, useState} from "react";

type AIChatUserInputProps = {
    text: string,
    inputContent: string | undefined,
    handleSendMessage: (input: string) => void
    cssClass?: string,
}

export const AIChatUserInput = (props: AIChatUserInputProps) => {
    const {text, inputContent, cssClass, handleSendMessage} = props;
    const inputRef = useRef("");
    const [showButton, setShowButton] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const handleClickSubmit = () => {

        if (inputRef.current.value) {
            setError(null)
            handleSendMessage(inputRef.current.value.toString())
            setShowButton(false);
        } else {
            setError("Error")
        }

    }
    return (
        <div className={`ai-chat-user-input-atoms px-4 py-3 rounded-[10px] bg-white ` + cssClass}>
            <p className={"mb-2.5"}>
                {text}
            </p>
            <textarea
                defaultValue={inputContent}
                disabled={true}
                ref={inputRef}
                rows={3}
                className={"rounded-[10px] resize-none border w-full flex py-1.5 px-4 bg-neutral-100"}/>

            {showButton && (
                <div className={"flex justify-between items-center mt-2.5"}>
                    <p className={"text-red-600"}>{error}</p>
                    <button onClick={handleClickSubmit}
                            className={"btn-next-step py-3.5 px-5"}>
                        次のステップへ
                    </button>
                </div>
            )}

        </div>
    )
}