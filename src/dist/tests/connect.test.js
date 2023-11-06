"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const __1 = require("..");
dotenv.config();
const app = new __1.ThirdPartyClient({
    clientHost: (_a = process.env.CLIENT_HOST) !== null && _a !== void 0 ? _a : "",
    clientId: (_b = process.env.CLIENT_ID) !== null && _b !== void 0 ? _b : "",
    clientSecret: (_c = process.env.CLIENT_SECRET) !== null && _c !== void 0 ? _c : "",
});
console.log("app", app);
test("CLIENT_CONNECTION_TEST", () => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield (app === null || app === void 0 ? void 0 : app.connect())).toStrictEqual({
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
}));
