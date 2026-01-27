import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma";
import { medicineControler } from "./medicine.controler";

const router=Router()


router.post('/api/seller/medicines',medicineControler.addMedicine)
router.get('/api/medicines',medicineControler.getAllMedicine)
router.get('/api/medicines/:id',medicineControler.getMedicineByID)
router.patch('/api/medicines/:id',medicineControler.updateMedicine)


export const medicineRouter=router