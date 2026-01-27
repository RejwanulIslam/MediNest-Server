
import express, { Request, Response } from "express"
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { categorieRouter } from "./modules/categorie/categorie.router";
import { orderRouter } from "./modules/order/order.router";
export const app = express()

app.use(express.json())
app.use(cors())
app.all('/api/auth/{*any}', toNodeHandler(auth));


app.use('/',medicineRouter)
app.use('/',categorieRouter)
app.use('/',orderRouter)


app.get("/", (req: Request, res: Response) => {
  res.send('Hello World!')
})