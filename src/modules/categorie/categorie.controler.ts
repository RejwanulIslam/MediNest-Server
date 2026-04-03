import { Request, Response } from "express"
import { categorieService } from "./categorie.service"


const addCatagoty = async (req: Request, res: Response) => {
    const { categorieName } = req.body
    // if (!categorieName || typeof categorieName !== 'string') {
    //     res.send('place enter your catagory name')
    // }
    const result = await categorieService.addCatagoty(categorieName)
    res.send(result)
}

const getAllCatagoty = async (req: Request, res: Response) => {
    
    const result = await categorieService.getAllCatagoty()
    res.send(result)
}
const deleteCatagoty = async (req: Request, res: Response) => {
    const {id}=req.params
    const result = await categorieService.deleteCatagoty(id as string)
    res.send(result)
}

export const categorieControler = {
    addCatagoty,
    getAllCatagoty,
    deleteCatagoty
}