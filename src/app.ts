
import express, { Request, Response } from "express"
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { categorieRouter } from "./modules/categorie/categorie.router";
import { orderRouter } from "./modules/order/order.router";
import { reviedRouter } from "./modules/review/review.router";
import { userRouter } from "./modules/user/user.route";
import { cardRouter } from "./modules/card/card.router";
export const app = express()

app.use(express.json())

// Configure CORS to allow both production and Vercel preview deployments
const allowedOrigins = [
  process.env.APP_URL || "http://localhost:3000",
  // process.env.PROD_APP_URL, // Production frontend URL
].filter(Boolean); // Remove undefined values


// app.use(cors({
//   origin:["http://localhost:3000","https://medi-nest-server-delta.vercel.app",

//   ],
//   credentials:true}))


app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      // Check if origin is in allowedOrigins or matches Vercel preview pattern
      const isAllowed =
        allowedOrigins.includes(origin) ||
        /^https:\/\/next-blog-client.*\.vercel\.app$/.test(origin) ||
        /^https:\/\/.*\.vercel\.app$/.test(origin); // Any Vercel deployment

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"],
  }),
);



app.all('/api/auth/{*any}', toNodeHandler(auth));


app.use('/',medicineRouter)
app.use('/',categorieRouter)
app.use('/',orderRouter)
app.use('/',reviedRouter)
app.use('/',userRouter)
app.use('/',cardRouter)


app.get("/", (req: Request, res: Response) => {
  res.send('Hello World!')
})