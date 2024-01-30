import {RepositoryLogin} from "@/repositories/repository-login.ts";
import {RepositoryIdea} from "@/repositories/repository-idea";
import {RepositoryMail} from "@/repositories/repository-mail.ts";

export interface RepositoriesInterface {

    login: typeof RepositoryLogin
    idea: typeof RepositoryIdea;
    mail: typeof RepositoryMail
}

const repositories: RepositoriesInterface = {
    login: RepositoryLogin,
    idea: RepositoryIdea,
    mail: RepositoryMail
};

export const RepositoryFactory = {
    create: (key: keyof RepositoriesInterface) => repositories[key],
};

export type RepositoriesType = <K extends keyof RepositoriesInterface>(key: K) => ReturnType<RepositoriesInterface[K]>;
