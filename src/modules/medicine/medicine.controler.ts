import { Request, Response } from "express"
import { medicineService } from "./medicine.service"


const addMedicine = async (req: Request, res: Response) => {
    const data = req.body
    const result = await medicineService.addMedicine(data)
    res.send(result)
}

const getAllMedicine = async (req: Request, res: Response) => {
    const result = await medicineService.getAllMedicine()
    res.send(result)
}
const getMedicineByID = async (req: Request, res: Response) => {
    const {id}=req.params
    const result = await medicineService.getMedicineByID(id as string)
    res.send(result)
}

export const medicineControler = {
    addMedicine,
    getAllMedicine,
    getMedicineByID
}