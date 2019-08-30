import express, { Response, Request } from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';
import query from './database/query';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const staticPath = join(process.cwd(), "static");

// this creates routes
app.use(express.static(staticPath));

app.post('/feedback', async (req: Request, res: Response) => {
    const properties = req.body;
    const result = await query(`INSERT INTO feedback (properties) VALUES ('${JSON.stringify(properties)}')`);
    res.json({result});
});

app.get('*', (_, res: Response) => {
    // this will send first file, index.html
    res.sendFile(join(staticPath, 'feedback.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is UP! ${PORT}`);
});
