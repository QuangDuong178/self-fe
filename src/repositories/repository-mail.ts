import type {AxiosInstance} from 'axios';
import {API_URL} from "@/constant/api.ts";
import {SendMailRequestParams} from "@/types/models/requests";
import {AgentSendMailResponse} from "@/types/models/responses.ts";

export interface RepositoryMailProps {
  agent_sendmail: (params: SendMailRequestParams) => Promise<AgentSendMailResponse>;
}

export const RepositoryMail = ($axios: AxiosInstance): RepositoryMailProps => ({
  agent_sendmail(params: SendMailRequestParams): Promise<AgentSendMailResponse> {
    return $axios.post(API_URL.AGENT.SEND_MAIL, params);
  },
});
