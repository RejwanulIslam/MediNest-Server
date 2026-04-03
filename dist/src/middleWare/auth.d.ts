import { NextFunction, Request, Response } from "express";
export declare enum userRole {
    user = "USER",
    seler = "SELER",
    admin = "ADMIN"
}
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                name: string;
                email: string;
                role: string;
                status: string;
                image: string;
            };
        }
    }
}
declare const auth: (...role: userRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default auth;
//# sourceMappingURL=auth.d.ts.map