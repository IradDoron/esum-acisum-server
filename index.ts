import cors from 'cors';
import express from 'express';

// import data

import modules from './data/modules';

const app = express();

const POST: number = 3001;
const HOST: string = 'localhost';

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
	res.status(200).send('Hello Wo[r]ld!');
});

app.get('/modules', (req, res) => {
	res.status(200).send(modules);
})

app.get('/api', (req, res) => {
	res.status(200).send('Hello World!');
});

app.listen(POST, HOST, () => {
	console.log(`Server running at http://${HOST}:${POST}/`);
});
