"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizedConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../.env") });
const getConfig = () => {
    return {
        PORT: process.env['PORT'] ? Number(process.env['PORT']) : undefined,
        HOST: process.env['HOST'] ? process.env['HOST'] : undefined,
    };
};
const getSanitzedConfig = (config) => {
    const { PORT } = config;
    console.log(PORT);
    if (PORT === undefined) {
        throw new Error("PORT is undefined");
    }
    return config;
};
const config = getConfig();
exports.sanitizedConfig = getSanitzedConfig(config);
