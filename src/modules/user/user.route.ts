
import { Router } from "express";
import auth, { userRole } from "../../middleWare/auth";
import { userController } from "./user.controller";

const router=Router()



router.get('/api/user',auth(userRole.admin),userController.getAllUser)
router.patch('/api/user/:id',auth(userRole.admin),userController.updateUser)


export const userRouter=router