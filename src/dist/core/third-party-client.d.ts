import { AuthorizedClient, ErrorLog, ReqErrorCount, ReqLog, ThirdParty, ThirdPartyClientConfig } from "../interfaces";
import { AxiosError, AxiosRequestConfig } from "@mljsdev/rest-client";
export declare class ThirdPartyClient {
    private resClient;
    constructor(config: ThirdPartyClientConfig);
    /**
     * Connect to the server and get third party details
     * @param config AxiosRequestConfig
     * @returns Promise<ThirdParty | AxiosError>
     */
    connect(config?: AxiosRequestConfig): Promise<ThirdParty | AxiosError>;
    /**
     * Get a req log by id for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqLog | AxiosError>
     */
    reqLog(id: string | number, config?: AxiosRequestConfig): Promise<ReqLog | AxiosError>;
    /**
     * Get all request logs for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqLog[] | AxiosError>
     */
    reqLogs(config?: AxiosRequestConfig): Promise<ReqLog[] | AxiosError>;
    /**
     * Get an error log by id for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ErrorLog | AxiosError>
     */
    errorLog(id: string | number, config?: AxiosRequestConfig): Promise<ErrorLog | AxiosError>;
    /**
     * Get all error logs for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ErrorLog[] | AxiosError>
     */
    errorLogs(config?: AxiosRequestConfig): Promise<ErrorLog[] | AxiosError>;
    /**
     * Get an authorized client by clientId for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    authorizedCLient(clientId: string, config?: AxiosRequestConfig): Promise<AuthorizedClient | AxiosError>;
    /**
     * Get all authorized clients for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient[] | AxiosError>
     */
    authorizedCLients(config?: AxiosRequestConfig): Promise<AuthorizedClient[] | AxiosError>;
    /**
     * Create an authorized client for the connected third party
     * @param data authorized client data
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    createAuthorizedClient(data: AuthorizedClient, config?: AxiosRequestConfig): Promise<AuthorizedClient | AxiosError>;
    /**
     * Update an authorized client for the connected third party
     * @param clientId authorized client id
     * @param data authorized client data
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    updateAuthorizedClient(clientId: string, data: AuthorizedClient, config?: AxiosRequestConfig): Promise<AuthorizedClient | AxiosError>;
    /**
     * Delete an authorized client for the connected third party. Ensure that the authorized client is revoked
     * @param clientId authorized client id
     * @param config AxiosRequestConfig
     * @returns Promise<any | AxiosError>
     */
    deleteAuthorizedClient(clientId: string, config?: AxiosRequestConfig): Promise<any | AxiosError>;
    /**
     * Revoke an authorized client for the connected third party
     * @param clientId authorized client id
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    revokeAuthorizedClient(clientId: string, config?: AxiosRequestConfig): Promise<AuthorizedClient | AxiosError>;
    /**
     * Count request instance for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqErrorCount | AxiosError>
     */
    requestCount(config?: AxiosRequestConfig): Promise<ReqErrorCount | AxiosError>;
    /**
     * Count error instance for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqErrorCount | AxiosError>
     */
    errorCount(config?: AxiosRequestConfig): Promise<ReqErrorCount | AxiosError>;
}
