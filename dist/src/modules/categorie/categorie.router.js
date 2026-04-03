import { Router } from "express";
import { categorieControler } from "./categorie.controler";
const router = Router();
router.post('/api/catagoty', categorieControler.addCatagoty);
router.get('/api/catagoty', categorieControler.getAllCatagoty);
router.delete('/api/catagoty/:id', categorieControler.deleteCatagoty);
export const categorieRouter = router;
//# sourceMappingURL=categorie.router.js.map