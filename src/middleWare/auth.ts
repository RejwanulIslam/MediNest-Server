import { NextFunction, Request, Response } from "express"
import { auth as betterAuth } from "../lib/auth"


export enum userRole {
    user = "USER",
    seler = "SELER",
    admin = "ADMIN"
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string
                name: string
                email: string
                role: string
                status: string
                image: string
            }
        }
    }
}

 const auth = (...role: userRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const session = await betterAuth.api.getSession({
            headers: req.headers as any
        })
        if (!session) {
            return res.send("You are not authroize")
        }
        req.user = {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image as string,
            role: session.user.role as string,
            status:session.user.status as string
        }

        if(role.length&&!role.includes(req.user.role as userRole)){
            return res.status(403).json({
                message:"forbidden access"
            })
        }
      
          next()
    }
}

export default auth

