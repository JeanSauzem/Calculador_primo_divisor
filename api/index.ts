import express, { Application } from 'express'
import cors  from 'cors'


import route  from "./src/Route/route"

const app: Application = express()
app.use(cors());
app.use(express.json())
app.use(route)

app.listen(3333, () => 'server running on port 3333')

export default app