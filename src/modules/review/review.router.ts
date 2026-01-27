
import { Request, Response, Router } from "express";
import auth, { userRole } from "../../middleWare/auth";
import { reviewControler } from "./review.controler";

const router=Router()



router.post('/api/review',auth(),reviewControler.addReview)
router.get('/api/review',auth(),reviewControler.getAllReview)


export const reviedRouter=router