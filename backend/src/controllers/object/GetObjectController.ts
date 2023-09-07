import { Request, Response } from 'express';
import { FindRequestService } from '../../services/request/FindRequestService'; 

class FindRequestController{
    async handle(req: Request, res: Response){
        const num = req.query.num as string;

        const findRequest = new FindRequestService();

        const request = await findRequest.execute({
            num
        });

        console.log(request);

        return res.json(request);
        
    }
}

export { FindRequestController }