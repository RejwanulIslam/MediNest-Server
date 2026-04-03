import { Router } from "express";
import { medicineControler } from "./medicine.controler";
import auth, { userRole } from "../../middleWare/auth";
const router = Router();
router.post('/api/seller/medicines', auth(userRole.seler, userRole.admin), medicineControler.addMedicine);
router.get('/api/medicines', medicineControler.getAllMedicine);
router.get('/api/medicines/:id', medicineControler.getMedicineByID);
router.patch('/api/medicines/:id', auth(userRole.seler, userRole.admin), medicineControler.updateMedicine);
router.delete('/api/medicines/:id', auth(userRole.seler, userRole.admin), medicineControler.deleteMedicine);
export const medicineRouter = router;
//# sourceMappingURL=medicine.router.js.map