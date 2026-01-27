import { Request, Response } from "express"
import { reviewService } from "./review.service"
import { send } from "node:process"

const addReview = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const id=req.user?.id
        if(!id){
           return res.send("your user id is null")
        }
        const result = await reviewService.addReview(data,id)
        res.send(result)
    } catch (error: any) {
       res.send({error:error.message}) 
    }
}

const getAllReview = async (req: Request, res: Response) => {
   try {
     const result = await reviewService.getAllReview()
    res.send(result)
   } catch (error: any) {
       res.send({error:error.message}) 
    }
}

export const reviewControler = {
   addReview,
   getAllReview,
}