import type { AxiosInstance } from 'axios';
import {Account} from "@/types/models/account.ts";
import {API_URL} from "@/constant/api.ts";

export interface RepositoryLoginProps {
    login: (params: Account) => Promise<any>;
}

export const RepositoryLogin = ($axios: AxiosInstance): RepositoryLoginProps => ({
    login(params: Account): Promise<any> {
        return $axios.post(API_URL.AUTH.LOGIN, params);
    },

});
