import { Request, Response } from 'express';
import { DelRequestService } from '../../services/request/DelRequestService'; 

class DelRequestController{
    async handle(req: Request, res: Response){
        const num = req.query.num as string;

        const delRequest = new DelRequestService();

        const Requestdeleted = await delRequest.execute({
            num
        });

        console.log(Requestdeleted);

        return res.json(Requestdeleted);
        
    }
}

export { DelRequestController }