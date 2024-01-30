import {useContext, useEffect, useState} from "react";
import {AgentChat, AgentNote, AIAgentChats, AIAgentNotes, IdeaQuestions, Question} from "@/types/models/ai-agent.ts";
import {AgentNoteType, AIChatType} from "@/types/enums/ai-chatbot.ts";
import {RepositoriesContext} from "@/plugins/http";
import {
    ERR_MESSAGE,
    FINISH_MESSAGE,
    NEXT_STEP_SOLUTION,
    NEXT_STEP_TEXT_DEFAULT,
    QUESTION_EXAMPLE,
    SENDMAIL_QUESTION
} from "@/constant/messages";
import {IdeaDetailRequestParams, IdeaOverviewRequestParams, IdeaSolutionRequestParams} from "@/types/models/requests";
import {IdeaResponse} from "@/types/models/responses";

export const useModalAIAgentOrganism = () => {
    const $repositories = useContext(RepositoriesContext);
    const [aiAgentNotes, setAIAgentNotes] = useState<AIAgentNotes>([])
    const [ideaQuestions, setIdeaQuestions] = useState<IdeaQuestions>([])
    const [isWaiting, setWaitingStatus] = useState<boolean>(false)
    const [showSendMail, setShowSendMail] = useState<boolean>(false);
    const [aiAgentChatList, setAIAgentChatList] = useState<AIAgentChats>([{
        title: '',
        content: QUESTION_EXAMPLE,
        answer: '',
        chatType: AIChatType.BOT_CONFIRM,
        reflectFlg: false,
        currentNode: AgentNoteType.SUGGEST,
        currentIdx: -1,
    }])

    useEffect(() => {
        scrollFollowAgentChat()
    }, [aiAgentChatList])

    useEffect(() => {
        scrollFollowAgentNotes()
    }, [aiAgentNotes])

    const sleep = (ms: number = 1000) => {
        return new Promise((resolve => setTimeout(resolve, ms)))
    }

    const handleInsertAgentNotes = (agentChat: AgentChat, content: string) => {
        let flgExist = false;
        setAIAgentNotes(aiAgentNotes.map(i => {
            if (i.type == agentChat.currentNode && i.contentIndex == agentChat.currentIdx) {
                i.answer = content;
                flgExist = true;
            }
            return i;
        }));
        if (!flgExist) {
            setAIAgentNotes(aiAgentNotes => [...aiAgentNotes, {
                title: agentChat.currentNode == AgentNoteType.IDEA ? '目的' : agentChat.title,
                content: agentChat.content,
                answer: content,
                contentIndex: agentChat.currentIdx,
                type: agentChat.currentNode
            }]);
        }
    }
    
    const generateIdea = async (text: string) => {
        const response: IdeaResponse = await $repositories('idea').getIdea({'text': text})
            .catch(() => {
                const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
                setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                    title: lastChat.title,
                    content: ERR_MESSAGE,
                    chatType: AIChatType.ERROR,
                    currentNode: lastChat.currentNode,
                    currentIdx: lastChat.currentIdx,
                }]]);
                return;
            });
        if (typeof response === 'undefined') {
            return;
        }
        if(!response.data.data.questions || response.data.data.questions.length <= 0){
            const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
            setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                title: lastChat.title,
                content: ERR_MESSAGE,
                chatType: AIChatType.ERROR,
                currentNode: lastChat.currentNode,
                currentIdx: lastChat.currentIdx,
                handleNextStep: NEXT_STEP_TEXT_DEFAULT
            }]]);
            return;
        }
        // set Questions for idea
        setIdeaQuestions(response.data.data.questions.map((i, n) => {
            i.index = n;
            if (typeof i.category === "undefined") {
                i.category = AgentNoteType.DETAIL;
            }
            return i;
        }));

        const itemQuestion = response.data.data.questions.find(i => AgentNoteType.IDEA === i.category)
        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
            title: itemQuestion.title,
            category: itemQuestion.category,
            content: itemQuestion.content,
            answer: response.data.data.message || '',
            chatType: AIChatType.BOT_CONFIRM,
            description: itemQuestion.description,
            reflectFlg: true,
            currentNode: itemQuestion.category,
            currentIdx: itemQuestion.index,
            nextStepText: NEXT_STEP_TEXT_DEFAULT
        }]]);
    }

    const generateOverview = async (agentChat: AgentChat, question: Question, text: string = '', isTypeFromInput: boolean = false, nextStepText: string = NEXT_STEP_TEXT_DEFAULT) => {
        const ideaNote = aiAgentNotes.find(i => i.type == AgentNoteType.IDEA);

        const params: IdeaOverviewRequestParams = {
            idea: ideaNote.answer ?? '',
            title: question.title,
            content: question.content,
            description: question.description ?? undefined,
            category: question.category,
        };
        if (text != '') {
            params.text = text;
        }
        const response = await $repositories('idea').overview(params)
            .catch(err => {
                const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
                setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                    title: lastChat.title,
                    content: ERR_MESSAGE,
                    chatType: AIChatType.ERROR,
                    currentNode: lastChat.currentNode,
                    currentIdx: lastChat.currentIdx,
                    nextStepText: nextStepText
                }]]);
                return;
            });
        if (typeof response === 'undefined') {
            return;
        }

        const nextChat: AgentChat = {
            title: question.title,
            content: question.content,
            category: question.category,
            answer: response.data.data.message,
            chatType: AIChatType.BOT_CONFIRM,
            description: question.description,
            reflectFlg: true,
            currentNode: question.category,
            currentIdx: question.index,
            nextStepText: nextStepText
        };

        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[nextChat]]);
    }

    const generateDetail = async (agentChat: AgentChat, question: Question, text: string = '', isTypeFromInput: boolean = false, nextStepText: string = NEXT_STEP_TEXT_DEFAULT) => {
        const ideaNote = aiAgentNotes.find(i => i.type == AgentNoteType.IDEA);
        const referQuestion = ideaQuestions.find(i => i.id === question.refer_question)
        const ideaOverview = aiAgentNotes.find(i => i.type == AgentNoteType.OVERVIEW && i.contentIndex == referQuestion.index);

        const params: IdeaDetailRequestParams = {
            idea: ideaNote.answer || '',
            title: referQuestion.title,
            content: referQuestion.content,
            overview: ideaOverview.answer || '',
            detail_title: question.title,
            detail_content: question.content,
            detail_description: question.description ?? undefined
        };
        if (text != '') {
            params.text = text;
        }
        const response = await $repositories('idea').detail(params)
            .catch(err => {
                const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
                setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                    title: lastChat.title,
                    content: ERR_MESSAGE,
                    chatType: AIChatType.ERROR,
                    currentNode: lastChat.currentNode,
                    currentIdx: lastChat.currentIdx,
                    nextStepText: nextStepText
                }]]);
                return;
            });
        if (typeof response === 'undefined') {
            return;
        }
        const nextChat: AgentChat = {
            title: question.title,
            content: question.content,
            category: question.category,
            answer: response.data.data.message,
            chatType: AIChatType.BOT_CONFIRM,
            description: question.description,
            reflectFlg: true,
            currentNode: question.category,
            currentIdx: question.index,
            nextStepText: nextStepText
        };
        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[nextChat]]);
    }

    const generateSolution = async (agentChat: AgentChat, question: Question, text: string = '', isTypeFromInput: boolean = false, nextStepText: string = NEXT_STEP_TEXT_DEFAULT) => {
        const params: IdeaSolutionRequestParams = {
            idea: aiAgentNotes[0].answer ? aiAgentNotes[0].answer : "",
            notes: aiAgentNotes
        };
        const response = await $repositories('idea').solution(params)
            .catch(err => {
                const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
                setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                    title: lastChat.title,
                    content: ERR_MESSAGE,
                    chatType: AIChatType.ERROR,
                    currentNode: lastChat.currentNode,
                    currentIdx: lastChat.currentIdx,
                    nextStepText: nextStepText
                }]]);
                return;
            });
        if (typeof response === 'undefined') {
            return;
        }

        const nextChat: AgentChat = {
            title: question.title,
            content: question.content,
            category: question.category,
            answer: response.data.data.message,
            chatType: AIChatType.BOT_CONFIRM,
            description: question.description,
            reflectFlg: true,
            currentNode: question.category,
            currentIdx: question.index,
            nextStepText: nextStepText
        };

        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[nextChat]]);

    }

    const sendmail = async (isSendMail: boolean) => {
        if (isSendMail) {
            const notes: AgentNote[] = [...aiAgentNotes];
            notes.map(item => {
                // eslint-disable-next-line prefer-const
                const newItem = {...item};
                if (item.type === AgentNoteType.IDEA) {
                    newItem.title = "アイデアテキスト"
                }
                return newItem
            })
            const mail = "mail"
            const workSpace = "work_space"
            const username = "username"
            await $repositories('mail').agent_sendmail({
                mail: mail,
                workspace_name: workSpace,
                username: username,
                notes: notes
            });
        }

        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
            title: FINISH_MESSAGE,
            content: FINISH_MESSAGE,
            chatType: AIChatType.BOT_TYPED
        }]]);
        setShowSendMail(false)
    }

    const handleNextStep = async (agentChat: AgentChat, content: string = '', isTypeFromInput: boolean = false) => {
        setWaitingStatus(true);
        let nextType: AgentNoteType | undefined = AgentNoteType.IDEA;
        let nextStepQuestion = NEXT_STEP_TEXT_DEFAULT;
        const nextQuestion = ideaQuestions.find(i => i.index === agentChat.currentIdx + 1);
        const nextNextQuestion = ideaQuestions.find(i => i.index === agentChat.currentIdx + 2)
        if (agentChat.category === AgentNoteType.SOLUTION) {
            setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                title: SENDMAIL_QUESTION,
                content: SENDMAIL_QUESTION,
                chatType: AIChatType.BOT_TYPED
            }]]);
            setShowSendMail(true)
            setWaitingStatus(false);
            return
        }
        if (typeof nextQuestion !== "undefined") {
            nextType = nextQuestion.category;
        }

        if (typeof nextNextQuestion !== "undefined" && nextNextQuestion.category === AgentNoteType.SOLUTION) {
            nextStepQuestion = NEXT_STEP_SOLUTION
        }
        switch (nextType) {
            case AgentNoteType.IDEA :
                await generateIdea(content);
                break;
            case AgentNoteType.OVERVIEW :
            case AgentNoteType.OVERVIEW_EXTEND :
                await generateOverview(agentChat, nextQuestion, content, isTypeFromInput, nextStepQuestion);
                break;
            case AgentNoteType.DETAIL :
                await generateDetail(agentChat, nextQuestion, content, isTypeFromInput, nextStepQuestion);
                break;
            case AgentNoteType.SOLUTION :
                await generateSolution(agentChat, nextQuestion, content, isTypeFromInput, nextStepQuestion);
                break;
        }


        setWaitingStatus(false);
    }

    const onSubmitChat = async (content: string = '') => {
        const tmpAiAgentChatList:AIAgentChats = aiAgentChatList.filter(i => i.chatType !== AIChatType.BOT_TYPED);
        const maxIdxChat = tmpAiAgentChatList.length - 1;
        const copyIdx = maxIdxChat > 0 ? maxIdxChat - 1 : maxIdxChat;
        const copyRecord: AgentChat = tmpAiAgentChatList.find((i, n) => n === copyIdx);
        const userChat: AgentChat = {
            title: copyRecord.title,
            content: content,
            chatType: AIChatType.USER_TYPED,
            reflectFlg: false,
            nextFlag: false,
            currentNode : copyRecord.currentNode,
            currentIdx: copyRecord.currentIdx,
        };
        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList.map((i, n) => {
            if (n == aiAgentChatList.length - 1) {
                i.reflectFlg = false;
                i.nextFlag = false;
            }
            return i;
        }), ...[userChat]]);
        await handleNextStep(userChat, content, true);
    }

    const scrollFollowAgentChat = () => {
        const chatContainer = document.getElementById("chat-container");
        if (chatContainer) {
            chatContainer.scrollTo(0, chatContainer.scrollHeight)
        }
    }

    const scrollFollowAgentNotes = () => {
        const noteContainer = document.getElementById("note-container");
        if (noteContainer) {
            noteContainer.scrollTo(0, noteContainer.scrollHeight)
        }
    }

    return {
        sendmail,
        showSendMail,
        isWaiting,
        aiAgentChatList,
        aiAgentNotes,
        handleInsertAgentNotes,
        onSubmitChat,
        handleNextStep,
    }
}