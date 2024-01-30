import {AgentNoteType, AIChatType} from "@/types/enums/ai-chatbot";

export type AgentChat = {
    category?: AgentNoteType,
    title: string,
    content: string,
    answer?: string,
    chatType?: AIChatType,
    reflectFlg?: boolean,
    nextFlag?: boolean,
    description?: string,
    currentNode?: AgentNoteType | undefined,
    currentIdx?: number
    nextStepText?: string
}

export type AgentNote = {
    title: string,
    content?: string,
    answer?: string,
    contentIndex?: number | undefined,
    description?: string,
    type?: AgentNoteType,
}

export type Question = {
    id: number,
    title: string,
    content: string,
    description:string,
    category?: AgentNoteType | undefined,
    order:number,
    refer_question?:number,
    index:number | 0,
}

export type AIAgentNotes = Array<AgentNote>;
export type AIAgentChats = Array<AgentChat>;
export type IdeaQuestions = Array<Question>;

