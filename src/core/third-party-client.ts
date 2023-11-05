import { endpoints } from "../constants/endpoint";
import {
  AuthorizedClient,
  ErrorLog,
  ReqErrorCount,
  ReqLog,
  ThirdParty,
  ThirdPartyClientConfig,
} from "../interfaces";
import {
  AxiosError,
  AxiosRequestConfig,
  RestClient,
} from "@mljsdev/rest-client";

export class ThirdPartyClient {
  private set config(value: ThirdPartyClientConfig) {}
  private resClient: RestClient = new RestClient({
    baseURL: this.config.clientHost,
    headers: {
      "x-client-id": this.config.clientId,
      "x-client-secret": this.config.clientSecret,
    },
  });

  constructor(config: ThirdPartyClientConfig) {
    this.config = config;
  }

  /**
   * Connect to the server and get third party details
   * @param config AxiosRequestConfig
   * @returns Promise<ThirdParty | AxiosError>
   */
  async connect(config?: AxiosRequestConfig): Promise<ThirdParty | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Get a req log by id for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<ReqLog | AxiosError>
   */
  async reqLog(
    id: string | number,
    config?: AxiosRequestConfig
  ): Promise<ReqLog | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties + endpoints.req_logs + id, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Get all request logs for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<ReqLog[] | AxiosError>
   */
  async reqLogs(config?: AxiosRequestConfig): Promise<ReqLog[] | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties + endpoints.req_logs, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Get an error log by id for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<ErrorLog | AxiosError>
   */
  async errorLog(
    id: string | number,
    config?: AxiosRequestConfig
  ): Promise<ErrorLog | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties + endpoints.error_logs + id, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Get all error logs for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<ErrorLog[] | AxiosError>
   */
  async errorLogs(
    config?: AxiosRequestConfig
  ): Promise<ErrorLog[] | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties + endpoints.error_logs, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Get an authorized client by clientId for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<AuthorizedClient | AxiosError>
   */
  async authorizedCLient(
    clientId: string,
    config?: AxiosRequestConfig
  ): Promise<AuthorizedClient | AxiosError> {
    return await this.resClient
      .get(
        endpoints.third_parties + endpoints.authorized_clients + clientId,
        config
      )
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Get all authorized clients for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<AuthorizedClient[] | AxiosError>
   */
  async authorizedCLients(
    config?: AxiosRequestConfig
  ): Promise<AuthorizedClient[] | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties + endpoints.authorized_clients, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Create an authorized client for the connected third party
   * @param data authorized client data
   * @param config AxiosRequestConfig
   * @returns Promise<AuthorizedClient | AxiosError>
   */
  async createAuthorizedClient(
    data: AuthorizedClient,
    config?: AxiosRequestConfig
  ): Promise<AuthorizedClient | AxiosError> {
    return await this.resClient
      .post(
        endpoints.third_parties + endpoints.authorized_clients,
        data,
        config
      )
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Update an authorized client for the connected third party
   * @param clientId authorized client id
   * @param data authorized client data
   * @param config AxiosRequestConfig
   * @returns Promise<AuthorizedClient | AxiosError>
   */
  async updateAuthorizedClient(
    clientId: string,
    data: AuthorizedClient,
    config?: AxiosRequestConfig
  ): Promise<AuthorizedClient | AxiosError> {
    return await this.resClient
      .put(
        endpoints.third_parties + endpoints.authorized_clients + clientId,
        data,
        config
      )
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Delete an authorized client for the connected third party. Ensure that the authorized client is revoked
   * @param clientId authorized client id
   * @param config AxiosRequestConfig
   * @returns Promise<any | AxiosError>
   */
  async deleteAuthorizedClient(
    clientId: string,
    config?: AxiosRequestConfig
  ): Promise<any | AxiosError> {
    return await this.resClient
      .delete(
        endpoints.third_parties + endpoints.authorized_clients + clientId,
        config
      )
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Revoke an authorized client for the connected third party
   * @param clientId authorized client id
   * @param config AxiosRequestConfig
   * @returns Promise<AuthorizedClient | AxiosError>
   */
  async revokeAuthorizedClient(
    clientId: string,
    config?: AxiosRequestConfig
  ): Promise<AuthorizedClient | AxiosError> {
    return await this.resClient
      .post(
        endpoints.third_parties +
          endpoints.authorized_clients +
          clientId +
          endpoints.authorized_clients_revoke,
        config
      )
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Count request instance for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<ReqErrorCount | AxiosError>
   */
  async requestCount(
    config?: AxiosRequestConfig
  ): Promise<ReqErrorCount | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties + endpoints.request_count, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }

  /**
   * Count error instance for the connected third party
   * @param config AxiosRequestConfig
   * @returns Promise<ReqErrorCount | AxiosError>
   */
  async errorCount(
    config?: AxiosRequestConfig
  ): Promise<ReqErrorCount | AxiosError> {
    return await this.resClient
      .get(endpoints.third_parties + endpoints.error_count, config)
      .then((res) => res?.data)
      .catch((err: AxiosError) => err);
  }
}
