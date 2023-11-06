import { AxiosRequestConfig, AxiosError } from "@mljsdev/rest-client";
import { ThirdParty } from ".";

export interface AuthorizedClient {
  clientId: string;
  clientSecret: string;
  name: string;
  description?: string;
  thirdPartyKey: string;
  ThirdParty?: ThirdParty;
  active: boolean;
  revoked: boolean;
  revokedBy?: string | null;
  revokedAt?: string;
  revokeReason?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  revoke(config?: AxiosRequestConfig): Promise<AuthorizedClient | AxiosError>;
  create(
    data: AuthorizedClient,
    config?: AxiosRequestConfig
  ): Promise<AuthorizedClient | AxiosError>;
  update(
    clientId: string,
    data: AuthorizedClient,
    config?: AxiosRequestConfig
  ): Promise<AuthorizedClient | AxiosError>;
  delete(
    clientId: string,
    data: AuthorizedClient,
    config?: AxiosRequestConfig
  ): Promise<any | AxiosError>;
}
