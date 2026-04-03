import { Request, Response } from "express"
import { medicineService } from "./medicine.service"


const addMedicine = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const result = await medicineService.addMedicine(data)
    res.send(result)
  } catch (error: any) {
    res.send({ error: error.message })
  }
}

const getAllMedicine = async (req: Request, res: Response) => {
  try {
    const { serch,category,minPrice,maxPrice,manufacturer } = req.query
    const result = await medicineService.getAllMedicine(serch as string,category as string,minPrice as string,maxPrice as string,manufacturer as string)
    res.send(result)
  } catch (error: any) {
    res.send({ error: error.message })
  }
}
const getMedicineByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await medicineService.getMedicineByID(id as string)
    res.send(result)
  } catch (error: any) {
    res.send({ error: error.message })
  }
}
const updateMedicine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await medicineService.updateMedicine(id as string, data)
    console.log(result)
    res.send(result)
  } catch (error: any) {
    res.send({ error: error.message })
  }
}

const deleteMedicine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await medicineService.deleteMedicine(id as string)
    res.send(result)
  } catch (error: any) {
    res.send({ error: error.message })
  }
}

export const medicineControler = {
  addMedicine,
  getAllMedicine,
  getMedicineByID,
  updateMedicine,
  deleteMedicine,
}