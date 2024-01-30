import axios from 'axios';
import {RepositoriesInterface, RepositoriesType, RepositoryFactory} from "@/repositories/repository";
import {createContext} from "react";

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000
});

axiosInstance.interceptors.request.use(
    async (config) => {
        // const token = '';
        // if (token) {
        //     config.headers.accessToken = token;
        // }
        return config;
    },
    (error) => {
        // Handle exception
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    (error) => {
        // Handle Exception
        return Promise.reject(error);
    }
);

export const repositories = (name: keyof RepositoriesInterface) => {
    return RepositoryFactory.create(name)(axiosInstance);
};

export const RepositoriesContext = createContext<RepositoriesType>(repositories);
