import { Request, response, Response } from "express";
import { UnlockObjectService } from "../../services/object/UnlockObjectService"; 

class UnlockObjectController {
    async handle(req: Request, res: Response) {
        const { pgmid, obj } = req.body;

        const unlockObjectService = new UnlockObjectService();

        const object = await unlockObjectService.execute({
            pgmid
            //obj,
            //objname,
            //task_num
        })
        console.log(object);
        return res.json(object);
    }
}

export { UnlockObjectController }