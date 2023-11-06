import { ThirdParty } from ".";
export interface ReqLog {
    id: string;
    method: string;
    protocol: string;
    hostname: string;
    path: string;
    originalUrl: string;
    subdomains?: string;
    cookies?: string;
    ip: string;
    date: string;
    thirdPartyKey: string;
    ThirdParty: ThirdParty;
}
