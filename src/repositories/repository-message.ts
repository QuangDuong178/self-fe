// // import type { AxiosInstance } from 'axios';
// import {MessageSample, ParamSample} from '@/types/models/message';
// import {API_URL} from '@/constant/api.ts';
// import AxiosInstance from "@/apis/AxiosInstance.ts";
//
// export interface RepositoryMessageProps {
//     message: (params: any) => Promise<any>;
//     messageSample: (params: ParamSample) => Promise<MessageSample>;
// }
//
// export const RepositoryMessage = ($axios: typeof AxiosInstance): RepositoryMessageProps => ({
//     message(params: any): Promise<any> {
//         return $axios.get(API_URL.TEST, params);
//     },
//     messageSample(params: ParamSample): Promise<MessageSample> {
//         if (typeof params !== 'object') {
//             params = {};
//         }
//         return $axios.post(API_URL.TEST.SAMPLE, params);
//     },
// });
