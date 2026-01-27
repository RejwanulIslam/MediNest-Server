import { Request, Response } from "express"
import { userService } from "./user.service"

const getAllUser= async (req: Request, res: Response) => {
   try {
     const result = await userService.getAllUser()
    res.send(result)
   } catch (error: any) {
       res.send({error:error.message}) 
    }
}

export const userController = {
    getAllUser
}