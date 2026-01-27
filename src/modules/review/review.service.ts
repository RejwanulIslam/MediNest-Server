import { prisma } from "../../lib/prisma"
import { Review } from "../../types"

const addReview = async (data: Review,id:string) => {
    const {productId, rating, comment, } = data
    try {
        const result = await prisma.reviews.create({
            data: {
                customerId:id,
                productId,
                rating,
                comment
            }
        })
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}

const getAllReview = async () => {
 try {
    const result = await prisma.reviews.findMany()
    return result   
 }  catch (error:any) {
    return {error:error.message}
   }
}

export const reviewService = {
    addReview,
    getAllReview,

}