// import {RepositoriesInterface, RepositoryFactory} from "@/repositories/repository.ts";
// import http from "@/plugins/http.ts";

export const validateEmail = (email: string) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};

export const validateEmpty = (value: string) => {
    return value.trim().length !== 0;
};

// export const getRepository = (type: keyof RepositoriesInterface) => {
//     return RepositoryFactory.create(type)(http);
// }