
import { Router } from "express";
import auth, { userRole } from "../../middleWare/auth";
import { userController } from "./user.controller";

const router=Router()



router.get('/api/user',auth(),userController.getAllUser)


export const userRouter=router