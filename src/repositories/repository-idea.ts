import type { AxiosInstance } from 'axios';
import {API_URL} from "@/constant/api.ts";
import {IdeaDetailResponse, IdeaOverviewResponse, IdeaResponse, IdeaSolutionResponse} from "@/types/models/responses";
import {
  IdeaDetailRequestParams,
  IdeaOverviewRequestParams,
  IdeaRequestParams,
  IdeaSolutionRequestParams
} from "@/types/models/requests";

export interface RepositoryIdeaProps {
  getIdea: (params: IdeaRequestParams) => Promise<IdeaResponse>;
  overview: (params: IdeaOverviewRequestParams) => Promise<IdeaOverviewResponse>;
  detail: (params: IdeaDetailRequestParams) => Promise<IdeaDetailResponse>;
  solution: (params: IdeaSolutionRequestParams) => Promise<IdeaSolutionResponse>;
}

export const RepositoryIdea = ($axios: AxiosInstance): RepositoryIdeaProps => ({
  getIdea(params: IdeaRequestParams): Promise<IdeaResponse> {
    return $axios.post(API_URL.IDEA.GET_IDEA, params);
  },
  overview(params: IdeaOverviewRequestParams): Promise<IdeaOverviewResponse> {
    return $axios.post(API_URL.IDEA.OVERVIEW, params);
  },
  detail(params: IdeaDetailRequestParams): Promise<IdeaDetailResponse> {
    return $axios.post(API_URL.IDEA.DETAIL, params);
  },
  solution(params: IdeaSolutionRequestParams): Promise<IdeaSolutionResponse> {
    return $axios.post(API_URL.IDEA.SOLUTION, params);
  },
});
