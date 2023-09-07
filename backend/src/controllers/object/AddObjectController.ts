import { Request, response, Response } from "express";
import { AddObjectService } from "../../services/object/AddObjectService"; 

class AddObjectController {
    async handle(req: Request, res: Response) {
        const { pgmid, obj, objname, task_num } = req.body;

        const addObjectService = new AddObjectService();

        const object = await addObjectService.execute({
            pgmid,
            obj,
            objname,
            task_num
        })

        return res.json(object)
    }
}

export { AddObjectController }