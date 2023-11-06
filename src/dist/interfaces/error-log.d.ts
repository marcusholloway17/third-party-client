import { ThirdParty } from ".";
export interface ErrorLog {
    id: string;
    code: string;
    env: string;
    message: string;
    cause: string;
    stack: string;
    date: string;
    thirdPartyKey: string;
    ThirdParty: ThirdParty;
}
