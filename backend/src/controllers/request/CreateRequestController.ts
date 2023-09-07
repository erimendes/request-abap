import { Request, response, Response } from "express";
import { CreateRequestService } from "../../services/request/CreateRequestService";

class CreateRequestController {
    async handle(req: Request, res: Response) {
        const { num, desc, dest, type, project, user } = req.body;

        const createRequestService = new CreateRequestService();

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

export { CreateRequestController }