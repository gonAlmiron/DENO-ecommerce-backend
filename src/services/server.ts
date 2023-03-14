import express, { type Express } from "npm:express"
import routerProducts from '../routes/products.router.ts'
import '../persistence/db.ts'
import { config } from '../config/deps.ts'

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/products', routerProducts)

export default app