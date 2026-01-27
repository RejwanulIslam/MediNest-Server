import { Router } from "express";
import { orderControler } from "./order.controler";
import auth, { userRole } from "../../middleWare/auth";

const router=Router()


router.post('/api/orders',auth(),orderControler.addOrder)
router.get('/api/orders',auth(userRole.admin),orderControler.getAllOrder)
router.get('/api/orders/:id',auth(),orderControler.getOrderByID)
router.patch('/api/orders/:id',auth(userRole.admin,userRole.seler),orderControler.updateOrder)
router.delete('/api/orders/:id',auth(userRole.admin),orderControler.updateOrder)



export const orderRouter=router