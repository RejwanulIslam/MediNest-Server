import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma";
import { medicineControler } from "./medicine.controler";

const router=Router()


router.post('/addmedicines',async(req:Request,res:Response)=>{
  const data=req.body
  const result=await prisma.medicines.create({
    data
  })
  res.send(result)
})

router.post('/addcatagoty',medicineControler.addCatagoty)

export const medicineRouter=router