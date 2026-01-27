import { Request, Response } from "express"
import { medicineService } from "./medicine.service"


const addMedicine = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await medicineService.addMedicine(data)
        res.send(result)
    } catch (error: any) {
       res.send({error:error.message}) 
    }
}

const getAllMedicine = async (req: Request, res: Response) => {
   try {
     const result = await medicineService.getAllMedicine()
    res.send(result)
   } catch (error: any) {
       res.send({error:error.message}) 
    }
}
const getMedicineByID = async (req: Request, res: Response) => {
  try {
     const { id } = req.params
    const result = await medicineService.getMedicineByID(id as string)
    res.send(result) 
  } catch (error: any) {
       res.send({error:error.message}) 
    }
}
const updateMedicine = async (req: Request, res: Response) => {
  try {
      const { id } = req.params
    const data = req.body
    const result = await medicineService.updateMedicine(id as string, data)
    res.send(result)
  } catch (error: any) {
       res.send({error:error.message}) 
    }
}

const deleteMedicine = async (req: Request, res: Response) => {
  try {
     const { id } = req.params
    const result = await medicineService.deleteMedicine(id as string)
    res.send(result) 
  } catch (error: any) {
       res.send({error:error.message}) 
    }
}

export const medicineControler = {
    addMedicine,
    getAllMedicine,
    getMedicineByID,
    updateMedicine,
    deleteMedicine,
}