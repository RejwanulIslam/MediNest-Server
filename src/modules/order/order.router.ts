import { Request, Response, Router } from "express";
import { orderControler } from "./order.controler";
import auth, { userRole } from "../../middleWare/auth";

const router=Router()


router.post('/api/orders',auth(userRole.user,userRole.admin,userRole.seler),orderControler.addOrder)
router.get('/api/orders',auth(),orderControler.getAllOrder)



export const orderRouter=router