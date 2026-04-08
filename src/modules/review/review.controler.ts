import { NextFunction, Request, Response } from "express"
import { reviewService } from "./review.service"

const addReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const id = req.user?.id
        if (!id) {
            return res.send("your user id is null")
        }
        const result = await reviewService.addReview(data, id)
        res.send(result)
    } catch (error: any) {
        next(error)
    }
}

const getAllReview = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const result = await reviewService.getAllReview(id as string)
        res.send(result)
    } catch (error: any) {
        next(error)
    }
}

export const reviewControler = {
    addReview,
    getAllReview,
}