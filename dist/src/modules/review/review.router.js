import { Router } from "express";
import auth from "../../middleWare/auth";
import { reviewControler } from "./review.controler";
const router = Router();
router.post('/api/review', auth(), reviewControler.addReview);
router.get('/api/review/:id', auth(), reviewControler.getAllReview);
export const reviedRouter = router;
//# sourceMappingURL=review.router.js.map