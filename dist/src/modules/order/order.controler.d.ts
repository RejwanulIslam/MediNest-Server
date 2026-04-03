import { Request, Response } from "express";
export declare const orderControler: {
    addOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllOrder: (req: Request, res: Response) => Promise<void>;
    getOrderByID: (req: Request, res: Response) => Promise<void>;
    updateOrder: (req: Request, res: Response) => Promise<void>;
    deleteOrder: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=order.controler.d.ts.map