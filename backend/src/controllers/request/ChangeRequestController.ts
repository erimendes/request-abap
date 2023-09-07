import { Request, response, Response } from "express";
import { ChangeRequestService } from "../../services/request/ChangeRequestService"; 

class ChangeRequestController {
    async handle(req: Request, res: Response) {
        const { num, desc, dest, type, project, user } = req.body;

        const createRequestService = new ChangeRequestService();

        const request = await createRequestService.execute({
            num,
            desc,
            dest,
            type,
            project,
            user
        })
        console.log(request);
        return res.json(request);
    }
}

export { ChangeRequestController }