import { Request, response, Response } from "express";
import { CancelTaskService } from "../../services/task/CancelTaskService";  

class CancelTaskController {
    async handle(req: Request, res: Response) {
        const { num, desc, type, request_num } = req.body;

        const cancelTaskService = new CancelTaskService();

        const request = await cancelTaskService.execute({
            num
        })
        console.log(request);
        return res.json(request);
    }
}

export { CancelTaskController }