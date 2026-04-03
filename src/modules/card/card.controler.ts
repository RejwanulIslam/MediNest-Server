import { Request, Response } from "express"
import { cardService } from "./card.service"


const addCard = async (req: Request, res: Response) => {
    const data = req.body

    const result = await cardService.addCard(data)
    res.send(result)
}

const deleteCard = async (req: Request, res: Response) => {
    const ids=req.body.ids
    console.log(ids)
    const result = await cardService.deleteCard(ids as string[])
    res.send(result)
}
const getAllCard = async (req: Request, res: Response) => {
    const result = await cardService.getAllCard()
    res.send(result)
}

export const cardControler = {
    addCard,
    deleteCard,
    getAllCard
}