import { config } from './config/deps.ts';
import server from './services/server.ts'

server.listen(config().PORT)

console.log(`Server ON escuchando en puerto ${config().PORT}`)