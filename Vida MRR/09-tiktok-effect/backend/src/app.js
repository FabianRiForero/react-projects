import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const items = [
    { id: '0', title: 'Video 1', path: 'vid-01.mp4' },
    { id: '1', title: 'Video 2', path: 'vid-02.mp4' },
    { id: '2', title: 'Video 3', path: 'vid-03.mp4' },
    { id: '3', title: 'Video 4', path: 'vid-04.mp4' },
    { id: '4', title: 'Video 5', path: 'vid-05.mp4' },
    { id: '5', title: 'Video 6', path: 'vid-06.mp4' },
    { id: '6', title: 'Video 7', path: 'vid-07.mp4' },
    { id: '7', title: 'Video 8', path: 'vid-08.mp4' },
    { id: '8', title: 'Video 9', path: 'vid-09.mp4' },
    { id: '9', title: 'Video 10', path: 'vid-10.mp4' },
    { id: '10', title: 'Video 11', path: 'vid-11.mp4' },
    { id: '11', title: 'Video 12', path: 'vid-12.mp4' },
    { id: '12', title: 'Video 13', path: 'vid-13.mp4' },
    { id: '13', title: 'Video 14', path: 'vid-14.mp4' },
    { id: '14', title: 'Video 15', path: 'vid-15.mp4' },
    { id: '15', title: 'Video 16', path: 'vid-16.mp4' },
    { id: '16', title: 'Video 17', path: 'vid-17.mp4' },
    { id: '17', title: 'Video 18', path: 'vid-18.mp4' },
    { id: '18', title: 'Video 19', path: 'vid-19.mp4' },
    { id: '19', title: 'Video 20', path: 'vid-20.mp4' },
    { id: '20', title: 'Video 21', path: 'vid-21.mp4' },
    { id: '21', title: 'Video 22', path: 'vid-22.mp4' },
    { id: '22', title: 'Video 23', path: 'vid-23.mp4' },
    { id: '23', title: 'Video 24', path: 'vid-24.mp4' },
    { id: '24', title: 'Video 25', path: 'vid-25.mp4' },
    { id: '25', title: 'Video 26', path: 'vid-26.mp4' },
    { id: '26', title: 'Video 27', path: 'vid-27.mp4' },
    { id: '27', title: 'Video 28', path: 'vid-28.mp4' },
    { id: '28', title: 'Video 29', path: 'vid-29.mp4' },
    { id: '29', title: 'Video 30', path: 'vid-30.mp4' },
];

// Settings
app.set('port', process.env.PORT || 3002);

// Middeware
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cors(/* { credentials: true, origin: process.env.CLIENT_URL || 'http://localhost:3000' } */));

// Routes
app.get('/', (req, res) => {
    res.send('hola')
});

let range = 5;
let index = 0;

app.get('/page/:page', ({ params }, res) => {
    const start = params.page ?? index;
    const portion = items.slice(start * range, start * range + range);
    res.json(portion);
});

export default app;