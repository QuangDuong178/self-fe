const apiEndPoint = '/api';
const apiVersion = 'v1';
const baseURL = `${apiEndPoint}/${apiVersion}`;

export const API_URL = {
    AUTH: {
        LOGIN: `${baseURL}/login`,
    },
    IDEA: {
        GET_IDEA :`${baseURL}/chatbot/validate-idea`,
        OVERVIEW :`${baseURL}/chatbot/generate-overview`,
        DETAIL :`${baseURL}/chatbot/generate-detail`,
        SOLUTION :`${baseURL}/chatbot/generate-solution`,
    },
    AGENT: {
        SEND_MAIL : `${baseURL}/chatbot/send-mail`
    }
};

