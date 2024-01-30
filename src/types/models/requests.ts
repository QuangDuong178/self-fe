import {AgentNoteType} from "@/types/enums/ai-chatbot";

import {AIAgentNotes} from "@/types/models/ai-agent.ts";

export interface IdeaRequestParams {
  text: string;
}

export interface IdeaOverviewRequestParams {
  idea: string;
  title: string;
  content: string;
  description?: string;
  category?: AgentNoteType | undefined;
  text?: string;
}

export interface IdeaDetailRequestParams {
  idea: string;
  title: string;
  content: string;
  overview: string;
  detail_title: string;
  detail_content: string;
  detail_description: string;
  text?: string;
}

export interface IdeaSolutionRequestParams {
  idea: string;
  notes: AIAgentNotes;
}

export interface SendMailRequestParams {
  mail: string;
  username: string;
  workspace_name: string;
  notes: AIAgentNotes
}