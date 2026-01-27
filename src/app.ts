
import express, { Request, Response } from "express"
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
export const app = express()

app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json())
app.use(cors())


app.get("/", (req: Request, res: Response) => {
  res.send('Hello World!')
})