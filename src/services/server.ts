import express, { Express, Request, Response } from "npm:express"

const app: Express = express();

app.use(express.json())

app.get('/', (req: Request, res: Response)=>{
    res.send('Hola Deno desde expresss!')
});

app.post('/', (req: Request, res: Response)=>{
    console.log(req.body);
});


export default app