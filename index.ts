import cors from 'cors';
import express from 'express';

// import data

import modules from './data/modules';

const app = express();

const POST: number = 3001;
const HOST: string = 'localhost';

app.use(express.json());

app.use(cors());

app.use(express.static('assets'))


app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.get('/modules', (req, res) => {
	res.status(200).send(modules);
})

app.get('/modules-assets', (req, res) => {
	const testImageUrl = 'data/modulesAssets/module_2/piano-fingering.png';
	const imageHtml = `<img src="${testImageUrl}" />`;
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send(imageHtml);
})



app.get('/api', (req, res) => {
	res.status(200).send('Hello World!');
});

app.get('/test-image', (req,res) => {
	const testImageUrl = 'module_2/piano-fingering.png';
	res.status(200).send(testImageUrl);
})

app.listen(POST, HOST, () => {
	console.log(`Server running at http://${HOST}:${POST}/`);
});
