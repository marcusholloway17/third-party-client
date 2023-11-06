import * as dotenv from "dotenv";
dotenv.config();
import { ThirdPartyClient } from "..";

const app = new ThirdPartyClient({
  clientHost: process.env.CLIENT_HOST ?? "",
  clientId: process.env.CLIENT_ID ?? "",
  clientSecret: process.env.CLIENT_SECRET ?? "",
});

test("CLIENT_CONNECTION_TEST", async () => {
  expect(
    await app?.connect({
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).toStrictEqual({
    key: "1ed83457-30fb-11ee-a755-0242ac110005",
    secret: null,
    name: "AUTH",
    description: "AUTHENTICATION WEB SERVICE",
    host: "https://auth.sedana.io",
    logoUrl: null,
    faviconUrl: null,
    redirectionUrl: null,
    maxUser: 10,
    userCount: 0,
    allowRegistration: true,
    onlyVerified: true,
    useCustom: true,
    lastActivity: "2023-11-06T14:18:47.855Z",
    active: true,
    adminId: "df229f73-30f9-11ee-a755-0242ac110005",
    activatedBy: null,
    activatedAt: null,
    createdAt: "2023-09-28T17:29:43.000Z",
    updatedAt: "2023-11-06T14:18:47.855Z",
    deletedAt: null,
  });
});
