import { Request, Response } from "express"
import { medicineService } from "./medicine.service"


const addCatagoty = async (req: Request, res: Response) => {
    const { categorieName } = req.body
    if (!categorieName || typeof categorieName !== 'string') {
        res.send('place enter your catagory name')
    }
    const result = await medicineService.addCatagoty(categorieName)
    res.send(result)
}

export const medicineControler = {
    addCatagoty
}