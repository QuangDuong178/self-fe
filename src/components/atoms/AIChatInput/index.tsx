import "./style.scss"
import TextArea from "antd/lib/input/TextArea";
import {useState} from "react";

type AIChatInputProps = {
    isWaiting: boolean,
    placeholder: string,
    handleSubmit: (content: string) => void,
    cssClass: string
}
export const AIChatInput = (props: AIChatInputProps) => {
    const {placeholder, handleSubmit, cssClass, isWaiting} = props
    const [content, setContent] = useState<string>('');
    const onSubmitChat = (e) => {
        e.preventDefault();
        if (!isWaiting && content.length > 0) {
            handleSubmit(content);
            setContent('');
        }
    };

    const changeContent = (e) => {
        setContent(e.target.value);
    };

    return (
        <form onSubmit={onSubmitChat} className={cssClass + " ai-chat-input-atom "} style={{position: "relative"}} autoComplete={"off"}>
            <input disabled={isWaiting} type={"text"} onChange={changeContent} id={"input-chat"} placeholder={placeholder} value={content} />
            <button disabled={isWaiting} type={"submit"}/>
        </form>

    )
}