import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { categorieRouter } from "./modules/categorie/categorie.router";
import { orderRouter } from "./modules/order/order.router";
import { reviedRouter } from "./modules/review/review.router";
import { userRouter } from "./modules/user/user.route";
import { cardRouter } from "./modules/card/card.router";
export const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use('/', medicineRouter);
app.use('/', categorieRouter);
app.use('/', orderRouter);
app.use('/', reviedRouter);
app.use('/', userRouter);
app.use('/', cardRouter);
app.get("/", (req, res) => {
    res.send('Hello World!');
});
//# sourceMappingURL=app.js.map