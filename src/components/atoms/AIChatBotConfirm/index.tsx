import reflectIcon from '@/assets/img/reflect-icon.png';
import "./style.scss"
import React, {useEffect, useState} from "react";
import {AgentChat} from "@/types/models/ai-agent";
import {AgentNoteType} from "@/types/enums/ai-chatbot";
import {NEXT_STEP_TEXT_DEFAULT} from "@/constant/messages.ts";

type AIChatBotConfirmProps = {
    reflect: (content: string) => void,
    nextStep: (c) => void,
    cssClass?: string,
    chatContent: AgentChat
}

export const AIChatBotConfirm = (props: AIChatBotConfirmProps) => {
    const {reflect, cssClass, nextStep, chatContent} = props;
    const [showReflect, setShowReflect] = useState<boolean>(chatContent.reflectFlg ?? true);
    const [showNextStep, setShowNextStep] = useState<boolean>(chatContent.nextFlag ?? true);
    const [nextStepDisable, setNextStepDisable] = useState<boolean>(!chatContent.answer?.length);
    const [reflectStatus, setReflectStatus] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [content, setContent] = useState<string>(chatContent.answer ?? '');

    useEffect(() => {
        if (typeof chatContent.nextFlag !== "undefined" && !chatContent.nextFlag) {
            setError('');
            setShowReflect(false);
            setReflectStatus(true);
            setShowNextStep(false);
        }
    }, [chatContent.nextFlag]);

    const handleClickReflect = () => {
        if (nextStepDisable) return;
        reflect(content);
        setError('');
        setShowReflect(false);
        setReflectStatus(true);
    }

    const changeNextStepButtonEnableStatus = (e) => {
      setError('');
      if (e.target.value.length > 0) {
          setContent(e.target.value);
          setNextStepDisable(false);
          return;
      }
      setContent('');
      setNextStepDisable(true);
    }

    const nextTo = () => {
        if (!reflectStatus && chatContent.reflectFlg) {
            setError('反映するボタンでご確認お願い致します。');
            return;
        }
        let text = ''
        if (chatContent.currentNode == AgentNoteType.SUGGEST) {
            text = content
        }
        nextStep(text);
        setShowNextStep(false);
    }
    return (
        <>
            <div className={`ai-chat-atoms px-4 pt-3 pb-8 rounded-[10px] bg-white relative ` + cssClass}>
                {chatContent.title !== '' &&
                    <p className={"title mb-1"}>
                        {chatContent.title}
                    </p>
                }
                <p className={"mb-2.5 whitespace-pre-line"}>
                    {chatContent?.content}
                </p>
                {chatContent.description &&
                    <p className={"whitespace-pre-line mb-1"}>
                        {chatContent.description}
                    </p>
                }
                <textarea
                    disabled={reflectStatus || !showNextStep}
                    onChange={changeNextStepButtonEnableStatus}
                    rows={3}
                    className={"rounded-[10px] py-1.5 border w-full flex py-1.6 px-4 resize-none " + (reflectStatus || !showNextStep ? 'bg-neutral-100' : 'bg-white')}
                    defaultValue={chatContent.answer || ''}/>

                {showReflect &&
                    <div onClick={handleClickReflect}
                         className={"reflect absolute right-4 bottom-1 flex mt-1.5 items-center " + (nextStepDisable ? 'opacity-50': '' )}>反映する <img
                        src={reflectIcon} alt={""}/></div>
                }

                {error !== '' &&
                    <div className={"absolute left-4 bottom-2 text-red-600"}>
                        {error}
                    </div>
                }
            </div>
            {showNextStep &&
                <div className={"flex justify-end items-center my-6"}>
                    <button disabled={nextStepDisable} type={"button"} onClick={nextTo}
                            className={"btn-next-step py-3.5 px-5 " + (nextStepDisable ? 'btn-disable': '')}>
                        {chatContent.nextStepText ? chatContent.nextStepText : NEXT_STEP_TEXT_DEFAULT }
                    </button>
                </div>
            }
        </>
    )
}