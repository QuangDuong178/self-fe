import {AIChatText} from "@/components/atoms/AIChatText";
import {AIChatBotConfirm} from "@/components/atoms/AIChatBotConfirm";
import menuIcon from "@/assets/img/menu-icon.png"
import dallE from "@/assets/img/dall-e.png"
import "./style.scss"
import {useModalAIAgentOrganism} from "@/composables/useModalAIAgentOrganism.ts";
import {AIChatType} from "@/types/enums/ai-chatbot.ts";
import {AIChatNote} from "@/components/atoms/AIChatNote";
import {AIChatInput} from "@/components/atoms/AIChatInput";
import {BOT_INTRO} from "@/constant/messages";
import {BOT_NAME} from "@/constant/common";
import {UserChatText} from "@/components/atoms/UserChatText";
import {AIChatError} from "@/components/atoms/AIChatError";
import {AIChatWaiting} from "@/components/atoms/AIChatWaiting";

export const ModalAIAgentOrganism = () => {
    const {
        sendmail,
        showSendMail,
        isWaiting,
        aiAgentChatList,
        aiAgentNotes,
        handleInsertAgentNotes,
        onSubmitChat,
        handleNextStep,
    } = useModalAIAgentOrganism();

    return (
        <div className={'modal-ai-agent-organism ml-4 relative'}>
            <div className="flex flex-row w-full">
                <div className="basis-2/5 flex flex-col justify-between relative ai-agent-chat h-screen">
                    <img src={menuIcon} height={35} width={35} className={"absolute top-4"}/>
                    <div id={"chat-container"} className={"mt-16 overflow-y-auto"}>
                        <div className={"mr-6"}>
                            <div className={"w-100 pl-14 relative mb-6"}>
                                <img
                                    src={dallE}
                                    className={'rounded-full border-4 absolute top-1 left-1.5'}
                                />
                                <p className={"chatbot-name mb-1.5"}>{BOT_NAME}</p>
                                <AIChatText cssClass={'mb-6'} text={BOT_INTRO}/>
                            </div>
                            {aiAgentChatList.length > 0 && aiAgentChatList.map((item, index) => {
                                switch (item.chatType) {
                                    case AIChatType.BOT_CONFIRM :
                                        return (
                                            <div key={index} className={"w-100 pl-14 relative mb-6"}>
                                                {(typeof aiAgentChatList[index - 1] !== "undefined")
                                                    && aiAgentChatList[index - 1].chatType == AIChatType.USER_TYPED &&
                                                    <>
                                                        <img
                                                            src={dallE}
                                                            className={'rounded-full border-4 absolute top-1 left-1.5'}
                                                        />
                                                        <p className={"chatbot-name mb-1.5"}>{BOT_NAME}</p>
                                                    </>
                                                }
                                                <AIChatBotConfirm
                                                    cssClass={""}
                                                    chatContent={item}
                                                    nextStep={(c) => handleNextStep(item, c)}
                                                    reflect={(t) => {
                                                        handleInsertAgentNotes(item, t)
                                                    }}
                                                />
                                            </div>
                                        );
                                    case AIChatType.BOT_TYPED :

                                        return (
                                            <div key={index} className={"w-100 pl-14 relative mb-6"}>
                                                {((typeof aiAgentChatList[index - 1] !== "undefined")
                                                        && aiAgentChatList[index - 1].chatType !== AIChatType.BOT_TYPED) &&
                                                    <>
                                                        <img
                                                            src={dallE}
                                                            className={'rounded-full border-4 absolute top-1 left-1.5'}
                                                        />
                                                        <p className={"chatbot-name mb-1.5"}>{BOT_NAME}</p>
                                                    </>
                                                }
                                                <AIChatText key={index} cssClass={'mb-6'}
                                                            text={item.content}/>
                                            </div>
                                        );
                                    case AIChatType.USER_TYPED :
                                        return (<UserChatText key={index} cssClass={'mb-6'} text={item.content}/>);
                                    default:
                                        return <AIChatError key={index} cssClass={'mb-6'} botName={BOT_NAME}
                                                            text={item.content}/>
                                }
                            })}


                            {isWaiting &&
                                <div className={"mb-6"}>
                                    <AIChatWaiting></AIChatWaiting>
                                </div>

                            }
                            {showSendMail &&
                                <div className={"flex justify-end mb-4"}>
                                    <button onClick={() => sendmail(true)}
                                            className={"btn-next-step py-3.5 px-5 "}>メール送信
                                    </button>
                                    <button onClick={() => sendmail(false)}
                                            className={"btn-next-step py-3.5 px-5  ml-4"}>あとで
                                    </button>
                                </div>
                            }


                        </div>


                    </div>
                    <AIChatInput cssClass={"w-full pr-6 mb-5"} isWaiting={isWaiting} handleSubmit={onSubmitChat} placeholder={"修正して欲しい点をご入力ください。"}/>

                </div>
                <div id={"note-container"} className="basis-3/5 bg-white ai-agent-note h-screen px-10 pt-6 overflow-y-auto py-20">
                    {aiAgentNotes.map((item, index) =>
                        <AIChatNote cssClass={"mb-4"} key={index} title={item.title} content={item.answer || ''}/>
                    )}
                </div>
            </div>
        </div>
    )
};

