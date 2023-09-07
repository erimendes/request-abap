import { Request, Response } from 'express';
import { ReleaseRequestService } from '../../services/request/ReleaseRequestService'; 

class ReleaseRequestController{
    async handle(req: Request, res: Response){
        const num = req.query.num as string;

        const releaseRequest = new ReleaseRequestService();

        const request = await releaseRequest.execute({
            num
        });

        console.log(request);

        return res.json(request);
        
    }
}

export { ReleaseRequestController }