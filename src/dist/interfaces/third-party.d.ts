import { AuthorizedClient, ErrorLog, ReqLog } from ".";
export interface ThirdParty {
    key: string;
    name: string;
    description?: string;
    logoUrl?: string;
    faviconUrl?: string;
    host: string;
    scopes: string[];
    redirectionUrl: string;
    maxUser: number;
    userCount: number;
    allowRegistration: boolean;
    onlyVerified: boolean;
    useCustom: boolean;
    lastActivity?: string;
    active: boolean;
    activatedBy: string;
    activatedAt: string;
    adminId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    AuthorizedClients: AuthorizedClient[];
    ReqLogs: ReqLog[];
    ErrorLogs: ErrorLog[];
}
