import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { IDocument, readNumber, replaceNumber } from './db';

const app = express();
const port = process.env.PORT ? process.env.PORT : 8080;
app.use(bodyParser.json());

app.get('/api/data', (_req: Request, res: Response) => {
  readNumber()
    .then((data: IDocument) => {
      res.json(
        JSON.stringify({
          number: data?.number,
        })
      );
    })
    .catch(e => console.log(e));
});

app.post('/api/data', (req: Request, res: Response) => {
  const number = <number>req.body.number;
  replaceNumber(number)
    .then(() => {
      res.json('Number setted');
    })
    .catch(e => console.log(e));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
