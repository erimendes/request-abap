import { Request, response, Response } from "express";
import { ReleaseTaskService } from "../../services/task/ReleaseTaskService";  

class ReleaseTaskController {
    async handle(req: Request, res: Response) {
        const { num, desc, dest, type, project, user } = req.body;

        const releaseTaskService = new ReleaseTaskService();

        const task = await releaseTaskService.execute({
            num
        })
        console.log(task);
        return res.json(task);
    }
}

export { ReleaseTaskController }