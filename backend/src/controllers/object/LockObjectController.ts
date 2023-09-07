import { Request, response, Response } from "express";
import { LockObjectService } from "../../services/object/LockObjectService"; 

class LockObjectController {
    async handle(req: Request, res: Response) {
        const { pgmid, obj } = req.body;

        const lockObjectService = new LockObjectService();

        const object = await lockObjectService.execute({
            pgmid
            //obj,
            //objname,
            //task_num
        })
        console.log(object);
        return res.json(object);
    }
}

export { LockObjectController }