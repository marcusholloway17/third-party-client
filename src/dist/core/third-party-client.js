"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyClient = void 0;
const endpoint_1 = require("../constants/endpoint");
const rest_client_1 = require("@mljsdev/rest-client");
class ThirdPartyClient {
    set config(value) { }
    constructor(config) {
        this.resClient = new rest_client_1.RestClient({
            baseURL: this.config.clientHost,
            headers: {
                "x-client-id": this.config.clientId,
                "x-client-secret": this.config.clientSecret,
            },
        });
        this.config = config;
    }
    /**
     * Connect to the server and get third party details
     * @param config AxiosRequestConfig
     * @returns Promise<ThirdParty | AxiosError>
     */
    connect(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Get a req log by id for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqLog | AxiosError>
     */
    reqLog(id, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.req_logs + id, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Get all request logs for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqLog[] | AxiosError>
     */
    reqLogs(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.req_logs, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Get an error log by id for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ErrorLog | AxiosError>
     */
    errorLog(id, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.error_logs + id, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Get all error logs for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ErrorLog[] | AxiosError>
     */
    errorLogs(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.error_logs, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Get an authorized client by clientId for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    authorizedCLient(clientId, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.authorized_clients + clientId, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Get all authorized clients for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient[] | AxiosError>
     */
    authorizedCLients(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.authorized_clients, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Create an authorized client for the connected third party
     * @param data authorized client data
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    createAuthorizedClient(data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .post(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.authorized_clients, data, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Update an authorized client for the connected third party
     * @param clientId authorized client id
     * @param data authorized client data
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    updateAuthorizedClient(clientId, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .put(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.authorized_clients + clientId, data, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Delete an authorized client for the connected third party. Ensure that the authorized client is revoked
     * @param clientId authorized client id
     * @param config AxiosRequestConfig
     * @returns Promise<any | AxiosError>
     */
    deleteAuthorizedClient(clientId, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .delete(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.authorized_clients + clientId, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Revoke an authorized client for the connected third party
     * @param clientId authorized client id
     * @param config AxiosRequestConfig
     * @returns Promise<AuthorizedClient | AxiosError>
     */
    revokeAuthorizedClient(clientId, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .post(endpoint_1.endpoints.third_parties +
                endpoint_1.endpoints.authorized_clients +
                clientId +
                endpoint_1.endpoints.authorized_clients_revoke, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Count request instance for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqErrorCount | AxiosError>
     */
    requestCount(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.request_count, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
    /**
     * Count error instance for the connected third party
     * @param config AxiosRequestConfig
     * @returns Promise<ReqErrorCount | AxiosError>
     */
    errorCount(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resClient
                .get(endpoint_1.endpoints.third_parties + endpoint_1.endpoints.error_count, config)
                .then((res) => res === null || res === void 0 ? void 0 : res.data)
                .catch((err) => err);
        });
    }
}
exports.ThirdPartyClient = ThirdPartyClient;
