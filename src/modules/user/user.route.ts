
import { Router } from "express";
import auth, { userRole } from "../../middleWare/auth";
import { userController } from "./user.controller";

const router=Router()



router.get('/api/user',auth(),userController.getAllUser)
router.patch('/api/user/:id',auth(),userController.updateUser)


export const userRouter=router