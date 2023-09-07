import { Request, response, Response } from "express";
import { MoveObjectService } from "../../services/object/MoveObjectService"; 

class MoveObjectController {
    async handle(req: Request, res: Response) {
        const { pgmid, obj } = req.body;

        const moveObjectService = new MoveObjectService();

        const object = await moveObjectService.execute({
            pgmid
            //obj,
            //objname,
            //task_num
        })
        console.log(object);
        return res.json(object);
    }
}

export { MoveObjectController }