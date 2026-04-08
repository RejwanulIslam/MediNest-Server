import { NextFunction, Request, Response } from "express"
import { cardService } from "./card.service"
import { handlePrismaError } from "../../Errors/PrismaError"


const addCard = async (req: Request, res: Response,next:NextFunction) => {
 try {
       const data = req.body

    const result = await cardService.addCard(data)
    res.send(result)
 } catch (error) {
    next(error)
 }
}

const deleteCard = async (req: Request, res: Response,next:NextFunction) => {
   try {
     const ids=req.body.ids
    console.log(ids)
    const result = await cardService.deleteCard(ids as string[])
    res.send(result)
   } catch (error) {
    next(error)
   }
}
const getAllCard = async (req: Request, res: Response,next:NextFunction) => {
   try {
     const result = await cardService.getAllCard()
    res.send(result)
   } catch (error) {
    next(error)
   }
}

export const cardControler = {
    addCard,
    deleteCard,
    getAllCard
}