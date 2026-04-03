import { prisma } from "../../lib/prisma"
import { MedData } from "../../types"

interface Card {
    customerId: string;
    productId: string;
    quantity:number
}
const addCard = async (card: Card) => {
    const { customerId, productId,quantity } = card

    const result = await prisma.card.create({
        data: {
            customerId,
            productId,
            quantity,
        }
    })
    return result
}

const getAllCard = async () => {

    const result = await prisma.card.findMany({
        include:{
            customer:true,
            product:true
        }
    })
    return result
}

const deleteCard = async (ids: string[]) => {
    const result = await prisma.card.deleteMany({
        where: {
            id:{
               in: ids
            }
        }
    })
    return result
}



export const cardService = {
    addCard,
    deleteCard,
    getAllCard
}