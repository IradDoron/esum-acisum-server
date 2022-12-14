"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("../config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const modules_1 = __importDefault(require("../data/modules"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = config_1.sanitizedConfig.PORT;
const HOST = config_1.sanitizedConfig.HOST;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('assets'));
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
app.get('/modules', (req, res) => {
    res.status(200).send(modules_1.default);
});
app.get('/modules-assets', (req, res) => {
    const testImageUrl = 'data/modulesAssets/module_2/piano-fingering.png';
    const imageHtml = `<img src="${testImageUrl}" />`;
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(imageHtml);
});
app.get('/api', (req, res) => {
    res.status(200).send('Hello World!');
});
app.get('/test-image', (req, res) => {
    const testImageUrl = 'module_2/piano-fingering.png';
    res.status(200).send(testImageUrl);
});
app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
