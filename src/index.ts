import dotenv from 'dotenv';
import { sanitizedConfig } from '../config';

import cors from 'cors';
import express from 'express';

// import data

import modules from '../data/modules';

dotenv.config()

const app = express();

const PORT = sanitizedConfig.PORT;
const HOST = sanitizedConfig.HOST;

app.use(express.json());      
 
app.use(cors());   

app.use(express.static('assets')); 

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.get('/modules', (req, res) => {
	res.status(200).send(modules);
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
