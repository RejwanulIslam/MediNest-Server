import { Router } from "express";
import { cardControler } from "./card.controler";
const router = Router();
router.post('/addcard', cardControler.addCard);
router.delete('/deletecard', cardControler.deleteCard);
router.get('/getcard', cardControler.getAllCard);
export const cardRouter = router;
//# sourceMappingURL=card.router.js.map