import {IdeaQuestions} from "@/types/models/ai-agent";

export interface BaseResponse<T> {
  code?: string;
  data: T;
}

export interface IdeaResponseData {
  data: {
    message: string;
    questions: IdeaQuestions;
  }
}

export interface IdeaOverviewResponseData {
  data: {
    message: string;
  }
}

export interface IdeaDetailResponseData {
  data: {
    message: string;
  }
}

export interface IdeaSolutionResponseData {
  data: {
    message?: string;
  }
}

export interface AgentSendMailResponseData {
  data: {
    message: string;
  }
}

export type IdeaResponse = BaseResponse<IdeaResponseData>;
export type IdeaOverviewResponse = BaseResponse<IdeaOverviewResponseData>;
export type IdeaDetailResponse = BaseResponse<IdeaDetailResponseData>;
export type IdeaSolutionResponse = BaseResponse<IdeaSolutionResponseData>;
export type AgentSendMailResponse = BaseResponse<AgentSendMailResponseData>;
