import * as dotenv from "dotenv";
import { ThirdPartyClient } from "..";
dotenv.config();

const app = new ThirdPartyClient({
  clientHost: process.env.CLIENT_HOST ?? "",
  clientId: process.env.CLIENT_ID ?? "",
  clientSecret: process.env.CLIENT_SECRET ?? "",
});

console.log("app", app)

test("CLIENT_CONNECTION_TEST", async () => {
  expect(await app?.connect()).toStrictEqual({
    key: "1ed83457-30fb-11ee-a755-0242ac110005",
    secret: "$2y$10$aSfxPP.2OAkEwi1MG5N1eOvaQBsFLOgFdasdvkqdlJUnTVuMucYZC",
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
    lastActivity: "2023-11-06T02:07:41.068Z",
    active: true,
    adminId: "df229f73-30f9-11ee-a755-0242ac110005",
    activatedBy: null,
    activatedAt: null,
    createdAt: "2023-11-02T16:06:30.000Z",
    updatedAt: "2023-11-06T02:07:41.070Z",
    deletedAt: null,
  });
});
