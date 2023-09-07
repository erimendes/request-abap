import { Request, response, Response } from "express";
import { CreateTaskService } from "../../services/task/CreateTaskService";

class CreateTaskController {
    async handle(req: Request, res: Response) {
        const { num, desc, type, request_num } = req.body;

        const createRequestService = new CreateTaskService();

        const object = await createRequestService.execute({
            num,
            desc,
            type,
            request_num,
        })

        return res.json(object)
    }
}

export { CreateTaskController }