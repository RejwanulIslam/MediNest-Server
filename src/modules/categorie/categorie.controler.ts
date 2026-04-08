import { NextFunction, Request, Response } from "express"
import { categorieService } from "./categorie.service"
import { handlePrismaError } from "../../Errors/PrismaError"


const addCatagoty = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categorieName } = req.body

        const result = await categorieService.addCatagoty(categorieName)
        res.send(result)
    } catch (error) {
        next(error)
    }
}

const getAllCatagoty = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await categorieService.getAllCatagoty()
        res.send(result)
    } catch (error) {
        next(error)
    }
}
const deleteCatagoty = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const result = await categorieService.deleteCatagoty(id as string)
        res.send(result)
    } catch (error) {
        next(error)
    }
}

export const categorieControler = {
    addCatagoty,
    getAllCatagoty,
    deleteCatagoty
}