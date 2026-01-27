import { Request, Response } from "express"
import { categorieService } from "./categorie.service"


const addCatagoty = async (req: Request, res: Response) => {
    const { categorieName } = req.body
    if (!categorieName || typeof categorieName !== 'string') {
        res.send('place enter your catagory name')
    }
    const result = await categorieService.addCatagoty(categorieName)
    res.send(result)
}

export const categorieControler = {
    addCatagoty
}